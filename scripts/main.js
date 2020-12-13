// window.addEventListener('DOMContentLoaded', function() {
//   // Execute after page load
// })
// document.getElementById("deal-button").addEventListener("click", function(){
//   var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
//   var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//   var deck = new Array();

//   function getCardImageUrl(card) {  //Pass in a card
//     var cardName;   
//     if (card.point === 1) {
//       cardName = 'ace';
//     } else if (card.point === 11) {
//       cardName = 'jack';
//     } else if (card.point === 12) {
//       cardName = 'queen';
//     } else if (card.point === 13) {
//       cardName = 'king';
//     } else {
//       cardName = card.point;
//     }
//     return 'images/' + cardName + '_of_' + card.suit + '.png';
// }








// })






// function shuffle(deck){
// 	// for 1000 turns
// 	// switch the values of two random cards
// 	for (var i = 0; i < 1000; i++)
// 	{
// 		var location1 = Math.floor((Math.random() * deck.length));
// 		var location2 = Math.floor((Math.random() * deck.length));
// 		var tmp = deck[location1];

// 		deck[location1] = deck[location2];
// 		deck[location2] = tmp;
// 	}
// }

// function renderDeck(deck){
//   document.getElementById("deck").innerHTML = "";

//   for(let i = 0; i < deck.length; i++){
//     let card = document.createElement("div");
//     let value = document.createElement("div");
//     let suit = document.createElement("div");
//     card.className = "card";
//     value.className = "value";
//     suit.className = "suit" + deck[i].suit;

//     value.inerHTML = deck[i].Value;
//     card.appendChild(value);
//     card.appendChild(suit);

//     document.getElementById("deck").appendChild(card);
//   }
// }


// var deck1 = getDeck();
// var deck2 = getDeck();


// vardeck1 = getDeck();
// shuffle(deck1);
// renderDeck(deck1);