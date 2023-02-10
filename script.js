const cards =["/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_1.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_1.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_2.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_2.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_3.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_3.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_4.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_4.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_5.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_5.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_6.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_6.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_7.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_7.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_8.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_8.png",];
const container = document.getElementById("Spielfeld");
let x; 
let Card1;
let Card2;
let counter = 0;
let index;
let CardMotivs;
resetCards();
//Sorgt dafür das die zufallszahl nur genau einmal vorkommt und das nach reset nicht die Karten an der selben Position bleiben    
function resetCards(){   
    let newCards = [...cards]; 
    let y= 0;
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
}
// eventListener und Funktion sorgen dafür,dass die richtige Vorderseite der Karte angezeigt wird, wenn man auf das Cover Motiv drückt und ruft checkmatch auaf wenn die 2. Karte angeklickt wurde
container.addEventListener("click", flipCard);
function flipCard(event){
   counter++;
   index = event.target.id;
   let Card = document.getElementById(index);
   Card.src = CardMotivs[index - 1];
   if(counter == 1){
        Card1 = Card 
   } else {
        Card2 = Card
        counter = 0
        setTimeout (checkMatch, 3000)
   }
   console.log(Card1,Card2)

}
// überprüft die Werte und versteckt die karten wieder wenn sie nicht gleich sind
function checkMatch(){
    if (Card1.src===Card2.src) {
        console.log("Yaay")
        // hier higscore hochzählen lassen
    } else if (Card2 !== undefined){
        console.log("Noooo")
        Card1.src="/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_Cover.png"
        Card2.src="/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_Cover.png"
    }
}
