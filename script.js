const input = document.querySelector(".input");
const score = document.querySelector("#score");
const question = document.querySelector("#question");
const formEl = document.querySelector(".form");
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const correctAnswer = num1 * num2;
question.innerHTML = `What is ${num1} multiply by ${num2} ?`;
let scoreNum = JSON.parse(localStorage.getItem("score"));

if (!scoreNum) {
  scoreNum = 0;
}

score.innerHTML = `score: ${scoreNum}`;

formEl.addEventListener("submit", submitAnswer);

function submitAnswer() {
  const userAns = +input.value;
  if (userAns === correctAnswer) {
    scoreNum++;
    updateLocalStorage();
  } else {
    scoreNum--;
    updateLocalStorage();
  }
}

if (scoreNum === 3) {
  scoreNum = 0;
  question.innerHTML = `YOU WIN !!!`;
  localStorage.removeItem("score");
}

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(scoreNum));
}
