const cards =["/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_1.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_1.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_2.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_2.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_3.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_3.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_4.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_4.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_5.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_5.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_6.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_6.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_7.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_7.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_8.png","/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_8.png",];
const container = document.getElementById("Spielfeld");
let Highscore = document.getElementById("Highscore");
let WinNot = document.getElementById("winNotfication");
let MatchCounter;
let BetrX = 2;
let x; 
let Card1;
let Card2;
let counter = 0;
let index;
let CardMotivs;
resetCards();
    
function resetCards(){   
    let newCards = [...cards]; 
    CardMotivs = [];
    Highscore.innerText = "0";
    MatchCounter = 0;
    let y= 0;
    WinNot.innerText = " ";
    for (i=0; i<16; i++ ){
        x = Math.floor((Math.random() * newCards.length));
        CardMotivs.push(newCards[x]);
        newCards.splice(x,1);
    }
    for (i=0; i<16; i++ ){
        y++;
        let motive = document.getElementById(y);
        motive.src = "/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_Cover.png";
    }        
}
container.addEventListener("click", flipCard);
function flipCard(event){
   counter++;
   index = event.target.id;
   let Card = document.getElementById(index);
   Card.src = CardMotivs[index - 1];
   if(counter == 1){
        Card1 = Card; 
   } else {
        Card2 = Card;
        counter = 0;
        setTimeout (checkMatch, 3000);
   }
}
function checkMatch(){
    if (Card1.src===Card2.src) {
        setHighscoreUp();
    } else if (Card2 !== undefined ){
        Card1.src="/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_Cover.png";
        Card2.src="/GitHub/Memorie-Pruefung-ADT-Jannis/SpaceCat_Cover.png";
        setHighscoreDown();
    }
}
function setHighscoreUp(){
    Highscore.innerText = parseInt(Highscore.innerText) + BetrX;
    MatchCounter++;
    checkWin();
}
function setHighscoreDown(){
    if (MatchCounter > 0){
    Highscore.innerText = parseInt(Highscore.innerText) - (BetrX*0.5);}
    if (Highscore.innerText < 0){
        Highscore.innerText = "0";}
}
function checkWin(){
    if(MatchCounter == 8){
        WinNot.innerText = "Herzlichen Glückwunsch, du hast das Spiel erfolgreich beendet. Dein Highscore ist: " + Highscore.innerText;
    }
}
