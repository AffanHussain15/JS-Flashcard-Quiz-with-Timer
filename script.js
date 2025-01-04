const questions = [
  { question: "What is the capital of Pakistan?", answer: "Islamabad" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is 2 x 2?", answer: "4" },
];

let currentIndex = 0;
let timer;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const timerElement = document.getElementById("timer");
const startQuizButton = document.getElementById("startQuiz");
const showAnswerButton = document.getElementById("showAnswer");
const nextQuestionButton = document.getElementById("nextQuestion");

function startQuiz() {
  currentIndex = 0;
  loadQuestion();
  startQuizButton.disabled = true;
  showAnswerButton.disabled = false;
  nextQuestionButton.disabled = false;
}

function loadQuestion() {
  if (currentIndex < questions.length) {
    questionElement.textContent = questions[currentIndex].question;
    answerElement.style.display = "none";
    answerElement.textContent = questions[currentIndex].answer;
    startTimer();
  } else {
    endQuiz();
  }
}

function showAnswer() {
  answerElement.style.display = "block";
}

function nextQuestion() {
  currentIndex++;
  clearTimeout(timer);
  loadQuestion();
}

function startTimer() {
  let timeLeft = 10;
  timerElement.textContent = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function endQuiz() {
  questionElement.textContent = "Quiz Finished!";
  answerElement.style.display = "none";
  timerElement.textContent = "";
  startQuizButton.disabled = false;
  showAnswerButton.disabled = true;
  nextQuestionButton.disabled = true;
}

startQuizButton.addEventListener("click", startQuiz);
showAnswerButton.addEventListener("click", showAnswer);
nextQuestionButton.addEventListener("click", nextQuestion);