const baseBarValue = 100;
const stdAttackValue = 50;
const specialMoveValue = 15;
const enemyAttackValue = 12; //FAZER ESCALAR COM ENEMY LVL NO FUTURO
const winHealValue = parseInt(playerHealthBar.max * 0.5)

const stdAttack = "standard_attack";
const specialMove = "special_move";

let currentEnemyHealth = enemyHealthBar.value;
let currentPlayerHealth = playerHealthBar.value;
let currentPlayerMana = playerManaBar.value;

adjustBars(baseBarValue);
getNewEnemy("Lil'Shit", 1);

function endFight() {
  if (currentEnemyHealth <= 0 && currentPlayerHealth > 0) {
    clearNotif();
    notifWasKilled.innerHTML = `Lvl ${currentEnemyLvl} ${currentEnemyName} was killed!`;
    winHeal();
    getXP();
    setTimeout(clearNotif, 3400);
    setTimeout(getNewEnemy, 3500, "Sligthly Bigger Shit", 2);
  } else if (currentPlayerHealth <= 0 && currentEnemyHealth > 0) { 
    notifWasKilled.innerHTML = "Lvl 1 Lil' Shit massacred the player!";

  } else if (currentPlayerHealth <= 0 && currentEnemyHealth <= 0) {
    notifWasKilled.innerHTML = "You both fell!";

  }
}

function attackEnemy(mode) {
  let maxDamage;
  if (mode === stdAttack) {
    maxDamage = stdAttackValue;
  } else if (mode === specialMove) {
    maxDamage = specialMoveValue;
  }
  const playerDamage = dealEnemyDamage(maxDamage);
  currentEnemyHealth -= playerDamage;
  const enemyDamage = dealPlayerDamage(enemyAttackValue);
  currentPlayerHealth -= enemyDamage;
  lifeCurrent.innerHTML = currentPlayerHealth;
  endFight();
}

function attackHandler() {
  attackEnemy(stdAttack);
}

function specialMoveHandler() {
  attackEnemy(specialMove);
}

attackBtn.addEventListener("click", attackHandler);
specMoveBtn.addEventListener("click", specialMoveHandler);
