app = angular.module('blackWolfApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/projects', {
            templateUrl: 'partials/projects.html',
            controller: 'projectCtrl'
        })
        .when('/resume', {
            templateUrl: 'partials/resume.html',
            controller: 'resumeCtrl'
        })
        .when('/sandbox', {
            templateUrl: 'partials/sandbox.php',
            controller: 'resumeCtrl'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.php',
            controller: 'contactCtrl'
        })
        .when('/mail', {
            templateUrl: 'partials/mail.php',
            controller: 'mailCtrl'
        })
        .otherwise({
            redirectTo: 'partials/home.html'
        });
});
