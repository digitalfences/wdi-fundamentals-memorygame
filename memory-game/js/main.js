console.log("Up and running!");
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamons.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
let inPlay = [];

function createBoard(){
	for(let i = 0; i < cards.length;i++){
		let newCard = document.createElement('img');
		newCard.setAttribute('src','images/back.png');
		newCard.setAttribute('data-id',i);
		newCard.addEventListener('click',flipCard());
		document.getElementById('game-board').appendChild(newCard);
	}
}
function checkMatch(){
	if(inPlay[0]===inPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again...");
	}
}

function flipCard(){
	let cardId = this.getAttribute('data-id');
	inPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	if (inPlay.length === 2){
		chechMatch();
	}
}

createBoard();


