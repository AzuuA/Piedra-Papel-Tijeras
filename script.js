 document.getElementById("rock").addEventListener('click',()=>{ game("rock")})
 document.getElementById("paper").addEventListener('click',()=>{game("paper")})
 document.getElementById("scissors").addEventListener('click',()=>{game("scissors")})
 const buttons = document.querySelectorAll('.option');
 const restart=document.getElementById('restart')
const result=document.getElementById('result')
let playerScore=0
let computerScore=0
console.log(buttons)
restart.addEventListener('click', restartGame);
function getComputerChoice(){
    const answer=[ "Rock", "Paper", "Scissors"]
    let index= Math.floor(Math.random()*3)
    return answer[index]
    
  }
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection.toLowerCase()) {
      console.log("Hiciste Click pero empataste")

      result.innerText=`Player Score: ${playerScore}
      Computer Score ${computerScore}
      `
    } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
      ) {
        playerScore++
      console.log("Hiciste Click pero ganaste")

        //console.log(playerScore)
      result.innerText=`Player Score: ${playerScore}
      Computer Score ${computerScore}
      `
    } else {
      computerScore++  
      //console.log(computerScore)
      console.log("Hiciste Click pero perdiste")
      result.innerText=`Player Score: ${playerScore}
      Computer Score ${computerScore}
      `
    }
    //console.log(result.innerHTML)
    //console.log(playerScore)
    //console.log(computerScore)
    if (playerScore === 5 || computerScore === 5) {
      endGame();
    }
  }
  function game(playerChoice) {
    //  let computerChoice= getComputerChoice().toLowerCase()
  //console.log(computerChoice)
  playRound(playerChoice,  getComputerChoice());
  
}

function endGame() {
  if (playerScore === 5) {
    result.textContent = '¡Felicidades, ganaste el juego!';
  } else {
    result.textContent = 'Lo siento, la computadora ganó el juego.';
  }

  buttons.forEach(button => {
    button.disabled = true;
  });
  restart.style.display='inline-block'
}
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = 'Elige una opción:';
  buttons.forEach(button => {
    button.disabled = false;
  });
  restart.style.display = 'none';
}
/*
let win=0
let lost=0
for (let i = 0; i < 5; i++) {
    let playerChoice = getComputerChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    let resultText = playRound(playerChoice, computerChoice);
  
    if (resultText === "Perdiste. Inténtalo de nuevo.") {
      lost++;
    } else if (resultText === "¡Ganaste!") {
      win++;
    } else {
      console.log("Empate");
    }
  }

  
  
  
  
  
console.log(lost)
console.log(win)
if(lost<win){
    console.log(`ganaste ${win} de 5`)
} else if (lost>win) {
    console.log(`perdiste ${lost} de 5`)
}
*/