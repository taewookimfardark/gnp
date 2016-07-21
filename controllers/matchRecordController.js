gnp_app.controller("matchRecordController",["$scope","$rootScope","httpRequest",function($scope,$rootScope,httpRequest)
{

    $scope.userCheckbox=[];
    $scope.matchPlayerRecord=[
        {
            name : '',
            backnumber : '',
            points : '',
            assists : '',
            rebounds : '',
            blocks : '',
            steals : ''
        }
    ];
    
    $scope.matchupdate = {
        finish : true,
        win : true,
        members : $scope.matchPlayerRecord
    };
    
    

    $scope.addplayer = function(player)
    {
        $scope.matchPlayerRecord.push(player);
    };


    httpRequest.send('GET','users')
        .then(
            function(res)
            {
                console.log(res);
                console.log(res.data);
                $scope.userList = res.data;
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
                console.log("matchdetail");
                console.log(res);
                $scope.matchDetail = res.data;
            },
            function(res)
            {
                alert("fail");
                console.log(res);
            }
        );

    // $scope.clickwhy = function(item)
    // {
    //     alert("click");
    //     console.log("click!!");
    //     console.log(item);
    //     item.ischecked = true;
    // };
    // $scope.$watch( "userCheckbox" , function(n,o){
    //     console.log(n + o);
    // }, true );
    $scope.console = function()
    {
        console.log($scope.matchPlayerRecord);
        console.log($scope.matchupdate);
    };

    $scope.addmatch = function()
    {
        httpRequest.send('PUT','matches/'+$rootScope.matchId,$scope.matchupdate)
            .then(
                function(res)
                {
                    console.log("match update!");
                    console.log(res);
                },
                function(res)
                {
                    alert("fail");
                    console.log(res);
                }
            );
    };

    

    

}]);
