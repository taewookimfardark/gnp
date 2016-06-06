var gnp_app = angular.module('gnp_app',['ui.router','ngMaterial']);

gnp_app.config(function($stateProvider, $urlRouterProvider, $mdIconProvider)
{
    $urlRouterProvider.otherwise("/main");
    
    $stateProvider
        .state('main',{
            url: "main",
            templateUrl: "src/main.html"
        })
        .state('matchschedule',{
            url: "matchschedule",
            templateUrl: "src/match_schedule.html"
        })
        .state('matchresult',{
            url: "matchresult",
            templateUrl: "src/match_result.html"
        })
        .state('playerresult',{
            url: "playerresult",
            templateUrl: "src/player_result.html"
        });
    
});