const baseBarValue = 100;
const stdAttackValue = 50;
const specialMoveValue = 15;
const enemyAttackValue = 12; //FAZER ESCALAR COM ENEMY LVL NO FUTURO
const winHealValue = parseInt(playerHealthBar.max * 0.5);

const stdAttack = "standard_attack";
const specialMove = "special_move";

let currentEnemyHealth = enemyHealthBar.value;
let currentPlayerHealth = playerHealthBar.value;
let currentPlayerMana = playerManaBar.value;

adjustBars(baseBarValue);
getNewEnemy("Lil'Shit", 1);

function attackEnemy(mode) {
  let maxDamage;
  let hasAttacked = false;
  if (mode === stdAttack) {
    maxDamage = stdAttackValue;
  } else if (mode === specialMove) {
    maxDamage = specialMoveValue;
  }

  let oldEnemyHealth = currentEnemyHealth;
  let testDamage;
  function playerAttack() {
    const playerDamage = dealEnemyDamage(maxDamage);
    currentEnemyHealth -= playerDamage;
    testDamage = playerDamage
    pAttackAnimation();
    hasAttacked = true;
    checkEnd();
    endFight();
  }

  function enemyAttack() {
    const enemyDamage = dealPlayerDamage(enemyAttackValue);
    currentPlayerHealth -= enemyDamage;
    lifeCurrent.innerHTML = currentPlayerHealth;
    eAttackAnimation();
    hasAttacked = false;
    checkEnd();
  }

  function checkEnd() {
    if (hasAttacked) {
      attackBtn.disabled = true;
    } else if (!hasAttacked) {
      attackBtn.disabled = false;
    }
  }

  playerAttack();
  if (!isEnemyDead(oldEnemyHealth ,testDamage)) {
    setTimeout(enemyAttack, 750);
  } else {
    hasAttacked = false;
    checkEnd();
    return;
  }
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
