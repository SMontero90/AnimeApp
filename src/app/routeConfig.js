import '../style/app.scss';

export let appModule = angular.module('animeapp', [require('angular-route'), require('angular-animate')]);

/* @ngInject */
appModule.config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/', {
        template: '<home-component></home-component>'
      })
      .when('/detail/:id', {
        template: '<detail-component></detail-component>'
      })
      .otherwise({ redirectTo: '/'});

    $locationProvider.html5Mode(true);
  });

appModule.constant( 'JIKAN_URL', 'https://api.jikan.moe/v3/' );
appModule.constant( 'PATHS', { schedule: 'schedule', anime: 'anime' } );
appModule.constant( 'DAYS', [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ] );
