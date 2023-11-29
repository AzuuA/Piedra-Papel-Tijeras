 /* Variables */
 document.getElementById("rock").addEventListener('click',()=>{ game("rock")})
 document.getElementById("paper").addEventListener('click',()=>{game("paper")})
 document.getElementById("scissors").addEventListener('click',()=>{game("scissors")})
 const title=document.getElementById('title')
 const buttons = document.querySelectorAll('.option');
 const restart=document.getElementById('restart')
const result=document.getElementById('result')
const computerImage= document.getElementById('computerImage')
const conteiner=document.querySelector('.conteiner')
const h3=document.querySelector('h3')
const flex=document.querySelector('.flex')
let playerScore=0
let computerScore=0
let time=0
/* Event Listener */
restart.addEventListener('click', restartGame);
/*Funcion para obtener la eleccion de la computadora */
function getComputerChoice(){
  const answer=[ "Rock", "Paper", "Scissors"]
  let index= Math.floor(Math.random()*3)
    console.log(computerImage.style.display)
    if (answer[index]==="Rock") {
      setTimeout(() => {
        computerImage.style.opacity = '1';
        computerImage.src='./Piiedra1.png'
      }, time);
    } else if(answer[index]=="Paper"){
      setTimeout(() => {
        computerImage.style.opacity = '1';
        computerImage.src='./papel1.png'
      }, time);
    }
    else{
      setTimeout(() => {
        computerImage.style.opacity = '1';
        computerImage.src='./tijeras1.png'
      }, time);

    }
    
    return answer[index]
    
  }
  /* Funcion para saber el resultado */
  function playRound(playerSelection, computerSelection) {
    flex.style.display='flex';
    setTimeout(() => {
    if (playerSelection === computerSelection.toLowerCase()) {
      console.log("Hiciste Click pero empataste")

      result.innerText=`Player Score: ${playerScore}
      Computer Score: ${computerScore}
      `
    } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
      ) {
        playerScore++
      console.log("Hiciste Click pero ganaste")

      result.innerText=`Player Score: ${playerScore}
      Computer Score: ${computerScore}
      `
    } else {
      computerScore++  
      console.log("Hiciste Click pero perdiste")
      result.innerText=`Player Score: ${playerScore}
      Computer Score: ${computerScore}
      `
    }
    if (playerScore === 5 || computerScore === 5) {
      setTimeout(() => {
        
        endGame();
      }, 1200);
    }
  }, 1000);
    

  }
  /* Funcion para jugar una ronda */

  function game(playerChoice) {
    if (computerImage.style.display==="inline-block") {
     time=1000
    } else{
      time=400
    }
   computerImage.style.display='inline-block'
   
   setTimeout(() => {

     computerImage.style.opacity = '0';
  }, 5);
  playRound(playerChoice,  getComputerChoice());
  
}
/* Funcion para finalizar el juego */
function endGame() {
  if (playerScore === 5) {
    title.textContent = 'Awesome, you won!';
  } else {
    title.textContent = 'Sorry, you lost.';
  }
  flex.style.display='none';
  computerImage.src="#";
  computerImage.style.display='none';

  buttons.forEach(button => {
    button.style.display='none';
  });
  restart.style.display='inline-block'
  

}
/* Funcion para empezar el juego de nuevo */
function restartGame() {
  playerScore=0;
  computerScore=0
  computerImage.style.display='none'

  buttons.forEach(button => {
    button.style.display='inline-block';
  });
  result.innerText=`Player Score: ${playerScore}
      Computer Score: ${computerScore}
      `;
  restart.style.display = 'none';
  title.textContent='Select an option:'
  h3.style.display="inline-block";
  conteiner.style.display='flex'
  flex.style.display='flex';

}


  
  