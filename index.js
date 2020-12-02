// SELECT NO. OF PLAYERS



// ONE PLAYER

document.getElementById("onePlayer").onclick = function() {
  selectOnePlayer();
}

function selectOnePlayer() {
  document.getElementById("playerOneDiv").style.visibility = "visible";
  document.getElementById("playerTwoDiv").style.visibility = "hidden";
  document.getElementById("playerThreeDiv").style.visibility = "hidden";
  document.getElementById("playerFourDiv").style.visibility = "hidden";
  document.getElementById("playerOneDiv").className = "col-lg-12";
  document.getElementById("rollDice").onclick = function() {
    rollDiceOne();
  }
}

// TWO PLAYERS

document.getElementById("twoPlayers").onclick = function() {
  selectTwoPlayers();
}

function selectTwoPlayers() {
  document.getElementById("playerOneDiv").style.visibility = "visible";
  document.getElementById("playerTwoDiv").style.visibility = "visible";
  document.getElementById("playerThreeDiv").style.visibility = "hidden";
  document.getElementById("playerFourDiv").style.visibility = "hidden";
  document.getElementById("playerOneDiv").className = "col-lg-6";
  document.getElementById("playerTwoDiv").className = "col-lg-6";
  document.getElementById("rollDice").onclick = function() {
    rollDiceTwo();
  }
}

// THREE PLAYERS

document.getElementById("threePlayers").onclick = function() {
  selectThreePlayers();
}

function selectThreePlayers() {
  document.getElementById("playerOneDiv").style.visibility = "visible";
  document.getElementById("playerTwoDiv").style.visibility = "visible";
  document.getElementById("playerThreeDiv").style.visibility = "visible";
  document.getElementById("playerFourDiv").style.visibility = "hidden";
  document.getElementById("playerOneDiv").className = "col-lg-4";
  document.getElementById("playerTwoDiv").className = "col-lg-4";
  document.getElementById("playerThreeDiv").className = "col-lg-4";
  document.getElementById("rollDice").onclick = function() {
    rollDiceThree();
  }
}


// FOUR PLAYERS

document.getElementById("fourPlayers").onclick = function() {
  selectFourPlayers();
}

function selectFourPlayers() {
  document.getElementById("playerOneDiv").style.visibility = "visible";
  document.getElementById("playerTwoDiv").style.visibility = "visible";
  document.getElementById("playerThreeDiv").style.visibility = "visible";
  document.getElementById("playerFourDiv").style.visibility = "visible";
  document.getElementById("playerOneDiv").className = "col-lg-3";
  document.getElementById("playerTwoDiv").className = "col-lg-3";
  document.getElementById("playerThreeDiv").className = "col-lg-3";
  document.getElementById("playerFourDiv").className = "col-lg-3";
  document.getElementById("rollDice").onclick = function() {
    rollDiceFour();
  }
}

// ROLL THE DICE!

document.getElementById("rollDice").onclick = function() {
  rollDiceFour();
}

var randomDice = ["fas fa-dice-one dices", "fas fa-dice-two dices", "fas fa-dice-three dices", "fas fa-dice-four dices", "fas fa-dice-five dices", "fas fa-dice-six dices"];

function rollDiceOne() {
  var selectedDiceOne = Math.floor(Math.random() * randomDice.length);
  document.getElementById("playerOne").className = randomDice[selectedDiceOne];
}

function rollDiceTwo() {
  var selectedDiceOne = Math.floor(Math.random() * randomDice.length);
  var selectedDiceTwo = Math.floor(Math.random() * randomDice.length);
  document.getElementById("playerOne").className = randomDice[selectedDiceOne];
  document.getElementById("playerTwo").className = randomDice[selectedDiceTwo];
  if (selectedDiceOne > selectedDiceTwo) {
    document.getElementById("playerOne").style.color = 'green';
  } else {
    document.getElementById("playerOne").style.color = '#f7f7f7'
  }
  if (selectedDiceTwo > selectedDiceOne) {
    document.getElementById("playerTwo").style.color = 'green';
  } else {
    document.getElementById("playerTwo").style.color = '#f7f7f7'
  }
}

function rollDiceThree() {
  var selectedDiceOne = Math.floor(Math.random() * randomDice.length);
  var selectedDiceTwo = Math.floor(Math.random() * randomDice.length);
  var selectedDiceThree = Math.floor(Math.random() * randomDice.length);
  document.getElementById("playerOne").className = randomDice[selectedDiceOne];
  document.getElementById("playerTwo").className = randomDice[selectedDiceTwo];
  document.getElementById("playerThree").className = randomDice[selectedDiceThree];
  if (selectedDiceOne > selectedDiceTwo && selectedDiceOne > selectedDiceThree) {
    document.getElementById("playerOne").style.color = 'green';
  } else {
    document.getElementById("playerOne").style.color = '#f7f7f7'
  }
  if (selectedDiceTwo > selectedDiceOne && selectedDiceTwo > selectedDiceThree) {
    document.getElementById("playerTwo").style.color = 'green';
  } else {
    document.getElementById("playerTwo").style.color = '#f7f7f7'
  }
  if (selectedDiceThree > selectedDiceOne && selectedDiceThree > selectedDiceTwo) {
    document.getElementById("playerThree").style.color = 'green';
  } else {
    document.getElementById("playerThree").style.color = '#f7f7f7'
  }
}

function rollDiceFour() {
  var selectedDiceOne = Math.floor(Math.random() * randomDice.length);
  var selectedDiceTwo = Math.floor(Math.random() * randomDice.length);
  var selectedDiceThree = Math.floor(Math.random() * randomDice.length);
  var selectedDiceFour = Math.floor(Math.random() * randomDice.length);
  document.getElementById("playerOne").className = randomDice[selectedDiceOne];
  document.getElementById("playerTwo").className = randomDice[selectedDiceTwo];
  document.getElementById("playerThree").className = randomDice[selectedDiceThree];
  document.getElementById("playerFour").className = randomDice[selectedDiceFour];
  if (selectedDiceOne > selectedDiceTwo && selectedDiceOne > selectedDiceThree && selectedDiceOne > selectedDiceFour) {
    document.getElementById("playerOne").style.color = 'green';
  } else {
    document.getElementById("playerOne").style.color = '#f7f7f7'
  }
  if (selectedDiceTwo > selectedDiceOne && selectedDiceTwo > selectedDiceThree && selectedDiceTwo > selectedDiceFour) {
    document.getElementById("playerTwo").style.color = 'green';
  } else {
    document.getElementById("playerTwo").style.color = '#f7f7f7'
  }
  if (selectedDiceThree > selectedDiceOne && selectedDiceThree > selectedDiceTwo && selectedDiceThree > selectedDiceFour) {
    document.getElementById("playerThree").style.color = 'green';
  } else {
    document.getElementById("playerThree").style.color = '#f7f7f7'
  }
  if (selectedDiceFour > selectedDiceOne && selectedDiceFour > selectedDiceTwo && selectedDiceFour > selectedDiceThree) {
    document.getElementById("playerFour").style.color = 'green';
  } else {
    document.getElementById("playerFour").style.color = '#f7f7f7'
  }
}
