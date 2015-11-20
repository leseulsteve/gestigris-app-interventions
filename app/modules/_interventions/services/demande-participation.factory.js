'use strict';

angular.module('interventions').factory('DemandeParticipation',
  function (Schema) {

    var DemandeParticipation = new Schema('demandeparticipation');

    return DemandeParticipation;

  });
