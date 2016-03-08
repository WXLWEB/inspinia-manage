(function(){
  'use strict';

  angular
    .module('inspiniaManage')
    .controller('LuckModalController',LuckModalController);

  /** @ngInject */
  function LuckModalController( $scope,$modalInstance, items, $log){
    var vm = this;
    vm.items = items;
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }

})();
