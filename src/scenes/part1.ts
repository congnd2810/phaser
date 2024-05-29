
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Part1 extends Phaser.Scene {

	constructor() {
		super("part1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// sky
		this.add.image(641, 373, "sky");

		// image_1
		const image_1 = this.add.image(648, 372, "star");
		image_1.scaleX = 5;
		image_1.scaleY = 5;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here
	preload() {
		this.load.image('bomb', 'assets/bomb.png')
		this.load.image('dude', 'assets/dude.png')
		this.load.image('star', 'assets/bomb.png')
		this.load.image('platform', 'assets/platform.png')
		this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48})
	}
	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
