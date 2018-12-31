/* @ngInject */
export default class HomeCtrl {

  constructor(animeService, DAYS) {
    this.animeService = animeService;
    this.DAYS = DAYS;
    this.currentDay = this.DAYS[new Date().getDay()];
  }

  $onInit() {
    this.getScheduleByDay(this.currentDay);
  }

  getScheduleByDay(selectedDay) {
    this.loading = true;
    this.serviceError = false;
    this.currentDay = selectedDay;

    this.animeService.getSchedule(selectedDay).then(
      (successResponse) => {
        this.loading = false;
        this.animeData = successResponse.data[selectedDay];
      },
      (errorResponse) => {
        this.loading = false;
        this.serviceError = true;
      }
    );
  }

}
