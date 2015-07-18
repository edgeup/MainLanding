// Angular Init
var app = angular.module("euApp", ["ui.router"]);





// Router
app.config(function config($stateProvider) {
    $stateProvider.state("home", {
        url: "/",
        controller: "HomeCtrl as home",
        templateUrl: "templates/home.html"
    });
    $stateProvider.state("first", {
        url: "/first",
        controller: "FirstCtrl as first",
        templateUrl: "templates/first.html"
    });
    $stateProvider.state("second", {
        url: "/second",
        controller: "SecondCtrl as second",
        templateUrl: "templates/second.html"
    });
});





// Greeting Service
app.service("greeting", function Greeting() {
    var greeting = this;
    greeting.message = "Default";
});





// Controllers
app.controller("HomeCtrl", function HomeCtrl() {
    var home = this;
});

app.controller("FirstCtrl", function FirstCtrl(greeting) {
    var first = this;
    first.greeting = greeting;
});

app.controller("SecondCtrl", function SecondCtrl(greeting) {
    var second = this;
    second.greeting = greeting;
});