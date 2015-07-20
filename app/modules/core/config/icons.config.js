'use strict';

angular.module('core')
  .config(function ($mdIconProvider) {
    $mdIconProvider
      .defaultFontSet('fontawesome')
      .icon('info_outline', './icons/ic_info_outline_48px.svg')
      .icon('lock_outline', './icons/ic_lock_outline_48px.svg')
      .icon('lock_open', './icons/ic_lock_open_48px.svg')
      .icon('heart', './icons/ic_favorite_48px.svg')
      .icon('event', './icons/ic_event_note_48px.svg')
      .icon('heart_outline', './icons/ic_favorite_border_48px.svg');
  });
