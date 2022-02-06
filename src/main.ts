const canvas = document.querySelector<HTMLCanvasElement>("canvas");
if (canvas === null) {
  throw new Error("Could not find canvas element");
}

const context = canvas.getContext("2d");

if (context === null) {
  throw new Error("Could not obtain 2d context");
}

context.fillStyle = "white";
context.font = "16px sans-serif";
context.fillText("Let's make a game", canvas.width / 2 - 64, canvas.height / 2);
