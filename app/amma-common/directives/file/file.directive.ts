module AmmaCommon.directives.File {

    import FileUploadService = AmmaCommon.Services.FileUploadService;
    import MessageService = AmmaCommon.Services.MessageService;
    export interface IScope extends ng.IScope {
        ammaFileToken:string;
        ammaValidFiles:any[];
    }

    /** @ngInject */
    export function AmmaFile($parse:ng.IParseService, AmmaFileUploadService:FileUploadService, AmmaMessageService:MessageService, $q:ng.IQService):ng.IDirective {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope:ng.IScope, element, attrs, ngModelController) {
                // console.log(model(scope));//to get value
                // model.assign(scope,'test');
                let token = attrs.ammaFileToken;
                const type = attrs.ammaFileType;
                const ngModel = attrs.ngModel;
                const filesModel = $parse(attrs.ammaFile);
                const busyModel = $parse(attrs.ammaFileBusy);

                const ammaFileRemoveBind = attrs.ammaFileRemoveFunc;
                const ammaFileViewUrlBind = attrs.ammaFileViewUrlFunc;


                const isBusy = (bool:boolean) => {
                    busyModel.assign(scope, bool);
                };

                const setFiles = (files:any[]) => {
                    filesModel.assign(scope, files);
                };

                const addFile = (file)=> {
                    let files = filesModel(scope);
                    files.push(file);
                    setFiles(files);
                };
                const removeFileFromModel = (file) => {
                    let files = filesModel(scope);
                    let index = -1;
                    for (let i = 0; i < files.length; i++) {
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

                const upload = (file)=> {
                    const promise = AmmaFileUploadService.upload(type, token, file);
                    isBusy(true);
                    promise.then((response)=> {
                        addFile(response.data.file);
                        isBusy(false);
                        AmmaMessageService.displaySuccessMessage('file uploaded successfully');
                    }, (response:any)=> {
                        AmmaMessageService.displayErrorMessage('Cannot upload file', response);
                        isBusy(false);
                    });
                };

                const createToken = () => {
                    isBusy(true);
                    AmmaFileUploadService.createToken(type).then((response:any)=> {
                        token = response.data.token;
                        isBusy(false);
                        loadFiles();
                    }, (response) => {
                        AmmaMessageService.displayErrorMessage('Cannot get file token', response);
                        isBusy(false);
                    });

                };

                const loadFiles = () => {
                    isBusy(true);
                    AmmaFileUploadService.getFilesList(type, token).then((response:any)=> {
                        setFiles(response.data.files);
                        isBusy(false);
                    }, (response) => {
                        AmmaMessageService.displayErrorMessage('Cannot get files', response);
                        isBusy(false);
                    });
                };

                const removeFile = (file, $event) => {
                    isBusy(true);
                    if ($event) {
                        $event.preventDefault();
                    }
                    AmmaFileUploadService.removeFile(type, token, file).then((response:any)=> {
                        removeFileFromModel(file);
                        ngModelController.$validate();
                        isBusy(false);
                    }, (response) => {
                        AmmaMessageService.displayErrorMessage('Cannot remove file', response);
                        isBusy(false);
                    });
                };

                const isValid = () => {
                    return AmmaFileUploadService.isValidCheck(type, token);
                };

                const viewFileUrl = (file:string) => {
                    return AmmaFileUploadService.viewFileUrl(type, token, file);
                };

                if (ammaFileRemoveBind) {
                    $parse(ammaFileRemoveBind).assign(scope, removeFile);
                }

                if (ammaFileViewUrlBind) {
                    $parse(ammaFileViewUrlBind).assign(scope, viewFileUrl);
                }
                // code starts
                if (!token) {
                    createToken();
                } else {
                    loadFiles();
                }

                if (attrs.ammaFileValidator) {
                    ngModelController.$asyncValidators.ammaFileValidator = (modelValue, viewValue) => {
                        let deferred = $q.defer();
                        isValid().then((response)=> {
                            deferred.resolve(true);
                        }, (response)=> {
                            deferred.reject(response.data.message);
                        });
                        return deferred.promise;
                    };
                }

                const unbindWatch = scope.$watch(ngModel, (newValue, oldValue)=> {
                    if (newValue && newValue != oldValue) {
                        upload(newValue);
                    }
                });


                scope.$on('$destroy', ()=> {
                    unbindWatch();
                });


            }
        };

    }

    angular
        .module('amma-common')
        .directive('ammaFile', AmmaFile);
}

