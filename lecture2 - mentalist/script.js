var secretNumber = getRandomNumber(1, 100);

function tryGuess() {
  let guess = document.getElementById("guessInput").value;
  let answerHTML = document.getElementById("answer");
  if (guess == secretNumber) {
    answerHTML.innerHTML = "Congrats! You got it!";
  } else if (guess < secretNumber) {
    answerHTML.innerHTML = "The number is greater";
  } else if (guess > secretNumber) {
    answerHTML.innerHTML = "The number is smaller";
  }

  console.log(secretNumber);
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
  answerHTML.innerHTML = "";
  return secretNumber;
}
