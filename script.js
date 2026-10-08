const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },

    {
        question: "Which language is used to create the structure of a web page?",
        options: ["Python", "HTML", "SQL", "Java"],
        answer: "HTML"
    },

    {
        question: "Which language is used for styling web pages?",
        options: ["Python", "CSS", "C", "SQL"],
        answer: "CSS"
    },

    {
        question: "Which language makes web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },

    {
        question: "Which language is commonly used to manage databases?",
        options: ["HTML", "CSS", "SQL", "Java"],
        answer: "SQL"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    document.getElementById("question-number").innerText =
        "Question " + (currentQuestion + 1) +
        " / " + questions.length;

    document.getElementById("score-display").innerText =
        "Score: " + score;

    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    questions[currentQuestion].options.forEach(function(option) {

        const button = document.createElement("button");

        button.innerText = option;

        button.className = "option";

        button.onclick = function() {

            checkAnswer(option, button);

        };

        optionsDiv.appendChild(button);

    });
}


function checkAnswer(selectedAnswer, button) {

    const correctAnswer =
        questions[currentQuestion].answer;

    const allButtons =
        document.querySelectorAll(".option");

    allButtons.forEach(function(btn) {

        btn.disabled = true;

    });

    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        allButtons.forEach(function(btn) {

            if (btn.innerText === correctAnswer) {

                btn.classList.add("correct");

            }

        });

    }

    document.getElementById("score-display").innerText =
        "Score: " + score;

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();

        }

    }, 800);
}


function showResult() {

    document.getElementById("quiz-box").classList.add("hidden");

    document.getElementById("result-box").classList.remove("hidden");

    document.getElementById("result").innerText =
        "Your Score: " + score + " / " + questions.length;
}


function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("quiz-box").classList.remove("hidden");

    document.getElementById("result-box").classList.add("hidden");

    loadQuestion();
}


loadQuestion();