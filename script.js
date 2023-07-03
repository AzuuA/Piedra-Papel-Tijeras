 document.getElementById("rock").addEventListener('click',()=>{ game("rock")})
 document.getElementById("paper").addEventListener('click',()=>{game("paper")})
 document.getElementById("scissors").addEventListener('click',()=>{game("scissors")})



function getComputerChoice(){
    const answer=[ "Rock", "Paper", "Scissors"]
    let index= Math.floor(Math.random()*3)
    return answer[index]
    
}
function playRound(playerSelection, computerSelection) {
  
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Empate";
      } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
      ) {
        console.log("ganaste")
        return "¡Ganaste!";
      } else {
        console.log("perdiste")

        return "Perdiste. Inténtalo de nuevo.";
      }
}

function game(playerChoice) {
    let computerSelection=getComputerChoice()
    return    playRound(playerChoice,  getComputerChoice());
    
}
/*
let win=0
let lost=0
for (let i = 0; i < 5; i++) {
let result=game()
    if(result==="Perdiste"){
        console.log('Perdiste')
        lost++
    } else if(result==="Ganaste"){
        console.log('Ganaste')
        win++
    } else{
        console.log("Empate")
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