import angular from 'angular';

/////////////////////////////////////////////////////////
// Library
/////////////////////////////////////////////////////////
import 'angular-sweetalert';
import 'angular-toastr';
import 'angular-ui-bootstrap';
import 'angular-ui-router';

/////////////////////////////////////////////////////////
// Library CSS
/////////////////////////////////////////////////////////
import 'angular-toastr/dist/angular-toastr.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'sweetalert/dist/sweetalert.css';

/////////////////////////////////////////////////////////
// Modules
/////////////////////////////////////////////////////////
import './cart/';
import './cloth/';
import './core/';
import './i18n/';
import './shopping/';
import './test/';

/////////////////////////////////////////////////////////
// SCSS
/////////////////////////////////////////////////////////
import './styles/main.scss';

(function() {
  'use strict';

  const NAME = 'housegoin.demo';
  const MODULES = [
    'infinite-scroll',
    'oitozero.ngSweetAlert',
    'toastr',
    'ui.bootstrap',
    'ui.router',
    'housegoin.module.cart',
    'housegoin.module.cloth',
    'housegoin.module.core',
    'housegoin.module.i18n',
    'housegoin.module.shopping',
    'housegoin.module.test',
  ];

  angular.module(NAME, MODULES)
    .config(configToast)
    .run(initialize);

  function configToast(toastrConfig) {
    'ngInject';

    angular.extend(toastrConfig, {
      autoDismiss: false,
      containerId: 'toast-container',
      newestOnTop: true,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body',
      timeOut: 4000
    });
  }

  function initialize() {
    'ngInject';

  }

})();
