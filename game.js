const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");
const progress = document.getElementById("progress");
const progressFull = document.getElementById("progress-full");

let currentQ ={};
let answers = false;
let score = 0;
let questionCounter = 0;
let availableQ = [];

let questions = [
    {
        question: "What's the collect Ronaldo's celebration?",
        choice1: "sui",
        choice2: "sewey",
        choice3: "siu", 
        choice4: "suuu",
        answer: "2"
    },
    {
        question : "Who's the best youtuber?",
        choice1: "Ishowspeed",
        choice2: "KSI",
        choice3: "Pewdipie", 
        choice4: "Mr. Beast",
        answer: "1"
    },    
    {
        question: "Who's the best character?",
        choice1: "Luffy",
        choice2: "Talking Ben",
        choice3: "Yamato", 
        choice4: "Toga Himiko",
        answer: "3"
    }
];



const correctBouns = 100;
const maxQ = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQ = [...questions];
    getNew();
};
getNew = () => {
    if(availableQ.length === 0 || questionCounter >= maxQ){
        localStorage.setItem("recentScore", score);
        return window.location.assign("end.html");
    }
    questionCounter++;
    progress.innerText = "Question" + " " + questionCounter + "/" + maxQ;
    progressFull.style.width = `${(questionCounter / maxQ) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQ.length);
    currentQ = availableQ[questionIndex];
    question.innerText = currentQ.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQ["choice" + number];
    });
    availableQ.splice(questionIndex, 1);
    answers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!answers) return;
        answers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const apply = selectedAnswer == currentQ.answer ? "correct" : "incorrect";
        if(apply === "correct") {
            increscore(correctBouns);
        }

        selectedChoice.parentElement.classList.add(apply); 

        setTimeout( ()=> {
            selectedChoice.parentElement.classList.remove(apply);
            getNew();
        }, 1000);
    });
});

increscore = num =>{
    score += num;
    scoreText.innerText = score;
} 

startGame();
