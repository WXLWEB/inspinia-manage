(function() {
  'use strict';

  angular
    .module('inspiniaManage')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/index',
        // abstract: true,
        templateUrl: 'app/components/common/content.html',
      })
      .state('index.manage', {
        url: '/manage',
        templateUrl: 'app/manage/manage.html',
        controller: 'ManageController',
        controllerAs: 'Manage'
      })
      .state('index.minor', {
        url: '/minor',
        templateUrl: 'app/minor/minor.html',
        controller: 'ManageController',
        controllerAs: 'Manage'
      });

    $urlRouterProvider.otherwise('/index/manage');
  }

})();
