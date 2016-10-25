console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen" ;
var cardTwo = "queen" ;
var cardThree = "king" ;
var cardFour = "king";

//if (cardOne === cardFour){ alert("You found a match!");} else {alert("Sorry, try again.");} -->

var createBoard = function(){
for (i = 0; i <= cards.length - 1; i++){
	var GBoard = document.getElementById('game-board');
	var newCard = document.createElement('div');
	newCard.className = 'card';
	newCard.id = 'card';
	GBoard.appendChild(newCard);
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards);
	}
}
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];
// made this to referenced later to clean the board 
var CardElements = document.getElementsByClassName('card');
var score = 0;
//counts the number of matches before the board is cleared
var roundcount = 0;


var isMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
	//delayed the alerts and clear function so that the card img would be come first.
	setTimeout(function(){alert("You found a match!");}, 200);
	//Updates score Variable and updates it in the html 
	score = score + 1;
	document.getElementById("Score").innerHTML = score;
	roundcount = roundcount + 1;
	}
	else {
	setTimeout(function()
		{alert("Sorry, try again.");
		clearCards();
		}, 200);
	}

}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'))
	if (this.getAttribute('data-card') === "king") {
	this.innerHTML = '<img src ="king.png" alt="KingHalf"/>';
		}
	else {this.innerHTML ='<img src ="queen.png" alt="QueenHalf"/>'}

	// makes sure that only 2 cards are being matched at the same time.
	if (cardsInPlay.length === 2) {
	isMatch(cardsInPlay);
	cardsInPlay =[];
	}
	//clears the board once all matches are found.
	if (roundcount != 0 && roundcount % 2 == 0){
	setTimeout(function(){clearCards();},200);
	roundcount = 0;
	}
}

// Clears card imgs from card divs
var clearCards = function(){
	for (i = 0; i < cards.length; i++){
	CardElements[i].innerHTML ='';
}
	}

//sets up the board for the game
createBoard();