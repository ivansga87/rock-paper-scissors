let computerScore = 0
let yourScore = 0
let humanChoice = "";
let computerChoice = "";
let result = "";
let computerChoiceText = "";



let rockButton = document.getElementById("Rock")
rockButton.addEventListener("click", displayResult)

let paperButton = document.getElementById("Paper")
paperButton.addEventListener("click", displayResult)

let scissorsButton = document.getElementById("Scissors")
scissorsButton.addEventListener("click", displayResult)


function displayResult(event) {
    humanChoice = event.currentTarget.textContent;
    console.log("Your choice:" + " " + event.currentTarget.textContent)
    computerChoice = getComputerChoice()
    result = playRound(humanChoice, computerChoice);
    if (result === "You win") {
        yourScore++
        console.log("Your score", yourScore)

    }

    if (result === "You lose") {
        computerScore++
        console.log("Computer score", computerScore)

    }
    document.getElementById("statusDisplay").textContent = "Your pick: " + humanChoice + " " + " | Computer pick: " + computerChoiceText + " | Result: " + result;
    document.getElementById("scoreDisplay").textContent = "Your Score: " + yourScore + " | Computer Score: " + computerScore;

 

    if (yourScore === 5) {
        yourScore = 0;
        computerScore = 0;
        alert("You won")

    }
    if (computerScore === 5) {
        yourScore = 0;
        computerScore = 0;
        alert("You lost")

    }

}




function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0){
        computerChoiceText = "Rock"
    console.log("Computer choice: Rock")
    return computerChoice
    }
    if (computerChoice === 1){
        computerChoiceText = "Paper"
    console.log("Computer choice: Paper")
      return computerChoice
    }
    if (computerChoice === 2){
        computerChoiceText = "Scissors"
    console.log("Computer choice: Scissors")
      return computerChoice
        }
}




function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === 0) {
        console.log("Tie")
        return "Tie"
    }

    if (humanChoice === "Paper" && computerChoice === 1) {
        console.log("Tie")
        return "Tie"
    }

    if (humanChoice === "Scissors" && computerChoice === 2) {
        console.log("Tie")
        return "Tie"
    }

    if (humanChoice === "Rock" && computerChoice === 1) {
        console.log("You lose")
        return "You lose"
    }

    if (humanChoice === "Rock" && computerChoice === 2) {
        console.log("You win")
        return "You win"
    }

    if (humanChoice === "Paper" && computerChoice === 0) {
        console.log("You win")
        return "You win"
    }

    if (humanChoice === "Paper" && computerChoice === 2) {
        console.log("You lose")
        return "You lose"
    }



    if (humanChoice === "Scissors" && computerChoice === 0) {
        console.log("You lose")
        return "You lose"
    }



    if (humanChoice === "Scissors" && computerChoice === 1) {
        console.log("You win")
        return "You win"
    }
       


}




