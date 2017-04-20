'use strict';

import angular from 'angular';

import router from './router';

const NAME = 'housegoin.module.test';
const MODULES = [

];

angular.module(NAME, MODULES)
  .config(router);
