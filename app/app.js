'use strict'


// Angular Init
var app = angular.module('euApp', ['ngRoute']);





// Router
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
    })
        .when('/company', {
            templateUrl: 'templates/company.html',
            controller: 'CompanyCtrl'
    })
        .otherwise('/home');
}]);





// Greeting Service
app.service('greeting', function Greeting() {
    var greeting = this;
    greeting.message = 'Default';
});





// Controllers
app.controller('HomeCtrl', function HomeCtrl() {
    var home = this;
});

app.controller('CompanyCtrl', function CompanyCtrl(greeting) {
    var first = this;
    first.greeting = greeting;
});

app.controller('SecondCtrl', function SecondCtrl(greeting) {
    var second = this;
    second.greeting = greeting;
});