var canvas = document.querySelector("canvas");
var tilesetContainer = document.querySelector(".tileset-container");
var tilesetSelection = document.querySelector(".tileset-container_selection");
var tilesetImage = document.querySelector("#tileset-source");

var selection = [0, 0];

var isMouseDown = false;
var currentLayer = 0;
var layers = [
  //Bottom
  {
    //Structure is "x-y": ["tileset_x", "tileset_y"]
    //EXAMPLE: "1-1": [3, 4],
  },
  //Middle
  {},
  //Top
  {},
];

function draw() {
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var sizeOfCrop = 32;

  layers.forEach((layer) => {
    Object.keys(layer).forEach((key) => {
      var positionX = Number(key.split("-")[0]);
      var positionY = Number(key.split("-")[1]);
      var [tilesheetX, tilesheetY] = layer[key];

      ctx.drawImage(
        tilesetImage,
        tilesheetX * 32,
        tilesheetY * 32,
        sizeOfCrop,
        sizeOfCrop,
        positionX * 32,
        positionY * 32,
        sizeOfCrop,
        sizeOfCrop
      );
    });
  });
}

function getCoords(e) {
  const { x, y } = e.target.getBoundingClientRect();
  const mouseX = e.clientX - x;
  const mouseY = e.clientY - y;
  return [Math.floor(mouseX / 32), Math.floor(mouseY / 32)];
}

tilesetContainer.addEventListener("mousedown", (event) => {
  selection = getCoords(event);
  tilesetSelection.style.left = selection[0] * 32 + "px";
  tilesetSelection.style.top = selection[1] * 32 + "px";
});

canvas.addEventListener("mousedown", () => {
  isMouseDown = true;
});
canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
});
canvas.addEventListener("mouseleave", () => {
  isMouseDown = false;
});
canvas.addEventListener("mousedown", addTile);
canvas.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    addTile(event);
  }
});

function addTile(mouseEvent) {
  var clicked = getCoords(event);
  var key = clicked[0] + "-" + clicked[1];

  if (mouseEvent.shiftKey) {
    delete layers[currentLayer][key];
  } else {
    layers[currentLayer][key] = [selection[0], selection[1]];
  }

  draw();
}

function setLayer(newLayer) {
  //Update the layer
  currentLayer = newLayer;

  //Update the UI to show updated layer
  var oldActiveLayer = document.querySelector(".layer.active");
  if (oldActiveLayer) {
    oldActiveLayer.classList.remove("active");
  }
  document
    .querySelector(`[tile-layer="${currentLayer}"]`)
    .classList.add("active");
}

function clearCanvas() {
  layers = [{}, {}, {}];
  draw();
}

tilesetImage.onload = function () {
  draw();
  setLayer(0);
};

function exportImage() {
  var data = canvas.toDataURL();
  var image = new Image();
  image.src = data;

  var w = window.open("");
  w.document.write(image.outerHTML);
}

tilesetImage.src =
  "https://assets.codepen.io/21542/TileEditorSpritesheet.2x_2.png";
