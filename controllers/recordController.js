gnp_app.controller("recordController", ["$scope","httpRequest", function($scope, httpRequest)
{
    httpRequest.send('GET','records')
        .then(
            function (res){
                console.log("22");
                $scope.userData = res.data;
            },
            function(res){
                console.log(res);
                console.log("33");
            }
        );
}]);