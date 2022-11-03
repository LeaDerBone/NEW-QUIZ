const highscore = JSON.parse(localStorage.getItem("highscore")) || [];
const highscoreList = document.getElementById("highscoreList");

highscoreList.innerHTML = highscore.map(score => {
    return `<li class="highscores">${score.name} - ${score.score}</li>`;
}).join("");
