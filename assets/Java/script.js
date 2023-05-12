

var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questions = document.querySelector("#questions");
var introbody = document.querySelector("#intro-body");
var userChoices;
var secondsLeft = 75;
var holdInterval = 0;
var ulCreate = document.createElement("ul");


timer.addEventListener("click", function () {
    
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "You Finished!";
            }
        }, 1000);
    }
    userChoices(questionIndex);
});

function userChoices(questionIndex) {
    var questions = document.querySelector("#questions")
    questions.innerHTML = "";
    ulCreate.innerHTML = "";

    userChoices = questions[questionIndex].choices;
    var userQuestion = questions[questionIndex].title;
    questions.textContent = userQuestion;
    
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
    
    for (var i = 0; i < questions.length; i++) {
        let pQuestion = document.querySelector(`#question${i}`)
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
    }

    var pQuestion1 = document.querySelector("#question1");
    var pQuestion2 = document.querySelector("#question2");
    var pQuestion3 = document.querySelector("#question3");
        
        //questions.textContent = userQuestion;
    
    
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
  


function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
     
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Hurray! The answer is:  " + questions[questionIndex].answer;
        
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Oh d-d-d-dear! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    questionIndex++;

    if (questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "You answered  " + score + "/" + questions.length + " correctly!";
    } else {
        userChoices(questionIndex);
    }
    questions.appendChild(createDiv);

}

function allDone() {
    questions.innerHTML = "";
    currentTime.innerHTML = "";


    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "That's All Folks!"

    questions.appendChild(createH1);

    
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questions.appendChild(createP);

    
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questions.appendChild(createP2);
    }


    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questions.appendChild(createLabel);

    
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questions.appendChild(createInput);

    
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questions.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
           
            window.location.replace("./HighScores.html");
        }
    });

}

