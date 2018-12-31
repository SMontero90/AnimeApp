import { appModule } from '../routeConfig';

/* @ngInject */
class AnimeService {

  constructor($q, $http, JIKAN_URL, PATHS) {
    this.$q = $q;
    this.$http = $http;
    this.PATHS = PATHS;
    this.JIKAN_URL = JIKAN_URL;
  }

  getSchedule(currentDay) {
    return this.$http.get(this.JIKAN_URL + this.PATHS.schedule + `/${currentDay}`);
  }

  getAnimeInformation(id) {
    let deferred = this.$q.defer();
    let baseUrl = this.JIKAN_URL + this.PATHS.anime + `/${id}`;
    let promises = [this.$http.get(baseUrl),
                   this.$http.get(baseUrl + '/characters_staff'),
                   this.$http.get(baseUrl + '/episodes')];

    this.$q.all(promises)
      .then(
        (successResponse) =>{
          deferred.resolve(successResponse)
        },
        (errorResponse) => {
          deferred.reject(errorResponse);
        });

    return deferred.promise;
  }

  getEpisodes(id, page) {
    let baseUrl = this.JIKAN_URL + this.PATHS.anime + `/${id}/episodes/${page}`;

    return this.$http.get(baseUrl);
  }
}

appModule.service('animeService', AnimeService);
