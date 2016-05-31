'use strict';

describe('Directive: Scroll Address Table -', function() {
  var element, scope, compile;

  // load the directive's module and view
  beforeEach(module('jstestApp'));

  // inject the HTML fixture for the tests
  function setupSpec() {
    element = compile(
      '<div id="basket-top" class="col-xs-12 row basket-top" > ' +
      '<div class="row basket-full" ng-show="basketHide">' +
      '<h3 class="basket-full-header">Your Order</h3>' +
      '<h5 class="basket-full-sub-header italic">Creightons Cookery</h5>' +
      '<div class="row meal-basket-entry" ng-repeat="meal in menu.meals track by $index" ng-show="meal.quantity >= 1">' +
      '<div class="col-xs-1 meal-basket-quantity">{{meal.quantity}}</div>' +
      '<div class="col-xs-8 meal-basket-name">{{meal.name}}</div>' +
      '<div class="col-xs-3 meal-basket-price">{{meal.price | currency:"£"}}</div>' +
      '</div>' +
      '</div>' +

      '<div class="col-xs-offset-1 col-xs-10 basket-empty" ng-hide="basketHide">' +
      'Its time to order some delicious food' +
      '</div>' +

      '<div class="col-xs-12 basket-order-summary" ng-show="basketHide">' +
      '<div class="col-xs-9 confirm-order italic" ng-click="confirmOrder()">' +
      'Confirm your Order' +
      '</div>' +
      '<div class="col-xs-offset-1 col-xs-2 total-price">' +
      '{{totalPrice | currency:"£"}}' +
      '</div>' +
      '</div>' +

      '</div>' +

      '<div class="col-xs-12 row restaurant-title">' +

      '<h2>{{restaurantName}}</h2>' +

      '</div>' +

      '<div class="col-xs-12 row menu">' +

      '<div class="meals">' +
      '<div class="meal" ng-repeat="meal in menu.meals">' +
      '<div class="row image-holder">' +
      '<img class="col-xs-12 image" ng-src="{{meal.primaryImageUrl}}">' +
      '</div>' +

      '<div class="row price-position">' +
      '<h3 class="price">{{meal.price | currency:"£"}}</h3>' +
      '</div>' +

      '<div class="row meal-info">' +
      '<h2 class="col-xs-12 name">{{meal.name}}</h2>' +
      '<p class="col-xs-12 description">{{meal.description}}</p>' +
      '<button id="clickme" class="clickme col-xs-offset-1 col-xs-10 add-button italic" ng-click="addToBasket(this)">Add To Your Order</button>' +
      '</div>' +

      '</div>' +
      '</div>' +

      '</div>'
    )
    (scope);
    scope.$digest();

  }


  beforeEach(inject(function ($rootScope, $compile) {

    compile = $compile;
    scope = $rootScope.$new();

    scope.menu = {};
    scope.totalPrice = 0;
    scope.restaurantName = 'Creightons Cookery';
    scope.menu = data;
    scope.basketHide = false;

    setupSpec();

  }));


  it('should have a menu object on initial load with 23 results', function () {
    expect(scope.menu.resultCount).toEqual(23);
  });

  it('shouldnt have a quantity value on initial load', function () {
    expect(scope.menu.meals[0].quantity).toEqual(undefined);
  });

  it('should have price set as 0 on initial load', function () {
    expect(scope.totalPrice).toEqual(0);
  });

  it('should have the correct restaurant name on load', function () {
    expect(expect(scope.restaurantName).toBe("Creightons Cookery"));
  });

});
