'use strict';

import angular from 'angular';

import 'angular-translate';

import zhTw from './zh-tw';

const NAME = 'housegoin.module.i18n';
const MODULES = [
  'pascalprecht.translate',
];

angular.module(NAME, MODULES)
  .config(zhTw)
  .config(languages);

function languages($translateProvider) {
  $translateProvider.preferredLanguage('zh-tw');
}
