var AmmaCommon;
(function (AmmaCommon) {
    var directives;
    (function (directives) {
        var File;
        (function (File) {
            /** @ngInject */
            function AmmaFile($parse, AmmaFileUploadService, AmmaMessageService, $q) {
                return {
                    restrict: 'A',
                    require: 'ngModel',
                    link: function (scope, element, attrs, ngModelController) {
                        // console.log(model(scope));//to get value
                        // model.assign(scope,'test');
                        var tokenModel = $parse(attrs.ammaFileToken);
                        var type = attrs.ammaFileType;
                        var ngModel = attrs.ngModel;
                        var filesModel = $parse(attrs.ammaFile);
                        var busyModel = $parse(attrs.ammaFileBusy);
                        var ammaFileRemoveBind = attrs.ammaFileRemoveFunc;
                        var ammaFileViewUrlBind = attrs.ammaFileViewUrlFunc;
                        var canceler;
                        var setToken = function (token) {
                            tokenModel.assign(scope, token);
                        };
                        var getToken = function () {
                            if (!tokenModel(scope)) {
                                tokenModel.assign(scope, getUniqueToken());
                            }
                            return tokenModel(scope);
                        };
                        var isBusy = function (bool) {
                            busyModel.assign(scope, bool);
                        };
                        var setFiles = function (files) {
                            filesModel.assign(scope, files);
                        };
                        var getFiles = function () {
                            return filesModel(scope) || [];
                        };
                        var addFile = function (file) {
                            var files = getFiles();
                            files.push(file);
                            setFiles(files);
                        };
                        var removeFileFromModel = function (file) {
                            var files = getFiles();
                            var index = -1;
                            for (var i = 0; i < files.length; i++) {
                                if (files[i].filename && files[i].filename === file) {
                                    index = i;
                                    break;
                                }
                            }
                            if (index > -1) {
                                files.splice(index, 1);
                                setFiles(files);
                            }
                        };
                        var upload = function (file) {
                            var promise = AmmaFileUploadService.upload(type, getToken(), file);
                            isBusy(true);
                            promise.then(function (response) {
                                addFile(response.data.file);
                                isBusy(false);
                                AmmaMessageService.displaySuccessMessage('file uploaded successfully');
                            }, function (response) {
                                AmmaMessageService.displayErrorMessage('Cannot upload file', response);
                                isBusy(false);
                            });
                        };
                        var getUniqueToken = function () {
                            var string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
                            return string;
                        };
                        var loadFiles = function () {
                            isBusy(true);
                            if (canceler) {
                                canceler.resolve();
                            }
                            canceler = $q.defer();
                            AmmaFileUploadService.getFilesList(type, getToken(), canceler).then(function (response) {
                                setFiles(response.data.files);
                                isBusy(false);
                            }, function (response) {
                                AmmaMessageService.displayErrorMessage('Cannot get files', response);
                                isBusy(false);
                            });
                        };
                        var removeFile = function (file, $event) {
                            isBusy(true);
                            if ($event) {
                                $event.preventDefault();
                            }
                            AmmaFileUploadService.removeFile(type, getToken(), file).then(function (response) {
                                removeFileFromModel(file);
                                ngModelController.$validate();
                                isBusy(false);
                            }, function (response) {
                                AmmaMessageService.displayErrorMessage('Cannot remove file', response);
                                isBusy(false);
                            });
                        };
                        var isValid = function () {
                            return AmmaFileUploadService.isValidCheck(type, getToken());
                        };
                        var viewFileUrl = function (file) {
                            return AmmaFileUploadService.viewFileUrl(type, getToken(), file);
                        };
                        if (ammaFileRemoveBind) {
                            $parse(ammaFileRemoveBind).assign(scope, removeFile);
                        }
                        if (ammaFileViewUrlBind) {
                            $parse(ammaFileViewUrlBind).assign(scope, viewFileUrl);
                        }
                        if (attrs.ammaFileValidator) {
                            ngModelController.$asyncValidators.ammaFileValidator = function (modelValue, viewValue) {
                                var deferred = $q.defer();
                                isValid().then(function (response) {
                                    deferred.resolve(true);
                                }, function (response) {
                                    deferred.reject(response.data.message);
                                });
                                return deferred.promise;
                            };
                        }
                        var unbindWatch = scope.$watch(ngModel, function (newValue, oldValue) {
                            if (newValue && newValue != oldValue) {
                                upload(newValue);
                            }
                        });
                        var unbindTokenWatch = scope.$watch(tokenModel, function (newValue, oldValue) {
                            loadFiles();
                        });
                        scope.$on('$destroy', function () {
                            unbindWatch();
                            unbindTokenWatch();
                        });
                    }
                };
            }
            File.AmmaFile = AmmaFile;
            angular
                .module('amma-common')
                .directive('ammaFile', AmmaFile);
        })(File = directives.File || (directives.File = {}));
    })(directives = AmmaCommon.directives || (AmmaCommon.directives = {}));
})(AmmaCommon || (AmmaCommon = {}));
