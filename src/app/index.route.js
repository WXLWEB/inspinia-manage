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
      .state('/manage', {
        url: '/manage',
        templateUrl: 'app/manage/manage.html',
        controller: 'ManageController',
        controllerAs: 'Manage'
      });

    $urlRouterProvider.otherwise('/index');
  }

})();
