gnp_app.controller('playerRecordController', ["$scope", "httpRequest", function ($scope, httpRequest) {

    httpRequest.send('GET','users')
        .then(
            function(res)
            {
                $scope.userData = res.data;
                console.log("userdata!!");
                console.log($scope.userData);
            },
            function(res)
            {
                alert("fail");
                console.log(res);
            }
        );

}]);
