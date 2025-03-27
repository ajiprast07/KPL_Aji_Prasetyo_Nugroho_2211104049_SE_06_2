class Game {
    constructor() {
        this.state = "START";
    }

    transition(command) {
        switch (this.state) {
            case "START":
                if (command === "PLAY") {
                    this.state = "PLAYING";
                    console.log("Game dimulai!");
                }
                break;
            case "PLAYING":
                if (command === "LOSE") {
                    this.state = "GAME OVER";
                    console.log("Game Over!");
                }
                break;
            case "GAME OVER":
                if (command === "RESTART") {
                    this.state = "START";
                    console.log("Game di-restart. Kembali ke START.");
                }
                break;
        }
        
        if (command === "EXIT") {
            console.log("Keluar dari permainan.");
            process.exit();
        }
    }

    start() {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log("Permainan dimulai. Ketik PLAY untuk bermain, EXIT untuk keluar.");
        
        readline.on("line", (input) => {
            this.transition(input.trim().toUpperCase());
            console.log("State saat ini:", this.state);
        });
    }
}

const game = new Game();
game.start();
