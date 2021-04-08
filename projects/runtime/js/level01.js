var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                {'type' : "potion", 'x':350,'y':groundY},
                {'type' : 'greenSquare', 'x':200,'y' : groundY},

            ]
        };
        for (var i = 0; i < levelData.length; i++){
            var eachElement = levelData[i];
        }

        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        
        
        function createSawBlade(x,y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize,damageFromObstacle)
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
        }

        createSawBlade(400,300);
        createSawBlade(800,200);
        createSawBlade(1500,300);
       
        
        function createStones(x,y){
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var stoneHitZone = game.createObstacle(hitZoneSize,damageFromObstacle)
            stoneHitZone.x = x;
            stoneHitZone.y = y;
            game.addGameItem(stoneHitZone);
            var obstacleImage = draw.bitmap('img/stonelarge.png');
            stoneHitZone.addChild(obstacleImage);
        }
        createStones(1000, 300);

  

        function createEnemy(x,y){
            var enemy = game.createGameItem('enemy',25);
            var greenSquare = draw.rect(50,50,'green');
            greenSquare.x = -25;
            greenSquare.y = -25;
            enemy.addChild(greenSquare);
            enemy.x = 400;
            enemy.y = groundY - 50;
            game.addGameItem(enemy);
            enemy.velocityX = -1 ;

            enemy.rotationalVelocity = 3;

            enemy.onPlayerCollsion = function(){
                console.log('the enemy has hit Halle');
                game.changeIntegrity(10);
            }
            
            enemy.onProjectileCollision = function(){
                console.log('Halle has hit the enemy');
                game.increaseScore(100);
                enemy.fadeOut();
            }
        }    

        createEnemy (300, 200);
        
         
       function healingHealth(x,y){
           var potion = game.createGameItem('',25);
            var greenSquare = draw.rect(50,50,'green');
            greenSquare.x = -25;
            greenSquare.y = -25;
            enemy.addChild(greenSquare);
            enemy.x = 400;
            enemy.y = groundY - 50;
            game.addGameItem(enemy);
            enemy.velocityX = -1 ;

            enemy.rotationalVelocity = 3;
       }


        

        

        
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
    
}
