let winMsg = 'Victory';
let loseMsg = 'Defeat';
let tieMsg = 'tie';
let moveList = ['Rock','Paper','Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');
let div = document.querySelector('.game-button-wrapper');


/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */

/*
the below function decides who will be wining the game according to the user input that is click from the button and from the random computer move

*/
function calcResult(move1, move2) {

    if (move1 == move2) {
        statusDisplay.textContent = tieMsg;
        moveDisplays[0].textContent = 'You played ' + moveList[move1];
        moveDisplays[1].textContent = 'Computer played ' + moveList[move2];
        
      } 
      else if (
        (move1 == 3 && move2 === 2) ||
        (move1 == 2 && move2 === 1) ||
        (move1 == 1 && move2 == 3)
      )
       {
        statusDisplay.textContent = winMsg;
        moveDisplays[0].textContent = 'You played ' + moveList[move1];
        moveDisplays[1].textContent = 'Computer played ' + moveList[move2];
      }
      
  else{
    statusDisplay.textContent = loseMsg;
    moveDisplays[0].textContent = 'You played ' + moveList[move1];
    moveDisplays[1].textContent = 'Computer played ' + moveList[move2];
}
// this block of code is used to set the buttons to not to display 
for (var i = 0; i < buttons.length; i++) {
  buttons[i].style.display = "none";
 }
// this block of code creates a new button if the game id defeated
 if (statusDisplay.textContent === 'Defeat') {
  let btn = document.createElement('button');
  btn.innerText = 'Play Again';
  btn.style.marginLeft = '20px';
  document.body.appendChild(btn);
  btn.addEventListener('click', startGame);
}



}

/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/**
 * Displays start state of game
 */

function startGame() {
  statusDisplay.textContent = 'Choose!';
  for (let i = 0;i<buttons.length;i++){
    buttons[i].textContent = moveList[i];
    buttons[i].style.display = 'inline-block';
    buttons[i].addEventListener("click",endGame);
  
  }
  

}

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */

function endGame(event) {
  let player =moveList.indexOf(event.target.textContent);
  let computer = randomMove();
  calcResult(player,computer);
}

startGame();