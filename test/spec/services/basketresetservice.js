'use strict';

describe('Service: BasketResetService', function () {

  // load the service's module
  beforeEach(module('jstestApp'));

  // instantiate service
  var BasketResetService;
  beforeEach(inject(function ($injector) {
    BasketResetService = $injector.get('BasketResetService');
  }));

  it('should reset any storage on execution', function () {

    localStorage.setItem('basket', JSON.stringify(data));
    localStorage.setItem('price', "9.50");
    BasketResetService.reset();
    expect(localStorage.getItem('basket')).toBe(null);
    expect(localStorage.getItem('price')).toBe(null);

  });

});
