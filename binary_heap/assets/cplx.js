class Tree {
  nodes = [];
  sortedNodes = [];

  insert(value) {
    const node = new Node(value);
    this.nodes.push(node);
  }

  sort() {
    const nodeValues = [];

    this.nodes.forEach((node) => {
      nodeValues.push(+node.value);
    });
    nodeValues.sort((a, b) => a - b);

    nodeValues.forEach((value) => {
      this.nodes.forEach((node) => {
        if (value == node.value) {
          this.sortedNodes.push(node);
        }
      });
    });
  }

  render() {
    const rooms = document.querySelectorAll(".room");
    this.nodes.forEach((node) => {
      rooms.forEach((room) => {
        let isOccupied = room.getAttribute("data-is-occupied");
        if (isOccupied === "false" && !node.isAssigned) {
          const nodeEl = document.createElement("div");
          nodeEl.className = "node";
          nodeEl.textContent = `${node.value}`;
          room.append(nodeEl);
          room.setAttribute("data-is-occupied", "true");
          node.isAssigned = true;
        }
      });
    });
  }

  clear() {
    this.nodes = [];
    this.sortedNodes = [];
    const rooms = document.querySelectorAll(".room");
    rooms.forEach((room) => {
      if (room.getAttribute("data-is-occupied") === "true") {
        room.removeChild(room.firstChild);
        room.setAttribute("data-is-occupied", "false");
      }
    });
  }
}

class Node {
  isAssigned = false;

  constructor(value) {
    this.value = value;
  }
}

const tree = new Tree();
document.getElementById("clear").addEventListener("click", tree.clear);

const input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter" || event.key === "NumpadEnter") {
    event.preventDefault();
    tree.insert(input.value);
    tree.render();
    input.value = "";
  }
});

document.querySelectorAll(".room").forEach((room) => {
  room.addEventListener("click", () => {
    if (!room.querySelector(".inp-el")) {
      const inpEl = document.createElement("input");
      inpEl.setAttribute("type", "number"); 
      inpEl.className = "inp-el";
      room.appendChild(inpEl);
    }
  });
});
