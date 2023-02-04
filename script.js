const cards =["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12","B13","B14","B15","B16",]    //Array zur späteren zuordnung der Spielkartenmotive
    
function shuffleCards(){                                           //Sorgt dafür das die zufallszahl nur genau einmal vorkommt indem es das Array Cards in ein neues array kopiert, ausdem später mithilfe des splice befehls die schon verwendeten werte gelöscht werden ohne das ursprüngliche array zu löschen
    let newCards = [...cards];
    for (i=0; i<16; i++ ){
        let x = Math.floor((Math.random() * newCards.length));
        console.log(newCards[x]);
        newCards.splice(x,1);
    }
}


function checkMatch(){
    
};