const playerHealthBar = document.getElementById("player-health");
const playerManaBar = document.getElementById("player-mana");
const playerXPBar = document.getElementById("player-xp");
const enemyHealthBar = document.getElementById("enemy-health");

//notifications
let notifAppeared = document.getElementById("not-01");
let notifWasKilled = document.getElementById("not-02");
let notifDropped = document.getElementById("not-03");
let notifExtra = document.getElementById("not-04");

//life mana xp
let lifeMax = document.getElementById("life-max");
let lifeCurrent = document.getElementById("life-current");
let manaMax = document.getElementById("mana-max");
let manaCurrent = document.getElementById("mana-current");
let xpMax = document.getElementById("xp-max");
let xpCurrent = document.getElementById("xp-current");

//stats
let playerName = document.getElementById("player-name");
let skillPoints = document.getElementById("skill-points");
let playerLvl_01 = document.getElementById("player-lvl_01");
let playerLvl_02 = document.getElementById("player-lvl_02");
let statHP = document.getElementById("sts-hp");
let statStrenght = document.getElementById("sts-strength");
let statSpeed = document.getElementById("sts-speed");
let statToughness = document.getElementById("sts-toughness");

//enemy details
let enemyName = document.getElementById("enemy-name");
let enemyLvl = document.getElementById("enemy-lvl");
const enemyImg = document.querySelector("#enemy img");

const startingStatLevel = 1;
const startingLevel = startingStatLevel;

//buttons
const attackBtn = document.getElementById("attack-btn");
const specMoveBtn = document.getElementById("spec-move-btn");
const parryBtn = document.getElementById("parry-btn");
const actionBtn = document.getElementById("action-btn");
const nameBtn = document.getElementById("change-name");

let currentEnemyName;
let currentEnemyLvl;
let currentPlayerLvl = startingLevel;

let playerNameDefault = "Hero";
playerName.innerHTML = playerNameDefault;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

//Coloca informações da barra de vida na tela de stats
function barToValueHP() {
  lifeMax.innerHTML = parseInt(playerHealthBar.max);
  lifeCurrent.innerHTML = parseInt(playerHealthBar.max);
  currentPlayerHealth = parseInt(playerHealthBar.max);
}

//Coloca informações da barra de mana na tela de stats
function barToValueMP() {
  manaMax.innerHTML = parseInt(playerManaBar.max);
  manaCurrent.innerHTML = parseInt(playerManaBar.max);
  currentPlayerMana = parseInt(playerManaBar.max);
}

function barToValueXP() {
  xpMax.innerHTML = parseInt(playerXPBar.max);
  xpCurrent.innerHTML = parseInt(playerXPBar.value);
}

//Ajusta valores iniciais para as barras e informa em stats
function adjustBars(baseBarValue) {
  enemyHealthBar.max = baseBarValue;
  enemyHealthBar.value = baseBarValue;
  playerHealthBar.max = baseBarValue;
  playerHealthBar.value = baseBarValue;
  playerManaBar.max = baseBarValue;
  playerManaBar.value = baseBarValue;
  barToValueHP();
  barToValueMP();
  barToValueXP();
}

function clearNotif() {
  notifAppeared.innerHTML = "";
  notifWasKilled.innerHTML = "";
  notifDropped.innerHTML = "";
  notifExtra.innerHTML = "";
}

function getEnemy(enemy) {
  enemyLvl = enemy.lvl;
  enemyLvl.innerHTML = `${enemyLvl}`; // fix this
  enemyName.innerHTML = enemy.name;
  enemyImg.src = enemy.imgURL;
}

function getNewEnemy(name, lvl) {
  currentEnemyName = name;
  currentEnemyLvl = lvl;
  enemyName.innerHTML = name;
  enemyLvl.innerHTML = lvl;
  notifAppeared.innerHTML = `Lvl ${lvl} ${name} has appeared!!`;
  enemyHealthBar.value = baseBarValue;
  currentEnemyHealth = enemyHealthBar.value;
}

//Define como vida escala conforme níveis
function upHP(maxLife) {
  if (statHP.value <= 9) {
    playerHealthBar.max = maxLife / (statHP.value / statHP.value ** 1.4);
    playerHealthBar.value = maxLife / (statHP.value / statHP.value ** 1.4);
  } else {
    playerHealthBar.max = maxLife / (statHP.value / statHP.value ** 1.45);
    playerHealthBar.value = maxLife / (statHP.value / statHP.value ** 1.45);
  }
}

