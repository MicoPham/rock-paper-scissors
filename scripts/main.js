function playerPlay() {
  return prompt("Choose rock, paper or scissors" , "").toLowerCase();    
}

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

//rock = 0, paper = 1, scissors =2
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  if ((playerSelection === 'rock') && (computerSelection === 0)) {
    console.log('tie');
    return t++;
  } else if ((playerSelection === 'rock') && (computerSelection === 1)) {
    console.log('player lose');
    return l++;
  } else if ((playerSelection === 'rock') && (computerSelection === 2)) {
    console.log('player win');
    return w++;
  } else if ((playerSelection === 'paper') && (computerSelection === 0)) {
    console.log('player win');
    return w++;
  } else if ((playerSelection === 'paper') && (computerSelection === 1)) {
    console.log('tie');
    return t++;
  } else if ((playerSelection === 'paper') && (computerSelection === 2)) {
    console.log('player lose');
    return l++;
  } else if ((playerSelection === 'scissors') && (computerSelection === 0)) {
    console.log('player lose');
    return l++;
  } else if ((playerSelection === 'scissors') && (computerSelection === 1)) {
    console.log('player win');
    return w++;
  } else if ((playerSelection === 'scissors') && (computerSelection === 2)) {
    console.log('tie');
    return t++;
  }
}

let w = 0,
    l = 0,
    t = 0;

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

game();