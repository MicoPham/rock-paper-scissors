function playerPlay() {
  return prompt("Choose rock, paper or scissors" , "").toLowerCase();    
}

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

//rock = 0, paper = 1, scissors =2
let playerSelection;
let computerSelection;

let w = 0,
    l = 0,
    t = 0;

function resetScores () {
  w = 0;
  l = 0;
  t = 0;
}

function checkWinner() {
    if (w >= 5) {
    divDisplay.textContent = `player wins game with ${w} win(s), ${l} lose(s), ${t} tie(s).`;
    container.appendChild(divDisplay);
    resetScores()
    return;
  }
  
  if (l >= 5) {
    divDisplay.textContent = `player loses game with ${w} win(s), ${l} lose(s), ${t} tie(s).`;
    container.appendChild(divDisplay);
    resetScores()
    return;
  }
}

function playRound(playerSelection, computerSelection) {
 // playerSelection = playerPlay();
  computerSelection = computerPlay();

  if ((playerSelection === 'rock') && (computerSelection === 0)) {
    divResults.textContent = 'tie';
    t++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  } else if ((playerSelection === 'rock') && (computerSelection === 1)) {
    divResults.textContent = 'player lose';
    container.appendChild(divResults);
    l++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  } else if ((playerSelection === 'rock') && (computerSelection === 2)) {
    divResults.textContent = 'player win';
    container.appendChild(divResults);
    w++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  } else if ((playerSelection === 'paper') && (computerSelection === 0)) {
    divResults.textContent = 'player win';
    container.appendChild(divResults);
    w++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  } else if ((playerSelection === 'paper') && (computerSelection === 1)) {
    divResults.textContent = 'tie';
    container.appendChild(divResults);
    t++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  } else if ((playerSelection === 'paper') && (computerSelection === 2)) {
    divResults.textContent = 'player lose';
    container.appendChild(divResults);
    l++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  } else if ((playerSelection === 'scissors') && (computerSelection === 0)) {
    divResults.textContent = 'player lose';
    container.appendChild(divResults);
    l++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  } else if ((playerSelection === 'scissors') && (computerSelection === 1)) {
    divResults.textContent = 'player win';
    container.appendChild(divResults);
    w++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  } else if ((playerSelection === 'scissors') && (computerSelection === 2)) {
    divResults.textContent = 'tie';
    container.appendChild(divResults);
    t++;
    divDisplay.textContent = `Player: ${w} Computer: ${l} Tie: ${t}`;
    checkWinner()
    return;
  }
}

/*
function game() {  
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  if (w > l) {
      console.log(`player wins game with ${w} win(s), ${l} lose(s), ${t} tie(s).`);
  } else if (w < l) {
      console.log(`player loses game with ${w} win(s), ${l} lose(s), ${t} tie(s).`);
  } else {
      console.log(`game tie with ${w} win(s), ${l} lose(s), ${t} tie(s).`);
  }
}
*/

const container = document.querySelector('#container');

const btnRock = document.createElement('button');
btnRock.classList.add('rock');
btnRock.textContent = 'Rock';
btnRock.addEventListener('click', () => playRound('rock'));
container.appendChild(btnRock);

const btnPaper = document.createElement('button');
btnPaper.classList.add('paper');
btnPaper.textContent = 'Paper';
btnPaper.addEventListener('click', () => playRound('paper'));
container.appendChild(btnPaper);

const btnScissor = document.createElement('button');
btnScissor.classList.add('scissor');
btnScissor.textContent = 'Scissor';
btnScissor.addEventListener('click', () => playRound('scissors'));
container.appendChild(btnScissor);

const divResults = document.createElement('div');

const divDisplay = document.createElement('div');
divDisplay.classList.add('display');
container.appendChild(divDisplay);
