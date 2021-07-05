// JavaScript source code

// Create a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// ^ function singleRound(playerSelection, computerSelection){}

// Return the results of the function that plays the round, not console.log it directly

// Place the round function in a new function called game() that plays for 5 rounds, keeps score and reports a winner or loser at the end.
	// At this point you should be using console.log() to display the results of each round and the winner at the end.
	// Use prompt() to get input from the user.




		// Randomly chooses between Rock, Paper and Scissors for the Computer's Input
		function computerPlay(){
			const choices = ["Rock", "Paper", "Scissors"];
			const random = Math.floor(Math.random() * choices.length);
			return(choices[random]);
		};

		// Prompts the user for their input
		function getPlayerInput(){
			let playerInput = prompt("Rock, Paper or Scissors?", "");
			return (playerInput);
		}

		function game(){
			let computerScore = 0;
			let playerScore = 0;
			const rock = "Rock";
			const paper = "Paper";
			const scissors = "Scissors";
			const invalidInput = "Invalid input";

			function round(playerInput, computerInput){
					if (playerInput.toLowerCase() === rock.toLowerCase() && computerInput.toLowerCase() === scissors.toLowerCase() || playerInput.toLowerCase() === paper.toLowerCase() && computerInput.toLowerCase() === rock.toLowerCase() || playerInput.toLowerCase() === scissors.toLowerCase() && computerInput.toLowerCase() === paper.toLowerCase()){
						console.log(`Player Score: ${playerScore = playerScore + 1} Computer Score: ${computerScore}` );
						return (`You win the round: ${playerInput} beats ${computerInput}!`);
					}
					else if(playerInput.toLowerCase() === computerInput.toLowerCase()){
					    console.log(`Player Score: ${playerScore = playerScore + 1}, Computer Score: ${computerScore = computerScore + 1}`);
						return(`Tied round!`);
					}
					else if(computerInput.toLowerCase() === rock.toLowerCase() && player.toLowerCase() === scissors.toLowerCase() || computerInput.toLowerCase() === paper.toLowerCase() && playerInput.toLowerCase() === rock.toLowerCase() || computerInput.toLowerCase() === scissors.toLowerCase() && playerInput.toLowerCase() === paper.toLowerCase()){
						console.log(`Player Score: ${playerScore} Computer Score: ${computerScore = computerScore + 1}`);
						return(`Computer wins the round: ${computerInput} beats ${playerInput}!`);
					}
					else{
						return(invalidInput);
					}
			}

			for (let i = 0; i <= 4; i++){
				let x = getPlayerInput();
				let y = computerPlay();
				console.log(round(x,y));
			}
			
			if(computerScore > playerScore){
				return(`The Computer wins the game with a score of: ${computerScore}!`);
			}
			else if(computerScore < playerScore){
				return(`The Player wins the game with a score of: ${playerScore}!`)
			}
			else{
				return(`Tie game! Computer Score:${computerScore} | Player Score:${playerScore}`)
			}
			computerScore = 0;
			playerScore = 0;
		}