// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnPointerDownScript } from "@phaserjs/editor-scripts-core";
import { PushActionScript } from "@phaserjs/editor-scripts-simple-animations";
import { OnAwakeScript } from "@phaserjs/editor-scripts-core";
import { MoveInSceneActionScript } from "@phaserjs/editor-scripts-simple-animations";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// fufuSuperDino
		const fufuSuperDino = this.add.image(1042, 269, "FufuSuperDino");
		fufuSuperDino.preFX!.padding = 100;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(fufuSuperDino);

		// pushAction
		new PushActionScript(onPointerDownScript);

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(fufuSuperDino);

		// moveInSceneActionScript_1
		const moveInSceneActionScript_1 = new MoveInSceneActionScript(onAwakeScript_1);

		// text
		const text = this.add.text(641, 458, "", {});
		text.scaleX = 0.9922895290225968;
		text.scaleY = 1.8164165237235346;
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser By Cong";
		text.setStyle({ "align": "center", "color": "#10d845ff", "fontFamily": "Arial", "fontSize": "4em" });

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(text);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// moveInSceneActionScript_1 (prefab fields)
		moveInSceneActionScript_1.from = "TOP";

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "BOTTOM";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
