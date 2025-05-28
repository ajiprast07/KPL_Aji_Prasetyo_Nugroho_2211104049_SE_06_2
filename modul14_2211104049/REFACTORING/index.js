const readline = require('readline');
const Game = require('./controllers/gameController');

const game = new Game();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptCommand = () => {
  rl.question('Masukkan perintah (PLAY, LOSE, RESTART, EXIT): ', (command) => {
    game.handleTransition(command.trim().toUpperCase());
    promptCommand();
  });
};

promptCommand();