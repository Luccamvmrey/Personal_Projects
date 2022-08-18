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

  createEl(appendTo, value) {
    const nodeEl = document.createElement("div");
    nodeEl.className = "node";
    nodeEl.textContent = `${value}`;
    appendTo.append(nodeEl);
    appendTo.setAttribute("data-is-occupied", "true");
  }

  render(selectedRoom, value) {
    const rooms = document.querySelectorAll(".room");
    if (!selectedRoom && !value) {
      this.nodes.forEach((node) => {
        rooms.forEach((room) => {
          let isOccupied = room.getAttribute("data-is-occupied");
          if (isOccupied === "false" && !node.isAssigned) {
            this.createEl(room, node.value);
            node.isAssigned = true;
          }
        });
      });
    } else if (selectedRoom) {
      const parEl = selectedRoom.parentElement;
      const parLvl = parseInt(parEl.id.match(/\d+/g).pop());
      selectedRoom.innerHTML = "";
      this.createEl(selectedRoom, value);
    }
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

const mainInput = document.getElementById("main-input");
mainInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter" || event.key === "NumpadEnter") {
    event.preventDefault();
    tree.insert(mainInput.value);
    tree.render();
    mainInput.value = "";
  }
});

const singleNodeInput = document.getElementById("single-node-input");
const rooms = document.querySelectorAll(".room");
rooms.forEach((room) => {
  room.addEventListener("click", () => {
    rooms.forEach((item) => {
      if (item !== room) {
        item.classList.remove("activated");
      }
    });
    room.classList.toggle("activated");
    singleNodeInput.focus();
  });
});
singleNodeInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter" || event.key === "NumpadEnter") {
    let selectedRoom;
    rooms.forEach((item) => {
      if (item.classList.contains("activated")) {
        selectedRoom = item;
      }
    });
    event.preventDefault();
    tree.render(selectedRoom, +singleNodeInput.value);
    singleNodeInput.value = "";
  }
});

const testRoom = document.getElementById("test");
const testParent = testRoom.parentElement;
const testChildren = [...testParent.children];
const testLoop = () => {
  testChildren.forEach((child) => {
    if (child.getAttribute("data-is-occupied") === "false") {
      console.log("we're free!");
    }
  });
};
