let startButton = document.querySelector("#start-btn"),
  nextButton = document.querySelector("#next-btn"),
  questionContainer = document.querySelector("#question-container"),
  shuffledQuestions,
  currentQuestionIndex,
  questionElement = document.querySelector("#question"),
  answerButtonsElement = document.querySelector("#answer-buttons"),
  countRightAnswers = 0;
correctAnswers = document.querySelector("#right-answers");

let questions = [
  {
    question: "What is 2+2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "What is the capital of Afghanistan?",
    answers: [
      { text: "Tel-abid", correct: false },
      { text: "Abu-Dhabi", correct: false },
      { text: "Kabul", correct: true },
      { text: "Seul", correct: false },
    ],
  },
  {
    question:
      "Name of a word that is read exactly the same in reverse as normal",
    answers: [
      { text: "Palifone", correct: false },
      { text: "Palindrome", correct: true },
    ],
  },
  {
    question: "Which country is brie cheese originally from?",
    answers: [
      { text: "Spain", correct: false },
      { text: "Sweden", correct: false },
      { text: "France", correct: true },
    ],
  },
  {
    question: "Which planet is closest to the sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Miguel Angelo", correct: false },
      { text: "Donatello", correct: false },
      { text: "Leonardo Da Vinci", correct: true },
      { text: "Picasso", correct: false },
    ],
  },
];

const startGame = () => {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
  countRightAnswers = 0;
};

const setNextQuestion = () => {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

const resetState = () => {
  clearStatusClass(document.body);
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

const selectAnswer = (e) => {
  let selectedButton = e.target;
  let correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.classList.add("hide");
    startButton.textContent = "Restart";
    startButton.addEventListener("click", () => {
      window.location.reload(true);
    });
    startButton.classList.remove("hide");
  }
  if ((selectedButton.dataset = correct)) {
    countRightAnswers++;
  }
  correctAnswers.textContent = `${countRightAnswers} Correct Answers !`;
};

const setStatusClass = (element, correct) => {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
};

const clearStatusClass = (element) => {
  element.classList.remove("correct");
  element.classList.remove("wrong");
};

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
