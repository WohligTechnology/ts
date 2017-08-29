// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'angular-flexslider',
    'angularPromiseButtons',
    'toastr',
    'angular-flexslider',
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('module', {
            url: "/module",
            templateUrl: tempateURL,
            controller: 'moduleCtrl'
        })
        .state('module-detail', {
            url: "/module-detail",
            templateUrl: tempateURL,
            controller: 'moduleDetailCtrl'
        })
        .state('module-test', {
            url: "/module-test",
            templateUrl: tempateURL,
            controller: 'moduleTestCtrl'
        })
        .state('about-us', {
            url: "/about-us",
            templateUrl: tempateURL,
            controller: 'AboutUsCtrl'
        })
        .state('faq', {
            url: "/faq",
            templateUrl: tempateURL,
            controller: 'FaqCtrl'
        })
        .state('module-score', {
            url: "/module-score",
            templateUrl: tempateURL,
            controller: 'moduleScoreCtrl'
        })
        .state('account', {
            url: "/account",
            templateUrl: tempateURL,
            controller: 'AccountCtrl'
        })

        .state('enquiry', {
            url: "/enquiry",
            templateUrl: tempateURL,
            controller: 'enquiryCtrl'
        })
        .state('privacypolicy', {
            url: "/privacypolicy",
            templateUrl: tempateURL,
            controller: 'PrivacypolicyCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('grid', {
            url: "/grid",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});