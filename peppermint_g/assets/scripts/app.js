let baseHealth = 100;
let baseMana = 100;
let currentEnemyHealth = enemyHealthBar.value;
let currentPlayerHealth = playerHealthBar.value;
let currentPlayerMana = playerManaBar.value;

adjustHealthBars(baseHealth);
adjustManaBar(baseMana);

currentPlayerHealth = 90;

lifeCurrent.innerHTML = currentPlayerHealth;
manaCurrent.innerHTML = currentPlayerMana;
