'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {

  var text;

  $scope.create = function() {

    var style = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: 100, align: "center", backgroundColor: "#ffff00" };
    game.stage.backgroundColor = 0x5d5d5d;
    text = game.add.text(game.world.centerX, game.world.centerY, "- text on a sprite -\ndrag me");
    text.anchor.set(0.5, 0.5);
  }

  $scope.update = function(){

  }

  $scope.preload = function(){

  }

  var game = new Phaser.Game(
      800,
      600,
      Phaser.AUTO,
      'phaserGame',
      { preload: $scope.preload, create: $scope.create, update: $scope.update }
  );



}]);