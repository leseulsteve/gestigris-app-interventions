'use strict';

angular.module('navigation')
  .config(function ($mdIconProvider) {

    var materialDesignPath = 'lib/material-design-icons/';
    $mdIconProvider
      .icon('forum', materialDesignPath + 'communication/svg/production/ic_forum_24px.svg')
      .icon('person', materialDesignPath + 'social/svg/production/ic_person_48px.svg');
  });
