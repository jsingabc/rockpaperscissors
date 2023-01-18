

  const choices = ['rock', 'scissors', 'paper'];
  const cpuChoice = Math.floor(Math.random() * choices.length);  

function getComputerChoice(){
    return choices[cpuChoice];
}

console.log(getComputerChoice());