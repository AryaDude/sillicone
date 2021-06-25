class Game{
    constructor(){

    }

    getState(){
        database.ref("gameState").on("value", (data)=>{
            gameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }



    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount()
            }
            form = new Form();
            form.display();

        }

        playerz1 = createSprite(displayWidth/2,displayHeight*0.25,50,50);
        playerz2 = createSprite(displayWidth/2,displayHeight*0.75,50,50);
    }

    if(player1){

    }


    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getCarsEnd() 
        if(allPlayers!=undefined){
            background("peach")
            image(track,0,-4*height,width,height*5)
            var index = 0; 
            var x = 200;
            var y;
            for(var plr in allPlayers){
                index++;
                x += 200;
                y = displayHeight-allPlayers[plr].distance
                console.log(index)
                yacht[index - 1].x = x;
                yacht[index - 1].y = y;
                if(index === player.index){
                    fill("red")
                    ellipse(x,y,100,100)
                    camera.position.x = width/2;
                    camera.position.y = yacht[index - 1].y;
                }
            }
        }
        if(keyDown(UP_ARROW) && player.index!=null){
            player.distance += 50
            player.update()
        }
        if(player.distance >= 3500){
            gameState = 2;
            player.rank++
            Player.updateEndCars(player.rank)
        }
    }

    end(){
        //console.log("This is an announcment to all players. The game has ended. Thank you for playing pinnacle Road. This is reward: # yy%y83h^3hjshdjka987#")
    alert("You were " + player.rank + " place")
    }


}