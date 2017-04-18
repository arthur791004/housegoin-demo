export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app', {
      abstract: true,
      url: '',
      template: '<app></app>',
    });

  $urlRouterProvider.otherwise('');
}
