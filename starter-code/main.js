console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

 if(cardTwo === cardFour) {
	alert('You found a match!');
};
else { alert('Sorry, try again');
}; 

var board = document.getElementById('game-board');

function createCards = function() {
	for (var i = 0; i<4; i++) {
		
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
        cardElement.setAttribute('data-card', cards[i]);
        cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);

	}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src= "C:\Users\kerrysng\Desktop\General Assembly\kingCard.png">";
	} else {
		this.innerHTML = "<img src= "C:\Users\kerrysng\Desktop\General Assembly\queenCard.png">";
	}
	
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.")
	}
}