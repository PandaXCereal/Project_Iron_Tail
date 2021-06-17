document.getElementById('btnSave').addEventListener('click', saveCard);
let cards = new Array();
function saveCard(){
    let frontContent=document.querySelector('#front').value;
    let backContent = document.getElementById('back').value;

    let card  = {front: frontContent, back:backContent};
    cards.push(card);
    console.log(cards);
    clearUI();
    numCardsOut();
    storeCards();
}

numCardsOut = () => {

document.getElementById('numCards').innerHTML = cards.length;

}
clearUI = () => {
    document.querySelector('#front').value ="";
    document.getElementById('back'). value = "";
   
}

storeCards = () =>{
    let serializedCards = JSON.stringify(cards);
    localforage.setItem('flashcards', serializedCards).then(function()
    {
        return localforage.getItem('key');

    }).then(function (value) {

alert("Saved!");
}).catch(function (err){
console.log ("error:" + err);

});
}