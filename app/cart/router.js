export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app.cart', {
      url: '/cart',
      template: '<cart></cart>',
    });

}
