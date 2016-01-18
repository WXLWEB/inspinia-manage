(function() {
  'use strict';

  angular
    .module('inspiniaManage')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
