let computerScore = 0;
let playerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

 // Computer Logic
function computerPlay(){
    const random = Math.floor(Math.random() * choices.length);
    return(choices[random]);
};

// DOM stuff

let displayPlayerScore = document.createElement("p");
let displayComputerScore = document.createElement("p");
let displayWinner = document.createElement("p");

displayPlayerScore.setAttribute("id", "displayPlayerScore");
displayComputerScore.setAttribute("id", "displayComputerScore");
displayWinner.setAttribute("id", "displayWinner");

document.body.appendChild(displayPlayerScore);
document.body.appendChild(displayComputerScore);
document.body.appendChild(displayWinner);

document.getElementById("displayPlayerScore").innerHTML = "Player score: " + playerScore;
document.getElementById("displayComputerScore").innerHTML = "Computer score: " + computerScore;

function round(playerInput){
    let computerInput = computerPlay();
		if(computerScore == 5 || playerScore == 5){
			console.log("No");
		}
		else if (playerInput === choices[0] && computerInput === choices[2] || playerInput === choices[1] && computerInput === choices[0] || playerInput === choices[2] && computerInput === choices[1]){
			playerScore = playerScore + 1;
			document.getElementById("displayPlayerScore").innerHTML = "Player score: " + playerScore;
		}
		else if(playerInput === computerInput){
			playerScore = playerScore + 1;
			computerScore = computerScore + 1;
			document.getElementById("displayPlayerScore").innerHTML = "Player score: " + playerScore;
			document.getElementById("displayComputerScore").innerHTML = "Computer score: " + computerScore;
		}
		else if(computerInput === choices[0] && playerInput === choices[2] || computerInput === choices[1] && playerInput === choices[0] || computerInput === choices[2] && playerInput === choices[1]){
			computerScore = computerScore + 1;
			document.getElementById("displayComputerScore").innerHTML = "Computer score: " + computerScore;
		}

			if (playerScore == 5){
				document.getElementById("displayWinner").innerHTML = "Player Wins!";
			}
			else if(computerScore == 5){
				document.getElementById("displayWinner").innerHTML = "Computer Wins!";
			}
}


// DOM manipulation
document.getElementById("rockInput").addEventListener("click", function(){
    round("Rock");
});

		
document.getElementById("paperInput").addEventListener("click", function(){
    round("Paper");
});
			
document.getElementById("scissorsInput").addEventListener("click", function(){
    round("Scissors");
});

document.getElementById("reset").addEventListener("click", function(){
	computerScore = 0;
	playerScore = 0;
	document.getElementById("displayPlayerScore").innerHTML = "Player score: " + playerScore;
	document.getElementById("displayComputerScore").innerHTML = "Computer score: " + computerScore;
	document.getElementById("displayWinner").innerHTML = "";
});
