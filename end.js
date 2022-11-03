const username = document.getElementById("username");
const saveScore = document.getElementById("savescore");
const finalScore = document.getElementById("finalscore");
const recentScore = localStorage.getItem("recentScore");

const highscore = JSON.parse(localStorage.getItem("highscore")) || [];
const maxhs = 5;

finalScore.innerText = recentScore;

username.addEventListener("keyup", () => {
    saveScore.disabled = !username.value;
});
saveHighScore = e => {
    e.preventDefault();
    const score = {
        score: recentScore,
        name: username.value
    };
    highscore.push(score);
    highscore.sort((a,b) => b.score - a.score)
    highscore.splice(5);
    
    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.assign("");
};
