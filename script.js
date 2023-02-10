const cards =["/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_1.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_1.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_2.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_2.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_3.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_3.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_4.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_4.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_5.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_5.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_6.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_6.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_7.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_7.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_8.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_8.png",];
const container = document.getElementById("Spielfeld");
let x; 
let y=0;
let index;
let CardMotivs;
shuffleCards();
function shuffleCards(){                                  //Sorgt dafür das die zufallszahl nur genau einmal vorkommt indem es das Array Cards in ein neues array kopiert, ausdem später mithilfe des splice befehls die schon verwendeten werte gelöscht werden ohne das ursprüngliche array zu löschen    
    let newCards = [...cards]; 
    CardMotivs = [];
    for (i=0; i<16; i++ ){
        x = Math.floor((Math.random() * newCards.length));
        CardMotivs.push(newCards[x]);
        newCards.splice(x,1);
    }
    for (i=0; i<16; i++ ){
            y++;
            let motive = document.getElementById(y);
            motive.src = "/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_Cover.png"
        }
            y=0
        
}

container.addEventListener("click", flipCard);

function flipCard(event){
   index = event.target.id;
   let Card = document.getElementById(index);
   Card.src = CardMotivs[index - 1];
}

