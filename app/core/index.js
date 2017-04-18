'use strict';

import angular from 'angular';

import router from './router';
import CoreService from './services/core';
import AppComponent from './components/app/';

const NAME = 'housegoin.module.core';
const MODULES = [

];

angular.module(NAME, MODULES)
  .config(router)
  .service('CoreService', CoreService)
  .component('app', AppComponent);
