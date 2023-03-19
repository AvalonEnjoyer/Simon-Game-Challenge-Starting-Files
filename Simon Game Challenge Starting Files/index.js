const gameElements = ["blue", "green", "yellow", "red"];
var level = 0;
var allPrompts = [];
var allInputs = [];
gameOn = false;

$(body).keydown(function () {
  if (!gameOn) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameOn = true;
  }
});

$("button").click(function () {
  var newInput = $this.attr("id");
  playSound(newInput);
  animatePress(newInput);
  allInputs.push(newInput);
  checkAnswer(allInputs.length - 1);
});

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}

function checkAnswer(number) {}
while (gameOn === true) {
  $("#level-title").text("Level " + level);

  // create a way to generate and store random numbers that can be matched up with buttons.
  var newButtonNum = Math.floor(Math.random() * gameElements.length);
  allPrompts.push(gameElements[newButtonNum]);

  // play sound for the most recent element
  gameAudio = new Audio("sounds/" + gameElements[newButtonNum] + ".mp3");
  gameAudio.play();

  while (numberOfClicks < allPrompts.length) {
    // store user input and apply pressed style

    // compare user input against the generated prompts so far

    for (i = 0; i <= allPrompts.lenth; i++) {
      if (allPrompts[i] != allInputs[i]) {
        gameAudio = new Audio("sounds/wrong.mp3");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        gameOn = false;
        numberOfClicks = allPrompts.length;
        i = allPrompts.length;
      } else {
        level = level + 1;
      }
    }
  }
}

function newGame() {
  gameOn = false;
  level = 0;
  allPrompts = [];
}
