import './carousel.scss';
import { appModule } from '../../routeConfig';
import CarouselCtrl from './carousel.controller';

let carouselComponent = {
  bindings: {
    carouselData: '<'
  },
  template: require('./carousel.html'),
  controller: CarouselCtrl,
  controllerAs: 'carousel'
};

appModule.component('carouselComponent', carouselComponent);
