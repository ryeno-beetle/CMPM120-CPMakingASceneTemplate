class MainMenu extends Phaser.Scene {
    constructor() {
        super("mainMenu");
        console.log("MainMenu: constructor");
    }

    init() {
        console.log("MainMenu: init");
        this.hp = 100;
        this.xp = 0;
        console.log(`hp: ${this.hp}, xp: ${this.xp}`);
        console.log(this);
    }

    create() {
        console.log("MainMenu: create");

        let playerStats = {
            hp: this.hp,
            xp: this.xp
        };

        this.scene.start("playScene", playerStats);
    }


}