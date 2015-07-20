'use strict';

describe('Controller: ConversationsController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('conversations'));

    var ConversationsController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ConversationsController = $controller('ConversationsController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
