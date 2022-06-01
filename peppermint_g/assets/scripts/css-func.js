const mapHandle = document.getElementById('map-handle');
const skillsHandle = document.getElementById('skills-handle');
const inventoryHandle = document.getElementById('inventory-handle');
const mapTab = document.getElementById('map');
const skillsTab = document.getElementById('skills');
const inventoryTab = document.getElementById('inventory');

function openTab(tab) {
  let currentTab = tab;
  if (currentTab === map) {
    mapTab.classList.add('open');
    skillsTab.classList.remove('open');
    inventoryTab.classList.remove('open');
  } else if (currentTab === skills) {
    mapTab.classList.remove('open');
    skillsTab.classList.add('open');
    inventoryTab.classList.remove('open');
  } else if (currentTab === inventory) {
    mapTab.classList.remove('open');
    skillsTab.classList.remove('open');
    inventoryTab.classList.add('open');
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

mapHandle.addEventListener('click', openMap);
skillsHandle.addEventListener('click', openSkills);
inventoryHandle.addEventListener('click', openInventory);