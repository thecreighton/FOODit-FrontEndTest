'use strict';

/**
 * @ngdoc service
 * @name jstestApp.Basketservice
 * @description
 * # BasketService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
  .factory('BasketService', function () {
    var service = {
      add: add,
      get: get
    };

    return service;

    function add (item) {
      if (item.quantity !== undefined) {
        item.quantity ++;
      }
      else {
        item.quantity = 1;
      }

      return item;
    }

    function get () {
      if (localStorage.getItem('basket') === null) {
        return null;
      }
      return JSON.parse(localStorage.getItem('basket'));
    }

  });
