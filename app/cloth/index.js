'use strict';

import angular from 'angular';

import ClothService from './services/cloth';
import ClothItemComponent from './components/cloth-item';
import ClothViewerComponent from './components/cloth-viewer';
import RateFormatFilter from './filters/rate-format';

const NAME = 'housegoin.module.cloth';
const MODULES = [

];

angular.module(NAME, MODULES)
  .service('ClothService', ClothService)
  .component('clothItem', ClothItemComponent)
  .component('clothViewer', ClothViewerComponent)
  .filter('rateFormat', RateFormatFilter);
