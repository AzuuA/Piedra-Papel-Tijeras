function getComputerChoice(){
    const answer=[ "Rock", "Paper", "Scissors"]
    let index= Math.floor(Math.random()*3)
    return answer[index]
    
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection==="rock"&&computerSelection=="Rock"){
        return "Empate"
    } else if(playerSelection==="rock"&&computerSelection=="Paper"){
        return "Perdiste"
    } else if(playerSelection==="rock"&&computerSelection==="Scissors"){
        return "Ganaste"
    }
    else if(playerSelection==="paper"&&computerSelection=="Paper"){
        return "Empate"
    } else if(playerSelection==="paper"&&computerSelection==="Scissors"){
        return "Perdiste"
    }else if(playerSelection==="paper"&&computerSelection=="Rock"){
        return "Ganaste"
    } else if(playerSelection==="scissors"&&computerSelection==="Rock"){
        return "Perdiste"
    }else if(playerSelection==="scissors"&&computerSelection=="Paper"){
        return "Ganaste"
    } else if(playerSelection==="scissors"&&computerSelection==="Scissors"){
        return "Empate"
    }else {
        return "valor invalido"
    }
}

function game() {
    let computerSelection=getComputerChoice()
    let playerSelection= prompt("Your choice")
    return    playRound(playerSelection.toLowerCase(), computerSelection);
    
}
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
