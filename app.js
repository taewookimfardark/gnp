var gnp_app = angular.module('gnp_app',['ui.router','ngMaterial','ui.grid']);

gnp_app.config(function($stateProvider, $urlRouterProvider)
{
    console.log("config on");
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider
        .state('login',{
            url: "/login",
            templateUrl: "src/login.html"
        })
        .state('join',{
            url: "/join",
            templateUrl: "src/join.html",
            controller: "joinController"
        })
        .state('main',{
            url: "/main",
            templateUrl: "src/main.html"
        })
        .state('matchschedule',{
            url: "/matchschedule",
            templateUrl: "src/match_schedule.html",
            controller: "matchController"
        })
        .state('matchrecord',{
            url: "/matchrecord",
            templateUrl: "src/match_record.html",
            controller: "matchRecordController"
        })
        .state('playerresult',{
            url: "/playerresult",
            templateUrl: "src/player_result.html",
            controller: "playerRecordController"
        });
    
});