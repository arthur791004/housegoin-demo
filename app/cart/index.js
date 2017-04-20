'use strict';

import angular from 'angular';

import router from './router';
import CartService from './services/cart';
import CartComponent from './components/cart/';

const NAME = 'housegoin.module.cart';
const MODULES = [

];

angular.module(NAME, MODULES)
  .config(router)
  .service('CartService', CartService)
  .component('cart', CartComponent);
