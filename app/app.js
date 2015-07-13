angular.module("app", ["ui.router"])

    .config(function config($stateProvider) {
        $stateProvider.state("home", {
            url: "",
            controller:"HomeCtrl as home",
            templateUrl: "templates/home.html"
        })
        $stateProvider.state("first", {
            url: "/first",
            controller:"FirstCtrl as first",
            templateUrl: "templates/first.html"
        })
        $stateProvider.state("second", {
            url:"/second",
            controller:"SecondCtrl as second",
            templateUrl: "templates/second.html"
        })
    })

    .service("greeting", function Greeting() {
        var greeting = this;

        greeting.message = "Default";
    })

    .controller ("HomeCtrl", function HomeCtrl() {
    var home = this;
    })

    .controller ("FirstCtrl", function FirstCtrl(greeting) {
    var first = this;

    first.greeting = greeting;
    })

    .controller ("SecondCtrl", function SecondCtrl(greeting) {
    var second = this;

    second.greeting = greeting;
    })