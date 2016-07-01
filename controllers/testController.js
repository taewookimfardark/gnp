gnp_app.controller("testController", ["$scope", "httpRequest",
    function ($scope, httpRequest) {
        $scope.userData = "test";
        console.log("11");
        httpRequest.send('GET','users')
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

