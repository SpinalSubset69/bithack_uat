(() => {
  angular.module("main").config(($routeProvider) => {
    $routeProvider.when("/", {
      templateUrl: "./../views/main.html",
    });
  });
})();
