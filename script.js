let x; 
let y= 0;
function shuffleCards(){                                           //Sorgt dafür das die zufallszahl nur genau einmal vorkommt indem es das Array Cards in ein neues array kopiert, ausdem später mithilfe des splice befehls die schon verwendeten werte gelöscht werden ohne das ursprüngliche array zu löschen    
    const cards =["/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_1.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_1.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_2.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_2.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_3.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_3.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_4.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_4.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_5.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_5.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_6.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_6.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_7.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_7.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_8.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_8.png",];
    const newCards = [...cards];       
    for (i=0; i<16; i++ ){
        x = Math.floor((Math.random() * newCards.length));
        y++;
        let motive = document.getElementById("F" + y);
        motive.src = newCards[x];
        newCards.splice(x,1);
    }
}


// function checkMatch(){
    
// }