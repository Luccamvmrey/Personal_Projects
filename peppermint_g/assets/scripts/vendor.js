const playerHealthBar = document.getElementById("player-health");
const playerManaBar = document.getElementById("player-mana");
const enemyHealthBar = document.getElementById("enemy-health");

let notifAppeared = document.getElementById("not-01");
let notifWasKilled = document.getElementById("not-02");
let notifDropped = document.getElementById("not-03");
let notifExtra = document.getElementById("not-04");
let lifeMax = document.getElementById("life-max");
let lifeCurrent = document.getElementById("life-current");
let manaMax = document.getElementById("mana-max");
let manaCurrent = document.getElementById("mana-current");
let statHP = document.getElementById("sts-hp");
let statMP = document.getElementById("sts-mp");
let statStrenght = document.getElementById("sts-strength");
let statSpeed = document.getElementById("sts-speed");
let statToughness = document.getElementById("sts-toughness");
let enemyName = document.getElementById("enemy-name");
let enemyLvl = document.getElementById("enemy-lvl");

const startingStatLevel = 1;

const attackBtn = document.getElementById("attack-btn");
const specMoveBtn = document.getElementById("spec-move-btn");
const parryBtn = document.getElementById("parry-btn");
const actionBtn = document.getElementById("action-btn");

//Debug Buttons
const debugHPBtn = document.getElementById("test-HP-UP");
const debugMPBtn = document.getElementById("test-MP-UP");
//

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

//Coloca informações da barra de vida na tela de stats
function barToValueHP() {
  lifeMax.innerHTML = parseInt(playerHealthBar.max);
  lifeCurrent.innerHTML = parseInt(playerHealthBar.max);
  currentPlayerHealth = parseInt(playerHealthBar.max);
}

//Coloca informações da barra de vida na tela de stats
function barToValueMP() {
  manaMax.innerHTML = parseInt(playerManaBar.max);
  manaCurrent.innerHTML = parseInt(playerManaBar.max);
  currentPlayerMana = parseInt(playerManaBar.max);
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
}

function getNewEnemy(name, lvl) {
  enemyName.innerHTML = name;
  enemyLvl.innerHTML = lvl; 
  notifAppeared.innerHTML = `Lvl ${lvl} ${name} has appeared!!`
  enemyHealthBar.value = baseBarValue;
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

//Define como mana escala conforme níveis
function upMP(maxMana) {
  if (statMP.value <= 9) {
    playerManaBar.max = maxMana / (statMP.value / statMP.value ** 1.4);
    playerManaBar.value = maxMana / (statMP.value / statMP.value ** 1.4);
  } else {
    playerManaBar.max = maxMana / (statMP.value / statMP.value ** 1.45);
    playerManaBar.value = maxMana / (statMP.value / statMP.value ** 1.45);
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
  if (stat === statHP) { //Caso stat seja HP, escala a vida e informa em stats novamente
    upHP(baseBarValue);
    barToValueHP();
  } else if (stat === statMP) { //Caso stat seja MP, escala a vida e informa em stats novamente
    upMP(baseBarValue);
    barToValueMP();
  }
}

function dealEnemyDamage(damage) {
  let dealtDamage; 
  if (statStrenght.value === 1) {
    dealtDamage = parseInt(getRandom(0.5, 1) * damage);
  } else if ( statStrenght.value === 2) {
    dealtDamage = parseInt(getRandom(0.5, 1) * damage * (statStrenght.value / 1.5));
  } else {
    dealtDamage = parseInt(getRandom(0.5, 1) * damage * (statStrenght.value / 2));
  }
  enemyHealthBar.value = +enemyHealthBar.value - dealtDamage;
  return dealtDamage;
}

//ADICIONAR FATOR ENEMY LVL NO FUTURO
function dealPlayerDamage(damage) {
  const dealtDamage = parseInt(getRandom(0.5, 1) * damage);
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

//Usadas para teste das escalas de vida e mana
function assignStatPointHP() {
  assignStatPoint(statHP);
}

function assignStatPointMP() {
  assignStatPoint(statMP);
}
//


assignStartingStat(statHP);
assignStartingStat(statMP);
assignStartingStat(statStrenght);
assignStartingStat(statSpeed);
assignStartingStat(statToughness);

debugHPBtn.addEventListener("click", assignStatPointHP);
debugMPBtn.addEventListener("click", assignStatPointMP);
