import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("Clampy", "./clampy.png");
Assets.add("amongUs", "./amongUs.png");

Assets.load(["amongUs", "Clampy"]).then(() => {

	const amongUs: Sprite = Sprite.from("amongUs");
	console.log("Hola mundo!", amongUs.width, amongUs.height);

	app.stage.addChild(amongUs);

});