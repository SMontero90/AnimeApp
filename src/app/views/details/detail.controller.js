/* @ngInject */
export default class DetailCtrl {

  constructor($sce, $route, animeService) {
    this.$sce = $sce;
    this.$route = $route;
    this.animeService = animeService;
  }

  $onInit() {
    this.animeId = this.$route.current.params.id;
    this.loading = true;
    this.serviceError = false;

    this.animeService.getAnimeInformation(this.animeId).then(
      (successResponse) => {
        this.loading = false;
        this.animeData = successResponse[0].data;
        this.charactersData = successResponse[1].data;
        this.episodesData = successResponse[2].data;
        this.currentPage = 1;
      },
      (errorResponse) => {
        this.loading = false;
        this.serviceError = true;
      }
    );
  }

  getEpisodesByPage(pageNumber) {
    this.currentPage = pageNumber;
    this.loadingEpisodes = true;
    this.serviceError = false;

    this.animeService.getEpisodes(this.animeId, this.currentPage).then(
      (successResponse) => {
        this.loadingEpisodes = false;
        this.episodesData = successResponse.data;
      },
      (errorResponse) => {
        this.loadingEpisodes = false;
        this.serviceError = true;
      }
    );
  }

  trustSrc(src) {
    return this.$sce.trustAsResourceUrl(src);
  }

}
