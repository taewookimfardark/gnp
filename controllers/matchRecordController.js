gnp_app.controller("matchRecordController",["$scope","$rootScope","httpRequest",function($scope,$rootScope,httpRequest)
{
    httpRequest.send('GET','users')
        .then(
            function(res)
            {
                $scope.userList = res.data;
                console.log($scope.userList);
            },
            function(res)
            {
                alert("fail");
                console.log(res);
            }
        );

    httpRequest.send('GET','matches/'+$rootScope.matchId)
        .then(
            function(res)
            {
                console.log(res);
                $scope.matchDetail = res.data;
            },
            function(res)
            {
                alert("fail");
                console.log(res);
            }
        );
    

    

}])
