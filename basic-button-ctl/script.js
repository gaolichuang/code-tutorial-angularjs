var app = angular.module('myApp', []);
app.controller('mCtrl', function($scope) {
  this.username = '';
  this.greeting = '';
  this.sayHello = function() {
    console.log('this.greeting')
    this.greeting = 'Hello ' + this.username + '!';
  };
});
