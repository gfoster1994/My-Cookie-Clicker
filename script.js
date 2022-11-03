let score = 0;

let cpbScore = 0;

const scoreDisplay = document.getElementById("pokemon-counter");

const cpbDisplay = document.getElementById("cpb-counter");

const gameArea = document.getElementById("pokeballClicker");

const buyGreatball = document.getElementById("buy_greatball");

const buyUltraball = document.getElementById("buy_ultraball");

const buyMasterball = document.getElementById("buy_masterball");


gameArea.addEventListener("click", function(clickEvent) {
    if (clickEvent.target.matches(".pokeball")) {
        score++;
        scoreDisplay.innerText=score;
    }
});

setInterval(function() {
    score += cpbScore;
    scoreDisplay.innerText = score;
}, 1000);

buy_greatball.onclick = function greatballUpgrade(){
    if (score >= 10) {
        score -= 10;
        cpbScore += 2;
        cpbDisplay.innerText = cpbScore;
    }
}

buy_ultraball.onclick = function ultraballUpgrade() {
    if (score >= 50) {
        score -= 50;
        cpbScore += 5;
        cpbDisplay.innerText = cpbScore;
    }
}

buy_masterball.onclick = function masterballUpgrade() {
    if (score >=100) {
        score -= 100;
        cpbScore += 10;
        cpbDisplay.innerText = cpbScore;
    }
}
