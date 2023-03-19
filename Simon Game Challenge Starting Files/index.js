var gameElements = ["blue", "green", "yellow", "red"];

var allPrompts = [];
var allInputs = [];

gameOn = false;
var level = 0;

$(document).keydown(function () {
  if (!gameOn) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameOn = true;
  }
});

$(".btn").click(function () {
  var newInput = $(this).attr("id");
  playSound(newInput);
  animatePress(newInput);
  allInputs.push(newInput);
  checkAnswer(allInputs.length - 1);
  console.log(newInput);
});

function checkAnswer(currentLevel) {
  console.log(currentLevel);
  if (allPrompts[currentLevel] === allInputs[currentLevel]) {
    if (allInputs.length === allPrompts.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    newGame();
  }
}

function nextSequence() {
  allInputs = [];
  level++;
  $("#level-title").text("Level " + level);

  var randNum = Math.floor(Math.random() * gameElements.length);
  var newColour = gameElements[randNum];
  allPrompts.push(newColour);

  $("#" + newColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(newColour);
}

function animatePress(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function newGame() {
  level = 0;
  allPrompts = [];
  gameOn = false;
}
