(function() {
    'use strict';


// Angular Init
    var app = angular.module('euApp', ['ngRoute']);





// Router
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '../templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/company', {
                templateUrl: '../templates/company.html',
                controller: 'CompanyCtrl'
            })
            .when('/presskit', {
                templateUrl: '../templates/presskit.html',
                controller: 'PresskitCtrl'
            })
            .otherwise('/home');
    }]);




// Greeting Service
    app.service('greeting', function Greeting() {
        var greeting = this;
        greeting.message = 'Default';
    });





// Youtube Directive
app.directive('youtube', function($window) {
    return {
        restrict: "E",

        scope: {
            height:   "@",
            width:    "@",
            videoId:  "@"
        },

        template: '<div></div>',

        link: function(scope, element) {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;

            $window.onYouTubeIframeAPIReady = function() {
                player = new YT.Player(element.children()[0], {

                    playerVars: {
                        autoplay: 0,
                        html5: 1,
                        theme: "dark",
                        modesbranding: 0,
                        color: "white",
                        iv_load_policy: 3,
                        rel: 0,
                        showinfo: 0,
                        controls: 2
                    },

                    height: "1280",
                    width: "720",
                    videoId: "vmiUGJtcUi4"
                });
            };
        }
    };
});




// Controllers
app.controller('HomeCtrl', function HomeCtrl($scope) {
    $scope.crowdfundingStatus = true;
});

app.controller('CompanyCtrl', function CompanyCtrl($scope, greeting) {
    $scope.greeting = greeting;
});

app.controller('PresskitCtrl', function PresskitCtrl($scope, greeting) {
    $scope.greeting = greeting;
});




}());
