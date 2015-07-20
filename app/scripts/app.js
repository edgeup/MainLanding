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