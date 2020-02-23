console.log("Up and running!");
cards = ["queen","queen","queen","king"];
inPlay = [];
cardOne = cards[0];
inPlay.push(cardOne);
cardTwo = cards[2];
inPlay.push(cardTwo);
if (inPlay.length === 2){
	if(inPlay[0]===inPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again...");
	}
}