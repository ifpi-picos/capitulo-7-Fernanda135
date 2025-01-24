const randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 100;
let players = [];

console.log("Bem-vindo ao Jogo de Adivinhação!");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askPlayerName() {
    readline.question('Por favor, digite seu nome: ', (name) => {
        if (name.trim() === "") {
            console.log("O nome não pode estar vazio. Tente novamente.");
            askPlayerName();
        } else {
            startGame(name);
        }
    });
}

function startGame(playerName) {
    console.log(`Você tem 100 pontos. Tente adivinhar o número entre 1 e 100!`);
    
    function askGuess() {
        readline.question('Digite seu palpite: ', (input) => {
            const guess = Number(input);

            if (isNaN(guess) || guess < 1 || guess > 100) {
                console.log("Por favor, escolha um número entre 1 e 100.");
                askGuess();
                return;
            }

            if (guess === randomNumber) {
                console.log(`Parabéns, ${playerName}! Você acertou o número ${randomNumber}!`);
                console.log(`Pontuação final: ${score}`);
                players.push({ name: playerName, score: score });
                showRanking();
                readline.close();
            } else {
                score--;
                if (guess < randomNumber) {
                    console.log(`O número secreto é maior que ${guess}.`);
                } else {
                    console.log(`O número secreto é menor que ${guess}.`);
                }
                console.log(`Pontuação: ${score}`);
                askGuess();
            }
        });
    }

    askGuess();
}

function showRanking() {
    console.log("\nClassificação Geral:");
    players.sort((a, b) => b.score - a.score);
    players.forEach(player => {
        console.log(`${player.name}: ${player.score} pontos`);
    });
}

askPlayerName();