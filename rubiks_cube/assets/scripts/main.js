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

const fOne = document.querySelectorAll(".f-one .piece");
const fTwo = document.querySelectorAll(".f-two .piece");
const fThree = document.querySelectorAll(".f-three .piece");
const fFour = document.querySelectorAll(".f-four .piece");
const fFive = document.querySelectorAll(".f-five .piece");
const fSix = document.querySelectorAll(".f-six .piece");

const upPieceMap = [];
const downPieceMap = [];
const rightPieceMap = [];
const leftPieceMap = [];
const frontPieceMap = [];
const backPieceMap = [];
const miPieceMap = [];
const sePieceMap = [];
const equaPieceMap = [];

const fOneMap = [];
const fTwoMap = [];
const fThreeMap = [];
const fFourMap = [];
const fFiveMap = [];
const fSixMap = [];

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

const faceMaps = [fOneMap, fTwoMap, fThreeMap, fFourMap, fFiveMap, fSixMap];

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

const facePieces = [fOne, fTwo, fThree, fFour, fFive, fSix];

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

  const mapAllFaces = () => {
    facePieces.forEach((face) => {
      face.forEach((item) => {
        const pieceColor = parseInt(item.getAttribute("data-color"));
        if (face === fOne) {
          fOneMap.push(pieceColor);
        } else if (face === fTwo) {
          fTwoMap.push(pieceColor);
        } else if (face === fThree) {
          fThreeMap.push(pieceColor);
        } else if (face === fFour) {
          fFourMap.push(pieceColor);
        } else if (face === fFive) {
          fFiveMap.push(pieceColor);
        } else if (face === fSix) {
          fSixMap.push(pieceColor);
        }
      });
    });
  };
  mapAllFaces();
  mapAll();
};

const move = (moveMap, movePieces, type) => {
  let newColors = [];

  if (
    moveMap === frontPieceMap ||
    moveMap === backPieceMap ||
    moveMap === sePieceMap
  ) {
    if (type === "clock") {
      moveMap.forEach((p, idx) => {
        if (idx >= 0 && idx <= 2) {
          newColors.push(moveMap[idx + 3]);
        } else if (idx >= 3 && idx <= 5) {
          newColors.push(moveMap[idx + 6]);
        } else if (idx >= 6 && idx <= 8) {
          newColors.push(moveMap[idx - 6]);
        } else if (idx >= 9 && idx <= 11) {
          newColors.push(moveMap[idx - 3]);
        }
      });
    } else if (type === "counter") {
      moveMap.forEach((p, idx) => {
        if (idx >= 0 && idx <= 2) {
          newColors.push(moveMap[idx + 6]);
        } else if (idx >= 3 && idx <= 5) {
          newColors.push(moveMap[idx - 3]);
        } else if (idx >= 6 && idx <= 8) {
          newColors.push(moveMap[idx + 3]);
        } else if (idx >= 9 && idx <= 11) {
          newColors.push(moveMap[idx - 6]);
        }
      });
    }
  } else {
    if (type === "clock") {
      moveMap.forEach((p, idx) => {
        if (idx >= 9) {
          newColors.push(moveMap[idx - 9]);
        } else {
          newColors.push(moveMap[idx + 3]);
        }
      });
    } else if (type === "counter") {
      moveMap.forEach((p, idx) => {
        if (idx <= 2) {
          newColors.push(moveMap[idx + 9]);
        } else {
          newColors.push(moveMap[idx - 3]);
        }
      });
    }
  }

  if (
    (moveMap === rightPieceMap && type === "counter") ||
    (moveMap === leftPieceMap && type === "counter")
  ) {
    const reversed = newColors.splice(0, 3);
    const reversed2 = newColors.splice(6, 9);
    reversed2.forEach((item) => {
      newColors.splice(6, 0, item);
    });
    reversed.forEach((item) => {
      newColors.unshift(item);
    });
    newColors.forEach((color, idx) => {
      for (let i = 0; i <= newColors.length; ) {
        if (i === idx) {
          movePieces[i].setAttribute("data-color", `${color}`);
          break;
        } else {
          i++;
        }
      }
    });
  } else if (
    (moveMap === rightPieceMap && type === "clock") ||
    (moveMap === leftPieceMap && type === "clock")
  ) {
    const reversed3 = newColors.splice(9, 12);
    reversed3.forEach(item => {
      newColors.splice(9, 0, item);
    })
    newColors.forEach((color, idx) => {
      for (let i = 0; i <= newColors.length; ) {
        if (i === idx) {
          movePieces[i].setAttribute("data-color", `${color}`);
          break;
        } else {
          i++;
        }
      }
    });
  } else {
    newColors.forEach((color, idx) => {
      for (let i = 0; i <= newColors.length; ) {
        if (i === idx) {
          movePieces[i].setAttribute("data-color", `${color}`);
          break;
        } else {
          i++;
        }
      }
    });
  }

  const doRotate = () => {
    let rot;

    const cisRot = () => {
      if (type === "clock") {
        rot = "clock";
      } else {
        rot = "counter";
      }
    };

    const transRot = () => {
      if (type === "clock") {
        rot = "counter";
      } else {
        rot = "clock";
      }
    };

    if (movePieces === upPieces) {
      cisRot();
      rotate(fOneMap, rot);
    } else if (movePieces === downPieces) {
      transRot();
      rotate(fFiveMap, rot);
    } else if (movePieces === rightPieces) {
      cisRot();
      rotate(fFourMap, rot);
    } else if (movePieces === leftPieces) {
      transRot();
      rotate(fTwoMap, rot);
    } else if (movePieces === frontPieces) {
      cisRot();
      rotate(fThreeMap, rot);
    } else if (movePieces === backPieces) {
      transRot();
      rotate(fSixMap, rot);
    }
    rot = "";
  };

  console.log(newColors);
  setColor();
  trimMaps();
  doRotate();
  newColors = [];
};

