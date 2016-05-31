'use strict';

/**
 * @ngdoc service
 * @name jstestApp.BasketResetservice
 * @description
 * # BasketResetService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
  .factory('BasketResetService', function () {

    var service = {
      reset: reset
    };

    return service;

    function reset () {
      localStorage.removeItem('price');
      localStorage.removeItem('basket');

      return null;
    }

  });
