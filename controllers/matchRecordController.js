gnp_app.controller("matchRecordController",["$scope","$rootScope","httpRequest",function($scope,$rootScope,httpRequest)
{

    $scope.userCheckbox=[];


    httpRequest.send('GET','users')
        .then(
            function(res)
            {
                console.log(res);
                console.log(res.data);
                for(var i=0;i<res.data.length;i++)
                {
                    var temp = {number:res.data[i].backnumber,name:res.data[i].name, ischecked:false};
                    console.log(temp);
                    $scope.userCheckbox.push(temp);
                    console.log($scope.userCheckbox);
                }
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

    $scope.clickwhy = function(item)
    {
        alert("click");
        console.log("click!!");
        console.log(item);
        item.ischecked = true;
    };
    // $scope.$watch( "userCheckbox" , function(n,o){
    //     console.log(n + o);
    // }, true );

    

    

}]);
