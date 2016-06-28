var gnp_app = angular.module('gnp_app',['ui.router','ngMaterial']);

gnp_app.config(function($stateProvider, $urlRouterProvider)
{
    console.log("config on");
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider
        .state('login',{
            url: "/login",
            templateUrl: "src/login.html"
        })
        .state('main',{
            url: "/main",
            templateUrl: "src/main.html"
        })
        .state('matchschedule',{
            url: "/matchschedule",
            templateUrl: "src/match_schedule.html",
            controller: "testController"
        })
        .state('matchresult',{
            url: "/matchresult",
            templateUrl: "src/match_result.html"
        })
        .state('playerresult',{
            url: "/playerresult",
            templateUrl: "src/player_result.html"
        });
    
});