const rotate = (faceMap, type) => {
  let newFaceColors = [];
  let face;

  if (faceMap === fOneMap) {
    face = fOne;
  } else if (faceMap === fTwoMap) {
    face = fTwo;
  } else if (faceMap === fThreeMap) {
    face = fThree;
  } else if (faceMap === fFourMap) {
    face = fFour;
  } else if (faceMap === fFiveMap) {
    face = fFive;
  } else if (faceMap === fSixMap) {
    face = fSix;
  }

  if (type === "counter") {
    faceMap.forEach((p, idx) => {
      if (idx == 0) {
        newFaceColors.push(faceMap[2]);
      } else if (idx == 1) {
        newFaceColors.push(faceMap[5]);
      } else if (idx == 2) {
        newFaceColors.push(faceMap[8]);
      } else if (idx == 3) {
        newFaceColors.push(faceMap[1]);
      } else if (idx == 4) {
        newFaceColors.push(faceMap[4]);
      } else if (idx == 5) {
        newFaceColors.push(faceMap[7]);
      } else if (idx == 6) {
        newFaceColors.push(faceMap[0]);
      } else if (idx == 7) {
        newFaceColors.push(faceMap[3]);
      } else if (idx == 8) {
        newFaceColors.push(faceMap[6]);
      }
    });
  } else if (type === "clock") {
    faceMap.forEach((p, idx) => {
      if (idx == 0) {
        newFaceColors.push(faceMap[6]);
      } else if (idx == 1) {
        newFaceColors.push(faceMap[3]);
      } else if (idx == 2) {
        newFaceColors.push(faceMap[0]);
      } else if (idx == 3) {
        newFaceColors.push(faceMap[7]);
      } else if (idx == 4) {
        newFaceColors.push(faceMap[4]);
      } else if (idx == 5) {
        newFaceColors.push(faceMap[1]);
      } else if (idx == 6) {
        newFaceColors.push(faceMap[8]);
      } else if (idx == 7) {
        newFaceColors.push(faceMap[5]);
      } else if (idx == 8) {
        newFaceColors.push(faceMap[2]);
      }
    });
  }

  newFaceColors.forEach((color, idx) => {
    for (let i = 0; i <= newFaceColors.length; ) {
      if (i === idx) {
        face[i].setAttribute("data-color", `${color}`);
        break;
      } else {
        i++;
      }
    }
  });

  setColor();
  trimMaps();
  newFaceColors = [];
  face = "";
};

const trimMaps = () => {
  faceMaps.forEach((map) => {
    map.splice(0, 9);
  });
  maps.forEach((map) => {
    map.splice(0, 12);
  });
};

setColor();
document.getElementById("up").addEventListener("click", () => {
  move(upPieceMap, upPieces, "clock");
});
document.getElementById("up-prime").addEventListener("click", () => {
  move(upPieceMap, upPieces, "counter");
});
document.getElementById("down").addEventListener("click", () => {
  move(downPieceMap, downPieces, "counter");
});
document.getElementById("down-prime").addEventListener("click", () => {
  move(downPieceMap, downPieces, "clock");
});
document.getElementById("right").addEventListener("click", () => {
  move(rightPieceMap, rightPieces, "clock");
});
document.getElementById("right-prime").addEventListener("click", () => {
  move(rightPieceMap, rightPieces, "counter");
});
document.getElementById("left").addEventListener("click", () => {
  move(leftPieceMap, leftPieces, "counter");
});
document.getElementById("left-prime").addEventListener("click", () => {
  move(leftPieceMap, leftPieces, "clock");
});
document.getElementById("front").addEventListener("click", () => {
  move(frontPieceMap, frontPieces, "clock");
});
document.getElementById("front-prime").addEventListener("click", () => {
  move(frontPieceMap, frontPieces, "counter");
});
document.getElementById("back").addEventListener("click", () => {
  move(backPieceMap, backPieces, "counter");
});
document.getElementById("back-prime").addEventListener("click", () => {
  move(backPieceMap, backPieces, "clock");
});
document.getElementById("middle").addEventListener("click", () => {
  move(miPieceMap, miPieces, "counter");
});
document.getElementById("middle-prime").addEventListener("click", () => {
  move(miPieceMap, miPieces, "clock");
});
// document.getElementById("setentrional").addEventListener("click", () => {
//   move(sePieceMap, sePieces, "clock");
// });
// document.getElementById("setentrional-prime").addEventListener("click", () => {
//   move(sePieceMap, sePieces, "counter");
// });
// document.getElementById("equatorial").addEventListener("click", () => {
//   move(equaPieceMap, equaPieces, "counter");
// });
// document.getElementById("equatorial-prime").addEventListener("click", () => {
//   move(equaPieceMap, equaPieces, "clock");
// });
