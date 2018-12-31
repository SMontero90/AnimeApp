import './detail.scss';
import { appModule } from '../../routeConfig';
import DetailCtrl from './detail.controller';

let detailComponent = {
  template: require('./detail.html'),
  controller: DetailCtrl,
  controllerAs: 'detail'
};

appModule.component('detailComponent', detailComponent);
