(function() {
  'use strict';

  angular
    .module('inspiniaManage')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });
    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'app/components/common/content.html',
      })
      .state('index.chart', {
        url: '/chart',
        templateUrl: 'app/components/chart/flot_chart.html',
        controller: 'flotChartCtrl',
        controllerAs: 'FlotChart',
        resolve: {
          loadPlugin: function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                name: 'angular-flot',
                files: ['/bower_components/flot/jquery.flot.js',
                '/bower_components/flot/jquery.flot.time.js',
                '/bower_components/flot.tooltip.pib/js/jquery.flot.tooltip.min.js',
                // '/bower_components/flot-spline/js/jquery.flot.spline.min.js',
                '/bower_components/flot/jquery.flot.resize.js',
                '/bower_components/flot/jquery.flot.pie.js',
                '/bower_components/flot.curvedlines/curvedLines.js',
                '/bower_components/angular-flot/angular-flot.js' ]
            }]);
          }
        }
      })
      .state('index.minor', {
        url: '/minor',
        templateUrl: 'app/minor/minor.html',
        controller: 'ManageController',
        controllerAs: 'Manage'
      });

    $urlRouterProvider.otherwise('/index/chart');
  }

})();
