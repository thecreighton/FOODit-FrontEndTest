'use strict';

describe('Service: BasketService', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var BasketService;
  beforeEach(inject(function ($injector) {
    BasketService = $injector.get('BasketService');
    delete data.meals[0].quantity;
  }));

  it('should adjust the quantity for the selected item without adding any quantity information for other meals for the basket', function() {

    var basketAdjustment = BasketService.add(item);
    data.meals[0] = basketAdjustment;
    expect(data.meals[0].quantity).toBe(1);
    expect(data.meals[1].quantity).toBe(undefined);
    expect(data.resultCount).toBe(23);
  });

  it('should adjust the quantity multiple times for the selected item without adding any quantity information for other meals for the basket', function() {

    BasketService.add(item);
    BasketService.add(item);
    var basketAdjustment = BasketService.add(item);
    data.meals[0] = basketAdjustment;
    expect(data.meals[0].quantity).toBe(3);
    expect(data.meals[1].quantity).toBe(undefined);
    expect(data.resultCount).toBe(23);
  });

  it('should initially return an empty basket', function() {

    var emptyBasket = BasketService.get();
    expect(emptyBasket).toBe(null);

  });

  it('should return a basket with items when one already exists on initial load (persistent storage)', function() {

    localStorage.setItem('basket', JSON.stringify(data));
    var fullBasket = BasketService.get();
    expect(fullBasket).toEqual(data);

  });

});
