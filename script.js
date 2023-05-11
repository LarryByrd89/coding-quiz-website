var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["javascript", "scripting", "script", "js"],
        answer: "script"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ["body", "head", "head & body"],
        answer: "head & body"
    },
    {
        title: "The external JavaScript file must contain the <script> tag.",
        choices: ["true","false"],
        answer: "false"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: ["if i = 5", "if i = 5 then", "if i ==5", "if(i==5)"],
        answer: "if(i==5)"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: ["<!--This-->", "//This", "'This'"],
        answer: "//This"
    },

];


var quizTime = 60;

// quiz progress and score
var currentQuestion = 0;
var correctAnswers = 0;
var timeLeft = quizTime;

// HTML elements
var startButtonEl = document.querySelector("#start-button");
var quizContainerEl = document.querySelector("#quiz-container");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector("#answer-buttons");
var timerEl = document.querySelector("#timer");
var resultEl = document.querySelector("#result");
var scoreEl = document.querySelector("#score");
var initialsEl = document.querySelector("#initials");
