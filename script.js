// create variable "getComputerChoice"

// "getComputerChoice" should generate a random choice between ("rock", "paper", "scissors")

// use the "Math.random" method to generate a randon number between 0 and 1 and tie that value to one of the 3 choices
let computerScore = 0
let yourScore = 0

for (let i = 0; i < 5; i++){


function getHumanChoice(){ 
    let humanChoice = prompt("Rock, Paper or Scissors")
    console.log(humanChoice.toLowerCase())
    return humanChoice.toLowerCase()

}


function getComputerChoice (){
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0 )
        console.log("rock")
    if (computerChoice === 1)
        console.log("paper")
    if (computerChoice === 2)
        console.log("scissors")
    return computerChoice
}


let result = playRound(getHumanChoice(), getComputerChoice());
if (result === "You win"){
    yourScore++
    console.log("Your score", yourScore)
   
}

 if (result === "You lose") {
    computerScore++
    console.log("Computer score", computerScore)
   
 }  


}

alert("FINAL SCORE - You:" + " " + yourScore + " " + "Computer:" + " " + computerScore);
console.log("FINAL SCORE - You:" + " " + yourScore + " " + "Computer:" + " " + computerScore);



function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === 0){
        console.log("tie")
                return "tie"
    }
        
    if (humanChoice === "paper" && computerChoice === 1){
        console.log("tie")
             return "tie"
    }
        
    if (humanChoice === "scissors" && computerChoice === 2){
        console.log("tie")
             return "tie"
    }
        
    if (humanChoice === "rock" && computerChoice === 1){
         console.log("You lose")
             return "You lose"
    }
       
    if (humanChoice === "rock" && computerChoice === 2){
        console.log("You win")
             return "You win"
    }
        
    if (humanChoice === "paper" && computerChoice === 0){
        console.log("You win")
             return "You win"
    }
        
    if (humanChoice === "paper" && computerChoice === 2){
         console.log("You lose")
             return "You lose"
    }
    
       

    if (humanChoice === "scissors" && computerChoice === 0){
         console.log("You lose")
         return "You lose"
    }
        
       
        
    if (humanChoice === "scissors" && computerChoice === 1){
         console.log("You win")
        return "you win"
    }
       


}




