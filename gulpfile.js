'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');
var superstatic = require('superstatic');
var tsd = require('tsd');
var path = require('path');
var concat = require('gulp-concat');

gulp.task('styles', function () {

    var sassOptions = {
        style: 'expanded',
        includePaths: [
            'bower_components'
        ]
    };

    var injectFiles = gulp.src([
        'bower_components/triangular/triangular.scss',
        'app/**/*.scss',
        '!app/index/app.scss'
    ], {read: false});

    var injectOptions = {
        transform: function (filePath) {
            filePath = filePath.replace('app/', '');
            return '@import \'' + filePath + '\';';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };

    var indexFilter = $.filter('app.scss', {
        restore: true
    });

    return gulp.src([
        'app/index/app.scss'
    ])
        .pipe(indexFilter)
        .pipe($.inject(injectFiles, injectOptions))
        .pipe($.debug({title: 'inject'}))
        .pipe(indexFilter.restore)
        .pipe($.sass(sassOptions))

        .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']}))
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('app/index/'));
});

gulp.task('test', function () {
    return gulp.src([
        'app/**/*.scss',
        '!app/index/app.scss',
        '!app/**/_*.scss'
    ], {read: false})
        .pipe($.debug({title: 'test'}))
});

gulp.task('inject', ['styles', 'bundle'], function () {
    var injectStyles = gulp.src([
        'app/**/*.css'
    ], {read: false});

    var injectScripts = gulp.src([
        'dist/**/*.js'
    ]);

    var injectOptions = {
        addRootSlash: false
    };

    var wiredepOptions = {
        directory: 'bower_components',
        exclude: [/bootstrap\.css/, /foundation\.css/, /material-design-iconic-font\.css/, /default\.css/]
    };

    return gulp.src('index.html')
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(wiredepOptions))
        .pipe(gulp.dest('.'));

});

gulp.task('bundle', function () {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
    gulp.src(['app/**/*.module.js', 'app/**/*.config.js', 'app/**/*.js' ])
        // Bundle to a single file
        .pipe(concat('main.js'))
        // Output it to our dist folder
        .pipe(gulp.dest('dist/js'));
});


gulp.task('watch', function () {
    gulp.watch(['app/**/*.scss', 'app/**/*.js', 'app/**/*.tmpl.html', 'app/**/*.json'], ['bundle','inject']);
});

gulp.task('serve', ['styles','bundle','watch'], function () {
    process.stdout.write('Starting browserSync and superstatic...\n');
    browserSync({
        port: 3000,
        files: ['index.html', 'dist/**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        logPrefix: 'angularin20typescript',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: './',
            middleware: superstatic({debug: false})
        }
    });
});


gulp.task('tsd:install', function () {
    var tsdJson = './tsd.json';
    var tsdApi = new tsd.getAPI(tsdJson);
    var bower = require(path.join(process.cwd(), 'bower.json'));

    var dependencies = [].concat(
        Object.keys(bower.dependencies),
        Object.keys(bower.devDependencies)
    );

    var query = new tsd.Query();
    dependencies.forEach(function (dependency) {
        query.addNamePattern(dependency);
    });

    var options = new tsd.Options();
    options.resolveDependencies = true;
    options.overwriteFiles = false;
    options.saveBundle = true;

    return tsdApi.readConfig()
        .then(function () {
            return tsdApi.select(query, options);
        })
        .then(function (selection) {
            return tsdApi.install(selection, options);
        })
        .then(function (installResult) {
            var written = Object.keys(installResult.written.dict);
            var removed = Object.keys(installResult.removed.dict);
            var skipped = Object.keys(installResult.skipped.dict);

            written.forEach(function (dts) {
                console.log('Definition file written: ' + dts);
            });

            removed.forEach(function (dts) {
                console.log('Definition file removed: ' + dts);
            });

            skipped.forEach(function (dts) {
                console.log('Definition file skipped: ' + dts);
            });
        });
});
