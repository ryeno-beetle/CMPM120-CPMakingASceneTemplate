class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        console.log("Play: constructor");
    }

    init(stats) {
        console.log("Play: init");
        this.hp = stats.hp;
        this.xp = stats.xp;
    }

    create() {
        console.log("Play: create");
        console.log(`hp: ${this.hp}, xp: ${this.xp}`);

        // run concurrent scene
        // add(key, scene name, ??)
        this.scene.add("statsOverlayScene", StatsOverlay, false);
        this.scene.launch("statsOverlayScene");
    }

    update() {
        //console.log("Play: update");
    }
}