export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app.cart', {
      url: '/cart',
      template: '<div>cart</div>',
    });

}
