angular.module("app").config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });
  $routeProvider.when('/foo', {
    templateUrl: 'foo.html',
    controller: 'HomeController'
  });

});
