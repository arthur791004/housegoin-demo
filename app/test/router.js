export default function($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app.test', {
      abstract: true,
      url: '/test',
      template: '<div><h1>test</h1><ui-view></ui-view></div>',
    })
    .state('app.test.1', {
      url: '/1',
      template: '<div>test1</div>',
    })
    .state('app.test.2', {
      url: '/2',
      template: '<div>test2</div>',
    });

}
