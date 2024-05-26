// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import skyUrl from "../../static/assets/sky.json";
/* END-USER-IMPORTS */

export default class part1 extends Phaser.Scene {
  constructor() {
    super("part1");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
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
