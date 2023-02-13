const choices = ["rock","scissors","paper"]; // my array

const cpu = () => {    //this is generated via cpu() ONLY
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

var playerWins = 0;
var cpuWins = 0;

function playRound(playerSelection, computerSelection) {  //function that decides a winner

  
   
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWins++
    return "player wins";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    cpuWins++;
    return "cpu wins";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    cpuWins++;
    return "cpu wins";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWins++;
    return "player wins";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    cpuWins++;
    return "cpu wins";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWins++;
    return "player wins";
  } else {
    return "draw";
  }
 
}
 

var rkBtn = document.createElement('button');  //rock display button
rkBtn.textContent = 'rock';
document.body.appendChild(rkBtn);


var ssBtn = document.createElement('button'); //scissors display button
ssBtn.textContent = 'scissors';
document.body.appendChild(ssBtn);


var paperBtn = document.createElement('button'); //paper display button
paperBtn.textContent = 'paper';
document.body.appendChild(paperBtn);


const resultDiv = document.createElement('div'); //create div
const userScore = document.createElement('p'); // creates <p> user score
const cpuScore = document.createElement('p');  // creates <p> cpu score


userScore.textContent = playerWins; // add the user score as a display
resultDiv.appendChild(userScore); // adds user score to result dive
cpuScore.textContent = cpuWins;  // add the cpu score as a display
resultDiv.appendChild(cpuScore); // adds cpu score to result dive

document.body.appendChild(resultDiv); //appends content to html


function playGame() {
  

if (playerWins <= 5 || cpuWins <= 5) {

  

  rkBtn.addEventListener("click", function(){ 
    var rkBtn = "rock";
    var playerSelection = rkBtn;
    let computerSelection = cpu();
    alert(playerSelection);
    alert(computerSelection);
    alert(playRound(playerSelection, computerSelection));
    
  });


  ssBtn.addEventListener("click", function(){ 
    var ssBtn = "scissors";
    var playerSelection = ssBtn;
    let computerSelection = cpu();
    alert(playerSelection);
    alert(computerSelection);
    alert(playRound(playerSelection, computerSelection));
    
  });


  paperBtn.addEventListener("click", function(){ 
    var paperBtn = "paper";
    var playerSelection = paperBtn;
    let computerSelection = cpu();
    alert(playerSelection);
    alert(computerSelection);
    alert(playRound(playerSelection, computerSelection));
    
  });

} else {

const finalScore = document.createElement('p');  // write a function that reports final results
finalDiv.textContent = ' The final score is ' + playerWins + ' : ' + cpuWins + ' .';
document.body.appendChild(finalDiv); 

 } 
}

const startGame = document.createElement('button');
startGame.textContent = 'start game';
document.body.appendChild(startGame);

startGame.addEventListener("click", function(){
  alert("Choose rock scissors or paper to start the game.");
  playGame();
});
