const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerChoiceDisplay.innerHTML = playerChoice
  generateComputerChoice()
  generateResult()
})) 

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1

  if (randomNumber === 1) {
    computerChoice = 'paper'
  }
  if (randomNumber === 2) {
    computerChoice = 'rock'
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors'
  }

  computerChoiceDisplay.innerHTML = computerChoice
}

function generateResult() { 
  if (computerChoice === playerChoice) {
    result = "Tie!"
  }

  if (computerChoice === "rock" && playerChoice === "paper") { 
    result = "You Win!"
  }

  if (computerChoice === "rock" && playerChoice === "scissors") { 
    result = "You Lose!"
  }

  if (computerChoice === "paper" && playerChoice === "rock") { 
    result = "You Lose!"
  }

  if (computerChoice === "paper" && playerChoice === "scissors") { 
    result = "You Win!"
  }

  if (computerChoice === "scissors" && playerChoice === "rock") { 
    result = "You Win!"
  }

  if (computerChoice === "scissors" && playerChoice === "paper") { 
    result = "You Lose!"
  }

  resultDisplay.innerHTML = result
}