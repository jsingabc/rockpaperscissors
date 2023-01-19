

  const choices = ['rock', 'scissors', 'paper'];
  const cpuChoice = Math.floor(Math.random() * choices.length);  

function getComputerChoice(){
    return choices[cpuChoice];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "player wins";
  } else if (playerSelection === "scissors" && computerSelection === "rock") { 
    return "cpu wins";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "cpu wins";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "player wins";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "cpu wins";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "player wins";
  } else {
    return "draw";
  }
}
  console.log(playRound(playerSelection, computerSelection));

  