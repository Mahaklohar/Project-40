class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        if(allPlayers !== undefined){
        var x = 100;
        var y = 200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index += 1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
           players[index -1].x = x;
           players[index - 1].y = y;
            

            // Differentiate the main player by printing
            
            // the name of the player on the basket. 
            textSize(30)
            fill("Blue")
            stroke("Blue")
            strokeWeight(2)
            text(allPlayers[plr].name, x-38, y+25);

        }

    }


        // Give movements for the players using arrow keys
        if(keyIsDown(LEFT_ARROW) && player.distance !== null){
            player.distance += 10;
            player.update();
        }
        if(keyIsDown(RIGHT_ARROW) && player.distance !== null){
            player.distance -= 10;
            player.update();
        }


        // Create and spawn fruits randomly
        
    
    if (frameCount % 80 === 0){
        fruits = createSprite(Math.round(random(10, 590)))
        fruits.velocityY = 3;
        //fruits.scale = 0.3;
    
    var rand = Math.round(random(1, 5));
    
    if (rand === 1){  
    fruits.addImage(fruit1_img);
    
    }else if (rand === 2){
    fruits.addImage(fruit2_img);
        
    }else if (rand === 3){
    fruits.addImage(fruit3_img); 

    } else if (rand === 4){   
    fruits.addImage(fruit4_img);

    }else{
    fruits.addImage(fruit5_img)
    }
    
    fruitGroup.add(fruits);   
}    
  

    }

    end(){
       alert("Game Ended");
    }
    
}