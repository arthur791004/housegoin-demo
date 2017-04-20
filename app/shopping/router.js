export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app.shopping', {
      url: '/shopping',
      template: '<div>shopping</div>',
    });

}
