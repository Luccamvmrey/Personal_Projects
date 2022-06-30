//Player and enemy bars
const playerHealthBar = document.getElementById("player-health");
const playerManaBar = document.getElementById("player-mana");
const playerXPBar = document.getElementById("player-xp");
const enemyHealthBar = document.getElementById("enemy-health");

//Life, Mana and XP
const lifeCurrent = document.getElementById("life-current");
const manaCurrent = document.getElementById("mana-current");
const xpCurrent = document.getElementById("xp-current");

//Player stats
const playerName = document.getElementById("player-name");
const skillPoints = document.getElementById("skill-points");
const playerLvl = document.querySelectorAll(".player-lvl");
const stats = document.querySelectorAll(".stat");
const statHP = document.getElementById("sts-hp");
const statStrenght = document.getElementById("sts-strength");
const statSpeed = document.getElementById("sts-speed");
const statToughness = document.getElementById("sts-toughness");

//Starting Level and Stats Levels
const startingLevel = 1;
let currentPlayerLvl = startingLevel;

//Enemy details
const enemyName = document.getElementById("enemy-name");
const enemyLvl = document.getElementById("enemy-lvl");
const enemyImg = document.querySelector("#enemy img");

//Buttons
const attackBtn = document.getElementById("attack-btn");
const specMoveBtn = document.getElementById("spec-move-btn");
const parryBtn = document.getElementById("parry-btn");
const actionBtn = document.getElementById("action-btn");
const nameBtn = document.getElementById("change-name");

//Global Variables

//On Initialization
//Gets initial information on the bars values and shows them on stats screen
const barToValue = () => {
  document.getElementById("life-max").innerHTML = parseInt(playerHealthBar.max);
  lifeCurrent.innerHTML = parseInt(playerHealthBar.max);
  document.getElementById("mana-max").innerHTML = parseInt(playerManaBar.max);
  manaCurrent.innerHTML = parseInt(playerManaBar.max);
  document.getElementById("xp-max").innerHTML = parseInt(playerXPBar.max);
  xpCurrent.innerHTML = parseInt(playerXPBar.max);
};

//Adjusts initial values for the bars and shows them on stats screen
const adjustBars = (value) => {
  enemyHealthBar.max = value;
  enemyHealthBar.value = value;
  playerHealthBar.max = value;
  playerHealthBar.value = value;
  playerManaBar.max = value;
  playerManaBar.value = value;
  barToValue();
};

//Gets player name, enables changing it
const playerNaming = () => {
  let playerNameDefault = "Hero";
  playerName.innerHTML = playerNameDefault;
  nameBtn.addEventListener(
    "click",
    () => (playerName.innerHTML = prompt("Tell us your name"))
  );
};

const assignStartingStat = () => {
  stats.forEach((item) => {
    item.innerHTML = startingLevel;
  });
};

const onInit = (value) => {
  adjustBars(value);
  playerNaming();
  assignStartingStat();
  getNewEnemy("Lil'Shit", 1);
};
//End of on initialization

//On course functions
const clearNotif = () => {
  notifAppeared.innerHTML = "";
  notifWasKilled.innerHTML = "";
  notifDropped.innerHTML = "";
  notifExtra.innerHTML = "";
};

const getNewEnemy = (name, lvl) => {
  enemyName.innerHTML = name;
  enemyLvl.innerHTML = lvl;
  notifAppeared.innerHTML = `Lvl ${lvl} ${name} has appeared!!`;
  enemyHealthBar.value = baseBarValue;
};
//End of on course

//Being tested

//End of tests
