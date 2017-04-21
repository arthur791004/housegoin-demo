export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app.shopping', {
      url: '/shopping',
      template: '<shopping class="flex-col-conainer"></shopping>',
    });

}
