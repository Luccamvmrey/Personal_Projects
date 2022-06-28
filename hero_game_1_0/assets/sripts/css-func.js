//Menu Variables
const mapHandle = document.getElementById("map-handle");
const skillsHandle = document.getElementById("skills-handle");
const inventoryHandle = document.getElementById("inventory-handle");
const mapTab = document.getElementById("map");
const skillsTab = document.getElementById("skills");
const inventoryTab = document.getElementById("inventory");

//Animation Variables
const player = document.getElementById("hero");
const enemy = document.getElementById("enemy");

//Menu Functions
function openTab(tab) {
  let currentTab = tab;
  if (currentTab === map) {
    mapTab.classList.add("open");
    skillsTab.classList.remove("open");
    inventoryTab.classList.remove("open");
  } else if (currentTab === skills) {
    mapTab.classList.remove("open");
    skillsTab.classList.add("open");
    inventoryTab.classList.remove("open");
  } else if (currentTab === inventory) {
    mapTab.classList.remove("open");
    skillsTab.classList.remove("open");
    inventoryTab.classList.add("open");
  }
}

function openMap() {
  openTab(map);
}

function openSkills() {
  openTab(skills);
}

function openInventory() {
  openTab(inventory);
}

//Animation Functions
function pAttackAnimation() {
  player.classList.add("animate-p_attack");
  enemy.classList.add("animate-e_damage");

  function remove() {
    player.classList.remove("animate-p_attack");
    enemy.classList.remove("animate-e_damage");
  }

  setTimeout(remove, 600);
}

function eAttackAnimation() {
  player.classList.add("animate-p_damage");
  enemy.classList.add("animate-e_attack");

  function remove() {
    player.classList.remove("animate-p_damage");
    enemy.classList.remove("animate-e_attack");
  }

  setTimeout(remove, 600);
}

function eDeath() {
  enemy.classList.add("animate-e_death");

  function remove() {
    enemy.classList.remove("animate-e_death");
  }

  setTimeout(remove, 2000);
}

//Menu Handles
mapHandle.addEventListener("click", openMap);
skillsHandle.addEventListener("click", openSkills);
inventoryHandle.addEventListener("click", openInventory);
