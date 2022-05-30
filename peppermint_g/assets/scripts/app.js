const baseBarValue = 100;
const stdAttackValue = 10;
const specialMoveValue = 15;
const enemyAttackValue = 12; //FAZER ESCALAR COM ENEMY LVL NO FUTURO

const stdAttack = "standard_attack"
const specialMove = "special_move"

let currentEnemyHealth = enemyHealthBar.value;
let currentPlayerHealth = playerHealthBar.value;
let currentPlayerMana = playerManaBar.value;

adjustBars(baseBarValue);
getNewEnemy("Lil'Shit", 1);

//JOGADOR NÃO PODE RECEBER UM HEAL MAIOR QUE A SUA VIDA MÁXIMA, ATUALIZAR AMANHÃ.
function winHeal() {
  notifExtra.innerHTML = "The player received a blessing, half of his life was restored!"
  currentPlayerHealth += parseInt(playerHealthBar.max * 0.5);
  playerHealthBar.value += parseInt(playerHealthBar.max * 0.5);
  lifeCurrent.innerHTML = currentPlayerHealth;
}

function endFight() {
  if(currentEnemyHealth <= 0 && currentPlayerHealth > 0) {
    notifWasKilled.innerHTML = "Lvl 1 Lil' Shit was killed!";
    winHeal();
    notifAppeared.innerHTML = "A new foe comes near!";
    setTimeout(getNewEnemy, 2500, "Sligthly Bigger Shit", 2);
    setTimeout(clearNotif, 2500);
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

attackBtn.addEventListener('click', attackHandler);
specMoveBtn.addEventListener('click', specialMoveHandler);