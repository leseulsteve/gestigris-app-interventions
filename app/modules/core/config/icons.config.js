'use strict';

angular.module('core')
  .config(function ($mdIconProvider) {
    $mdIconProvider
      .icon('menu', 'icons/ic_menu_48px.svg')
      .icon('more_vert', 'icons/ic_more_vert_48px.svg')
      .icon('arrow_back', 'icons/ic_arrow_back_48px.svg')
      .icon('account_circle', 'icons/ic_account_circle_48px.svg')

    .icon('forum', 'icons/ic_forum_48px.svg')
      .icon('person', 'icons/ic_person_48px.svg')

    .icon('info_outline', './icons/ic_info_outline_48px.svg')
      .icon('lock_outline', './icons/ic_lock_outline_48px.svg')
      .icon('lock_open', './icons/ic_lock_open_48px.svg')
      .icon('heart', './icons/ic_favorite_48px.svg')
      .icon('event', './icons/ic_event_note_48px.svg')
      .icon('heart_outline', './icons/ic_favorite_border_48px.svg');

  });
