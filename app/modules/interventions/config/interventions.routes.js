'use strict';

angular.module('core')
  .config(function ($stateProvider) {

    $stateProvider
      .state('interventions', {
        url: '/interventions',
        templateUrl: 'modules/interventions/views/interventions.list.html',
        controller: function ($scope) {
          var list = [{
            month: new Date(),
            days: [{
              day: new Date(),
              locations: _.split([{
                description: 'École secondaire Neufchâtel 1',
                interventions: [{
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }]
              }, {
                description: 'École secondaire Neufchâtel 2',
                interventions: [{
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }]
              }, {
                description: 'École secondaire Neufchâtel 3',
                interventions: [{
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }]
              }, {
                description: 'École secondaire Neufchâtel 4',
                interventions: [{
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }]
              }, {
                description: 'École secondaire Camaradière',
                interventions: [{
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }, {
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }]
              }], 2)
            }, {
              day: new Date(),
              locations: [{
                description: 'École secondaire Neufchâtel',
                interventions: [{
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }]
              }, {
                description: 'École secondaire Camaradière',
                interventions: [{
                  dateRange: {
                    start: new Date(),
                    end: new Date()
                  }
                }]
              }]
            }]
          }];

          $scope.list = list;
        }
      });
  });
