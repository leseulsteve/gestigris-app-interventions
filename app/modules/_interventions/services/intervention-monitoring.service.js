'use strict';

angular.module('interventions').factory('InterventionMonitor',
  function ($interval, $http) {

    var InterventionMonitor = function (intervention, interval) {
      this.intervention = intervention;
      this.interval = interval;
      this.lastUpdate = undefined;
      this.intervalPromise = undefined;
    };

    InterventionMonitor.prototype.start = function (cb) {
      var that = this;
      this.lastUpdate = new Date();
      this.intervalPromise = $interval(function () {
        $http.get('intervention/' + that.intervention._id, {
          headers: {
            'If-Modified-Since': that.lastUpdate
          }
        }).then(function (response) {
          that.lastUpdate = new Date();
          cb(response.data);
        });
      }, this.interval);
    };

    InterventionMonitor.prototype.stop = function () {
      $interval.cancel(this.intervalPromise);
      this.intervalPromise = undefined;
    };

    InterventionMonitor.prototype.isMonitoring = function () {
      return !_.isUndefined(this.intervalPromise);
    };

    return InterventionMonitor;

  });
