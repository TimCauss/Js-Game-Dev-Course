//We create a constant to keep in memory the HTML element with the "canvas1" ID
const canvas = document.getElementById("canvas1");

//We create a constant to keep the draw context of this canvas
const ctx = canvas.getContext("2d");

//Setting up and store the canvas size
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

//Import the player image
const playerImage = new Image();
playerImage.src = "img/Assets-animation/shadow_dog.png";

//setting sprite size for player animation
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "gethit",
    frames: 4,
  },
];
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

//Creating function animation
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //We use the clearRect() method to clear the canvas of all draws by passing all the canvas size in arguments
  //ctx.fillRect(100, 50, 100, 100); //On dessine pour le moment un rectangle avec (x, y, largeur, hauteur)
  let position =
    Math.floor(gameFrame / staggerFrames) % spriteAnimations["run"].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations["run"].loc[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
