'use strict';

angular.module('interventions').directive('interventionTags',
  function () {
    return {
      restrict: 'E',
      scope: {
        tagsId: '=tags'
      },
      templateUrl: 'modules/interventions/views/intervention-tags.html',
      controller: function ($scope, InterventionTag) {
        InterventionTag.find({
          _id: {
            $in: $scope.tagsId
          }
        }).then(function (tags) {
          $scope.tags = tags;
        });
      }
    };
  });
