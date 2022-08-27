/*let age = 100

if (age < 100) {
	console.log("Not Elegible");
}
else if(age === 100) {
	console.log("Here is your birthday card from the King!")
}
else {
	console.log("Not elegible, you have already gotten one " + (age - 100) + " years ago.");
}
*/

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
	sumEl.textContent = "Sum: " + sum; 
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	}
	else if (sum === 21) {
		message = "You've got Blackjack!"
		hasBlackJack = true
	}
	else {
		message = "You're out of the game."
		isAlive = false
	}	

	messageEL.textContent = message;
}



//CASH OUT!
//console.log(hasBlackJack)
//console.log(isAlive)


