angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.listviewcool', {
        views: {
            app: {
                controller: 'app_listviewcool',
                templateProvider: function (app) {
                    return app.templateProvider('app.listviewcool');
                }
            }
        }
    }).state('app.postscool', {
        views: {
            app: {
                controller: 'app_postscool',
                templateProvider: function (app) {
                    return app.templateProvider('app.postscool');
                }
            }
        }
    }).state('app.sptestscreen', {
        views: {
            app: {
                controller: 'app_sptestscreen',
                templateProvider: function (app) {
                    return app.templateProvider('app.sptestscreen');
                }
            }
        }
    }).state('app.tghgfhghfghf', {
        views: {
            app: {
                controller: 'app_tghgfhghfghf',
                templateProvider: function (app) {
                    return app.templateProvider('app.tghgfhghfghf');
                }
            }
        }
    }).state('app.screen1', {
        views: {
            app: {
                controller: 'app_screen1',
                templateProvider: function (app) {
                    return app.templateProvider('app.screen1');
                }
            }
        }
    }).state('app.new/listviewcool', {
        views: {
            app: {
                controller: 'app_new_listviewcool',
                templateProvider: function (app) {
                    return app.templateProvider('app.new.listviewcool');
                }
            }
        }
    });
});