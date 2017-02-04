angular.module('ngLogin', [])

.controller('btnCtrl', function($scope) {
  /*  $scope.exp1 = false;
    $scope.exp2 = false;*/
    $scope.enable = function() {
        return !($scope.exp1 && $scope.exp2);
    };
})

var view=angular.module('routeApp',['ngRoute']);

view.config(function($routeProvider){
	$routeProvider
		
		.when("/login",{
			templateUrl : "static/login.html",
			//template: "<h1>About controller using template</h1>",
			
			controller : "aboutController"

		});
		
		
});

view.controller("aboutController", function($scope){
	//$scope.message = "Controller for about page!";
	console.log("Inside about route");
});

