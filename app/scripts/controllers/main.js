'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', 'BasketService', 'BasketResetService', function ($scope, MenuService, BasketService, BasketResetService) {
    $scope.menu = {};
    $scope.totalPrice = 0;
    $scope.restaurantName = "Creighton's Cookery";
    $scope.basket = BasketService.get();

    // setup the basket here. If there is a basket in storage, use that.
    if ($scope.basket === null) {
      MenuService.get('/data/menu.json').success(function(data) {
        $scope.menu = data;
      });
      $scope.basketHide = false;
    }
    else {
      $scope.menu = JSON.parse(localStorage.getItem('basket'));
      $scope.totalPrice = parseFloat(localStorage.getItem('price'));
      $scope.basketHide = true;
    }

    $scope.addToBasket = function(item) {
      $scope.menu.meals[item.$index] = BasketService.add(item.meal);
      $scope.mealCalculator(item);
      localStorage.setItem('basket', JSON.stringify($scope.menu));
      $scope.basket = $scope.menu;
      $scope.basketHide = true;
    };

    $scope.mealCalculator = function(item) {
      $scope.totalPrice += parseFloat(item.meal.price);
      localStorage.setItem('price', $scope.totalPrice);
    };

    $scope.confirmOrder = function() {
      $scope.menu = BasketResetService.reset();
      $scope.totalPrice = 0;
      $scope.basketHide = true;
      MenuService.get('/data/menu.json').success(function(data) {
        $scope.menu = data;
      });
    };
  }
]);
