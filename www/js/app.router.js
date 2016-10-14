(function () {
    'use strict';

    angular
        .module('starter')
        .config(appRouter);

    appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appRouter($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('main', {
            url: '/main',
            templateUrl: 'templates/main.html',
            controller: 'MainController as mainVm'
        })

        .state('map', {
            url: '/',
            templateUrl: 'templates/map.html',
            controller: 'MapController as mapVm'
        })

        $urlRouterProvider.otherwise('/');
    }
})();