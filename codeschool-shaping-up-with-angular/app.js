/*
Directives – HTML annotations that trigger Javascript behaviors 
Modules – Where our application components live
Controllers – Where we add application behavior
Expressions – How values get displayed within the page
*/
(function() {
  // angular.module the second params is the dependencies
  var app = angular.module('gemStore', ['store-directives']);

  // injection, 依赖注入
  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('./store-products.json').success(function(data){
        store.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();