'use strict';

angular.module('core').service('Modal',
  function ($rootScope, $mdDialog, $mdMedia) {

    var fullScreenModal = 'modules/core/views/fullscreen.modal.html',
      regularModal = 'modules/core/views/regular.modal.html',
      templateUrl = $mdMedia('sm') ? fullScreenModal : regularModal;

    var Modal = function (params) {
      this.templateUrl = templateUrl;
      this.title = params.title;
      this.subtitle = params.subtitle;
      this.contentTemplateUrl = params.templateUrl;
      this.formName = params.formName;
      this.animate = params.animate || false;
    };

    Modal.prototype.show = function ($event, scopeObjects) {

      this.scope = $rootScope.$new();
      _.assign(this.scope, scopeObjects);
      this.scope.modal = this;

      var that = this;

      return $mdDialog.show({
        targetEvent: $event,
        scope: this.scope,
        templateUrl: this.templateUrl,
        preserveScope: true
      }).then(function () {
        that.scope.$destroy();
      });
    };

    Modal.prototype.close = function () {
      $mdDialog.hide();
    };

    Modal.prototype.cancel = function () {
      $mdDialog.cancel();
    };

    return Modal;

  });
