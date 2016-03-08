(function() {
  'use strict';

//Directive used to set metisMenu and minimalize button
  angular
    .module('inspiniaManage')
    .directive('sideNavigation', sideNavigation);
    function sideNavigation($timeout){
      return {
            restrict: 'A',
            link: function (scope, element) {
                // Call metsi to build when user signup
                scope.$watch('authentication.user', function() {
                    $timeout(function() {
                        element.metisMenu();
                    });
                });

            }
        };
    }
})();
