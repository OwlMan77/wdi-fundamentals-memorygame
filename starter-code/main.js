console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen" ;
var cardTwo = "queen" ;
var cardThree = "king" ;
var cardFour = "king";

if (cardOne === cardFour){ 
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
	}



var createCards = function(){
for (i = 0; i <= 4; i++){
	var GBoard = document.getElementById('game-board')
	var newCard = document.createElement('div')
	newCard.className = 'card';
	GBoard.appendChild(newCard);
	}
}

createCards();