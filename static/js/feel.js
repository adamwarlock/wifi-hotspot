angular.module('ngLogin', [])

.controller('btnCtrl', function($scope) {
  /*  $scope.exp1 = false;
    $scope.exp2 = false;*/
    $scope.enable = function() {
        return !($scope.exp1 && $scope.exp2);
    };
})