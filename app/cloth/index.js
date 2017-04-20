'use strict';

import angular from 'angular';

import ClothService from './services/cloth';

const NAME = 'housegoin.module.cloth';
const MODULES = [

];

angular.module(NAME, MODULES)
  .service('ClothService', ClothService);
