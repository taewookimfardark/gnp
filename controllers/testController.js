gnp_app.controller("testController", ["$scope", "httpRequest",
    function ($scope, httpRequest) {
        $scope.userDate = "test";
        console.log("11");
        httpRequest.send('GET','users')
            .then(
                function (res){
                    console.log("22");
                    console.log(res);
                },
                function(res){
                    console.log(res);
                    console.log("33");
                }
            );
    }]);