//Define 1 como sendo nível inicial dos stats
function assignStartingStat(stat) {
  stat.value = startingStatLevel;
  stat.innerHTML = stat.value;
}

//Adiciona nível no stat definido
function assignStatPoint(stat) {
  stat.value += +1;
  stat.innerHTML = stat.value;
  if (stat === statHP) {
    //Caso stat seja HP, escala a vida e informa em stats novamente
    upHP(baseBarValue);
    barToValueHP();
  }
}

function assignLevel(value) {
  playerLvl_01.value = value;
  playerLvl_01.innerHTML = playerLvl_01.value;
  playerLvl_02.value = value;
  playerLvl_02.innerHTML = playerLvl_01.value;
}

function dealEnemyDamage(damage) {
  let dealtDamage;
  if (statStrenght.value === 1) {
    dealtDamage = parseInt(getRandom(0.5, 1) * damage);
  } else if (statStrenght.value === 2) {
    dealtDamage = parseInt(
      getRandom(0.5, 1) * damage * (statStrenght.value / 1.5)
    );
  } else {
    dealtDamage = parseInt(
      getRandom(0.5, 1) * damage * (statStrenght.value / 2)
    );
  }
  enemyHealthBar.value = +enemyHealthBar.value - dealtDamage;
  return dealtDamage;
}

function endFight() {
  if (enemyHealthBar.value <= 0 && playerHealthBar.value > 0) {
    clearNotif();
    notifWasKilled.innerHTML = `Lvl ${currentEnemyLvl} ${currentEnemyName} was killed!`;
    winHeal();
    getXP();
    setTimeout(clearNotif, 2400);
    setTimeout(getNewEnemy, 2500, "Sligthly Bigger Shit", 2);
  } else if (playerHealthBar.value <= 0 && enemyHealthBar.value > 0) {
    notifWasKilled.innerHTML = "Lvl 1 Lil' Shit massacred the player!";
  } else if (playerHealthBar.value <= 0 && enemyHealthBar.value <= 0) {
    notifWasKilled.innerHTML = "You both fell!";
  }
}

const isEnemyDead = (oldEnemyHealth, damage) => {
  if (+oldEnemyHealth - +damage <= 0) {
    return true;
  } else {
    return false;
  }
};

// const isPlayerDead = () => {
//   if (currentPlayerHealth <= 0 && currentEnemyHealth > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//Funções de XP
function getXP() {
  let xpValue = parseInt(calcXP(currentEnemyLvl, currentPlayerLvl));
  playerXPBar.value += xpValue;
  xpCurrent.innerHTML = playerXPBar.value;
  notifDropped.innerHTML = `You earned ${xpValue}xp!`;

  if (playerXPBar.value >= playerXPBar.max) {
    let sumBarValue = playerXPBar.value + xpValue;
    currentPlayerLvl += +1;
    assignLevel(currentPlayerLvl);
    giveSkillPoint();
    playerXPBar.value = sumBarValue - playerXPBar.max;
    xpCurrent.innerHTML = playerXPBar.value;
  }
}

function calcXP(eV, pV) {
  let difE = eV - pV;
  let xpValue;
  if (eV < pV && difE > -2) {
    xpValue = 5 + difE * 5;
  } else if (eV >= pV) {
    xpValue = 10 + difE * 5;
  } else {
    xpValue = 0;
  }
  return xpValue;
}

function giveSkillPoint() {
  skillPoints.innerHTML += +1;
  skillPoints.value += +1;
}

//ADICIONAR FATOR ENEMY LVL NO FUTURO
function dealPlayerDamage(damage) {
  const dealtDamage = parseInt(getRandom(0.5, 1) * damage);
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function winHeal() {
  let healValue;
  notifExtra.innerHTML =
    "The player has received a blessing, half of his life was restored!";
  if (currentPlayerHealth >= playerHealthBar.max - winHealValue) {
    healValue = playerHealthBar.max - currentPlayerHealth;
  } else {
    healValue = winHealValue;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  lifeCurrent.innerHTML = currentPlayerHealth;
}

//Usadas para teste das escalas de vida e mana
function assignStatPointHP() {
  clearNotif();
}

//
assignLevel(startingLevel);
assignStartingStat(statHP);
assignStartingStat(statStrenght);
assignStartingStat(statSpeed);
assignStartingStat(statToughness);

nameBtn.addEventListener(
  "click",
  () => (playerName.innerHTML = prompt("Tell us your name:"))
);
