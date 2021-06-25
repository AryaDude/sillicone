class Player{
    constructor(){
        this.index = null;
        this.heart=3
    }
    getCount(){
        database.ref("playerCount").on("value", (data)=>{
            playerCount = data.val()
        })
    }

    updateCount(count,skin){
        database.ref("/").update({
            playerCount:count
        })
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).update({
            skin:skin
        })
    }

    update(heart){
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).update({
            //name:this.name,
            heart:heart
            //distance:this.distance
        })
    }
}