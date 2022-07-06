const upPieces = document.querySelectorAll(".u");
const downPieces = document.querySelectorAll(".d");
const rightPieces = document.querySelectorAll(".r");
const leftPieces = document.querySelectorAll(".l");
const frontPieces = document.querySelectorAll(".f");
const backPieces = document.querySelectorAll(".b");
const miPieces = document.querySelectorAll(".m");
const sePieces = document.querySelectorAll(".s");
const equaPieces = document.querySelectorAll(".e");
const pieces = document.querySelectorAll(".piece");

const upPieceMap = [];
const downPieceMap = [];
const rightPieceMap = [];
const leftPieceMap = [];
const frontPieceMap = [];
const backPieceMap = [];
const miPieceMap = [];
const sePieceMap = [];
const equaPieceMap = [];

const maps = [
  upPieceMap,
  downPieceMap,
  rightPieceMap,
  leftPieceMap,
  frontPieceMap,
  backPieceMap,
  miPieceMap,
  sePieceMap,
  equaPieceMap,
];

const movePieces = [
  upPieces,
  downPieces,
  rightPieces,
  leftPieces,
  frontPieces,
  backPieces,
  miPieces,
  sePieces,
  equaPieces,
];

const setColor = () => {
  pieces.forEach((item) => {
    const pieceColor = item.getAttribute("data-color");

    if (pieceColor === "0") {
      item.classList.add("cw");
      item.classList.remove("co", "cg", "cr", "cy", "cb");
    } else if (pieceColor === "1") {
      item.classList.add("co");
      item.classList.remove("cw", "cg", "cr", "cy", "cb");
    } else if (pieceColor === "2") {
      item.classList.add("cg");
      item.classList.remove("cw", "co", "cr", "cy", "cb");
    } else if (pieceColor === "3") {
      item.classList.add("cr");
      item.classList.remove("cw", "co", "cg", "cy", "cb");
    } else if (pieceColor === "4") {
      item.classList.add("cy");
      item.classList.remove("cw", "cg", "co", "cr", "cb");
    } else if (pieceColor === "5") {
      item.classList.add("cb");
      item.classList.remove("cw", "co", "cg", "cr", "cy");
    }
  });

  const mapAll = () => {
    movePieces.forEach((move) => {
      move.forEach((item) => {
        const pieceColor = parseInt(item.getAttribute("data-color"));
        if (move === upPieces) {
          upPieceMap.push(pieceColor);
        } else if (move === downPieces) {
          downPieceMap.push(pieceColor);
        } else if (move === rightPieces) {
          rightPieceMap.push(pieceColor);
        } else if (move === leftPieces) {
          leftPieceMap.push(pieceColor);
        } else if (move === frontPieces) {
          frontPieceMap.push(pieceColor);
        } else if (move === backPieces) {
          backPieceMap.push(pieceColor);
        } else if (move === miPieces) {
          miPieceMap.push(pieceColor);
        } else if (move === sePieces) {
          sePieceMap.push(pieceColor);
        } else if (move === equaPieces) {
          equaPieceMap.push(pieceColor);
        }
      });
    });
  };
  mapAll();
};

const uMove = () => {
  let newColors = [];
  upPieceMap.forEach((piece, idx) => {
    if (idx === 9 || idx === 10 || idx === 11) {
      newColors.push(upPieceMap[idx - 9])
    } else {
      newColors.push(upPieceMap[idx + 3]);
    }
  });

  newColors.forEach((color, idx) => {
    let i = 0;
    if (i === idx) {
      upPieces[i].getAttribute("data-color").value = color;
    }
  })

  setColor();
  console.log(newColors);
  newColors = [];
};

setColor();
