const playerHealthBar = document.getElementById("player-health");
const playerManaBar = document.getElementById("player-mana");
const enemyHealthBar = document.getElementById("enemy-health");

let lifeMax = document.getElementById("life-max");
let lifeCurrent = document.getElementById("life-current");
let manaMax = document.getElementById("mana-max");
let manaCurrent = document.getElementById("mana-current");
let statHP = document.getElementById("sts-hp");
let statMP = document.getElementById("sts-mp");
let statStrenght = document.getElementById("sts-strength");
let statSpeed = document.getElementById("sts-speed");
let statToughness = document.getElementById("sts-toughness");

const startingStatLevel = 1;

const attackBtn = document.getElementById("attack-btn");
const specMoveBtn = document.getElementById("spec-move-btn");
const parryBtn = document.getElementById("parry-btn");
const actionBtn = document.getElementById("action-btn");

function adjustHealthBars(maxLife) {
  enemyHealthBar.max = maxLife;
  enemyHealthBar.value = maxLife;

  if (statHP.value <= 1){
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife;
  } else if(statHP.value <= 9) {
    playerHealthBar.max = maxLife / ((statHP.value/(statHP.value ** 1.4)));
    playerHealthBar.value = maxLife / ((statHP.value/(statHP.value ** 1.4)));
  } else {
    playerHealthBar.max = maxLife / ((statHP.value/(statHP.value ** 1.45)));
    playerHealthBar.value = maxLife / ((statHP.value/(statHP.value ** 1.45)));
  }
}

function adjustManaBar(maxMana) {
  if (statMP.value <= 1) {
    playerManaBar.max = maxMana;
    playerManaBar.value = maxMana;
  } else if(statMP.value <= 9) {
    playerManaBar.max = maxMana / ((statMP.value/(statMP.value ** 1.4)));
    playerManaBar.value = maxMana / ((statMP.value/(statMP.value ** 1.4)));
  } else {
    playerManaBar.max = maxMana / ((statMP.value/(statMP.value ** 1.45)));
    playerManaBar.value = maxMana / ((statMP.value/(statMP.value ** 1.45)));
  }
}

lifeMax.innerHTML = playerHealthBar.max;
manaMax.innerHTML = playerManaBar.max;

function assignStartingStat(stat) {
  stat.value = startingStatLevel;
  stat.innerHTML = stat.value;
}

function assignStatPoint(stat) {
  stat.value += +1;
  stat.innerHTML = stat.value;
}

assignStartingStat(statHP);
assignStartingStat(statMP);
assignStartingStat(statStrenght);
assignStartingStat(statSpeed);
assignStartingStat(statToughness);
