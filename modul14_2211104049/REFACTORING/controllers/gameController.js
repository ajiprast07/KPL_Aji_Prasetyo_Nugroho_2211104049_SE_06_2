/**
 * Kelas Game mengatur alur permainan berbasis perintah dan transisi status.
 */
class Game {
  constructor() {
    this.state = 'START';
  }

  /**
   * Menangani transisi status berdasarkan perintah yang diterima.
   * @param {string} command - Perintah yang diberikan pemain.
   */
  handleTransition(command) {
    switch (this.state) {
      case 'START':
        if (command === 'PLAY') {
          this.state = 'PLAYING';
          console.log('Game dimulai!');
        }
        break;

      case 'PLAYING':
        if (command === 'LOSE') {
          this.state = 'GAME OVER';
          console.log('Game Over!');
        }
        break;

      case 'GAME OVER':
        if (command === 'RESTART') {
          this.state = 'START';
          console.log('Game di-restart. Kembali ke START.');
        }
        break;
    }

    if (command === 'EXIT') {
      console.log('Keluar dari permainan.');
      process.exit();
    }
  }
}

module.exports = Game;