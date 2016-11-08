'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',['$scope', function($scope) {


    var spaceship,
        rotateLeft,
        rotateRight,
        fireGun,
        rocket;


    $scope.preload = function() {
        game.load.image('spaceship', 'img/spaceship.png');
        game.load.image('rocket', 'img/rocket.png');
    }

    $scope.create = function() {
        //instantiate spaceship
        spaceship = game.add.sprite(game.world.centerX, game.world.centerY, 'spaceship');
        spaceship.anchor.setTo(0.5, 0);

        //handle movement
        rotateLeft = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        rotateRight = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        rotateLeft.onHoldCallback = $scope.rotateLeft;
        rotateRight.onHoldCallback = $scope.rotateRight;

        // fire rocket
        fireGun = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        fireGun.onDown.add($scope.fireGun);

    }

    $scope.rotateLeft = function(){
        spaceship.angle -= 2;
    }

    $scope.rotateRight = function(){
        spaceship.angle += 2;
    }

    $scope.fireGun = function(){

        console.log(spaceship.angle);
        rocket = game.add.sprite(spaceship.x, spaceship.y, 'rocket');
        rocket.anchor.setTo(0.5, 1);
        rocket.angle = spaceship.angle;
        game.physics.enable(rocket, Phaser.Physics.ARCADE);

        // get the velocity
        game.physics.arcade.velocityFromAngle(rocket.angle-90, 100, rocket.body.velocity);
        //rocket.body.velocity.y = -20;
    }

    $scope.update = function(){
        spaceship.x = game.input.x;
        spaceship.y = game.input.y;

    }

    var game = new Phaser.Game(
        800,
        600,
        Phaser.AUTO,
        'phaserGame',
        { preload: $scope.preload, create: $scope.create, update: $scope.update }
    );


}]);