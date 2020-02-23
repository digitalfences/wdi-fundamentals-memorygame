console.log("Up and running!");
let cards = ["queen","queen","king","king"];
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
	inPlay.push(cards[cardId]);
	if (inPlay.length === 2){
		chechMatch();
	}
}

flipCard(0);
flipCard(1);


