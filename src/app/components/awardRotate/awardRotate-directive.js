(function() {
  'use strict';

  angular
    .module('inspiniaManage')
    .directive('awardRotate', awardRotate);

  /** @ngInject */
  function awardRotate($log, $modal) {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/awardRotate/awardRotate.html',
        link: linkFunc
      };
      return directive;

      function linkFunc(scope, element, attr, vm){

        var rotateTimeOut = function (){
          $('#rotate').rotate({
            angle:0,
            animateTo:2160,
            duration:8000,
            callback:function (){
              alert('网络超时，请检查您的网络设置！');
            }
          });
        };
        var bRotate = false;

        var rotateFn = function (awards, angles, txt){
          bRotate = !bRotate;
          $('#rotate').stopRotate();
          $log.debug('text',txt);
          $('#rotate').rotate({
            angle:0,
            animateTo:angles+1800,
            duration:8000,
            callback:function (){
              /*alert(txt);*/
              var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/components/luckyModal/lucky_modal.html',
                controller: 'LuckModalController',
                controllerAs:'vm',
                size: 'md',
                resolve: {
                  items: function () {
                    return txt;
                  }
                }
              });
              //swal({title: "获得"+txt+"红包",   imageUrl: "assets/images/gx.png" });

              bRotate = !bRotate;
            }
          })
        };
        var rnd = function (n, m){
          return Math.floor(Math.random()*(m-n+1)+n)
        };

        element.on('click', '.pointer',function (event) {
          // Prevent default dragging of selected content
          event.preventDefault();

          if(bRotate)return;
          var item = rnd(1,5);

          switch (item) {
            case 1:
              //var angle = [26, 88, 137, 185, 235, 287, 337];
              rotateFn(1, 55, '888元');
              break;
            case 2:
              //var angle = [88, 137, 185, 235, 287];
              rotateFn(2, 140, '388元');
              break;
            case 3:
              //var angle = [137, 185, 235, 287];
              rotateFn(3, 199, '188元');
              break;
            case 4:
              //var angle = [137, 185, 235, 287];
              rotateFn(4, 269, '88元');
              break;
            case 5:
              //var angle = [185, 235, 287];
              rotateFn(5, 341, '8元');
              break;
          }

        });
      }
    }
})();
