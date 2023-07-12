 document.getElementById("rock").addEventListener('click',()=>{ game("rock")})
 document.getElementById("paper").addEventListener('click',()=>{game("paper")})
 document.getElementById("scissors").addEventListener('click',()=>{game("scissors")})
 const title=document.getElementById('title')
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

      result.innerText=`Player Score: ${playerScore}
      Computer Score ${computerScore}
      `
    } else {
      computerScore++  
      console.log("Hiciste Click pero perdiste")
      result.innerText=`Player Score: ${playerScore}
      Computer Score: ${computerScore}
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
  
  playRound(playerChoice,  getComputerChoice());
  
}

function endGame() {
  if (playerScore === 5) {
    title.textContent = '¡Felicidades, ganaste el juego!';
  } else {
    title.textContent = 'Lo siento, la computadora ganó el juego.';
  }

  buttons.forEach(button => {
    button.disabled = true;
  });
  restart.style.display='inline-block'
}
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  buttons.forEach(button => {
    button.disabled = false;
  });
  restart.style.display = 'none';
  title.textContent='Elige una opción:'
}


  
  