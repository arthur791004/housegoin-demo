'use strict';

import angular from 'angular';

import router from './router';
import ShoppingComponent from './components/shopping/';

const NAME = 'housegoin.module.shopping';
const MODULES = [

];

angular.module(NAME, MODULES)
  .config(router)
  .component('shopping', ShoppingComponent);
