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

function checkMatch(){
	if(inPlay[0]===inPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again...");
	}
}

function flipCard(cardId){
	inPlay.push(cards[cardId].rank);
	if (inPlay.length === 2){
		chechMatch();
	}
}

flipCard(0);
flipCard(1);


