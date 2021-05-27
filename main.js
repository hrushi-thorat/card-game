const cards = document.querySelectorAll(".card");
let firstCard;
let secondCard;
let hasFlippedCard=false;
let lockBoard=false;
function flipCard(){
    // for locking the board when we have two cards
    if(lockBoard)return;
    // to prevent the multiple function call on same card when we click
    // Actually we prevent the function call on last clicked card
    if(this===firstCard)return;
    // for fliping the card
    this.classList.add("flip")
    // to check whether the card is flipped or not
if(!hasFlippedCard){
firstCard=this;
hasFlippedCard=true;
    return;
}
secondCard=this;
lockBoard=true;
checkForMatch();
}
function checkForMatch(){
    let match=firstCard.dataset.tech===secondCard.dataset.tech
    match ? disableCards() : unFlippCard(); 
}
function disableCards(){

}
function unFlippCard(){

}




cards.forEach(card =>{
    card.addEventListener("click",flipCard)
})