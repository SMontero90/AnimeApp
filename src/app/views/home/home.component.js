import './home.scss';
import { appModule } from '../../routeConfig';
import HomeCtrl from './home.controller';

let homeComponent = {
  template: require('./home.html'),
  controller: HomeCtrl,
  controllerAs: 'home'
};

appModule.component('homeComponent', homeComponent);
