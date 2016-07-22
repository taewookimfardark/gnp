gnp_app.controller("loginController", ["$scope","$rootScope", function ($scope,$rootScope) {
    $rootScope.loginsuccess = false;
    $rootScope.loginfail = true;
    console.log("test");
    console.log($rootScope.loginsuccess);
    console.log($rootScope.loginfail);
}]);

