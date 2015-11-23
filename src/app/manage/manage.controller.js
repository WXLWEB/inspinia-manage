(function() {
  'use strict';

  angular
    .module('inspiniaManage')
    .controller('ManageController', ManageController);

    /** @ngInject */
    function ManageController() {
        var vm = this;
        vm.userName = 'Example user';
        vm.helloText = 'Welcome in INSPINIA Gulp SeedProject';
        vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';
    }
})();
