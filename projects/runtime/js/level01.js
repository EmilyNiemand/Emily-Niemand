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
                {'type' : "reward", 'x':450,'y':groundY},
                {'type' : 'enemy', 'x':200,'y' : groundY},
                {'type' : 'stones', 'x':1500,'y' : 300},

            ]
        };
        for (var i = 0; i < levelData.gameItems.length; i++){
            var object = levelData.gameItems[i];
            var objX = object.x;
            var objY = object.y;
            var objType = object.type;

            if(objType === 'sawblade'){
                createSawBlade(objX, objY)

            } else if(objType === 'enemy'){
                createEnemy(objX, objY)
            } else if(objType === 'stones'){
                createStones(objX, objY)
            } else{createReward(objX, objY)}
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
        

  

        function createEnemy(x,y){
             var hitZoneSize = 10;
            var damageFromObstacle = 10;
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

        
        
         function createReward(x,y){
              var hitZoneSize = 5;
             var reward = game.createGameItem('reward',25);
            var pinkSquare = draw.rect(50,50,'pink');
            pinkSquare.x = x;
            pinkSquare.y = x;
            reward.addChild(pinkSquare);
            reward.x = 900;
            reward.y = groundY - 50;
            game.addGameItem(reward);
            reward.velocityX = -1 ;
            reward.rotationalVelocity = 3;
            reward.onProjectileCollision = function(){
                console.log('Its over 9000!');
                game.increaseScore(9001);
                reward.fadeOut();
            }
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