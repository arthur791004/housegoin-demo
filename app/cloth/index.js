'use strict';

import angular from 'angular';

import ClothService from './services/cloth';
import RateFormatFilter from './filters/rate-format';

const NAME = 'housegoin.module.cloth';
const MODULES = [

];

angular.module(NAME, MODULES)
  .service('ClothService', ClothService)
  .filter('rateFormat', RateFormatFilter);
