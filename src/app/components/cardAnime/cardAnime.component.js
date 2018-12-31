import './cardAnime.scss';
import { appModule } from '../../routeConfig';
import CardAnimeCtrl from './cardAnime.controller';

let cardAnimeComponent = {
  bindings: {
    animeData: '<'
  },
  template: require('./cardAnime.html'),
  controller: CardAnimeCtrl,
  controllerAs: 'card'
};

appModule.component('cardAnimeComponent', cardAnimeComponent);
