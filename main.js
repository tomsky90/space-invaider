import Spaceship from './Spaceship.js';
import Enemy from './Enemy.js';
import Statistics from './Statistics.js'

class Game {
  constructor() {
    this.htmlCraft = document.querySelector('.craft');
    this.btnLeft = document.querySelector('.btn--left');
    this.btnRight = document.querySelector('.btn--right');
    this.fireBtn = document.querySelector('.btn--missile');
    this.boardElement = document.querySelector('.board');
    this.craft = new Spaceship(this.htmlCraft, this.fireBtn, this.boardElement);
    this.missilePositionInterval = null;
    this.enemyInterval = null;
    this.collisionInterval = null;
    this.enemies = [];
    this.stats = new Statistics();
  }

  start() {
    this.stats.displayPoints();
    this.craft.init();
    this.btnLeft.addEventListener('click', () => {
      this.craft.moveCraftLeft(this.htmlCraft);
    });
    this.btnRight.addEventListener('click', () => {
      this.craft.moveCraftRight(this.htmlCraft);
    });
    this.fireBtn.addEventListener('click', () => this.craft.fire());
    this.missilePositionInterval = setInterval(() => {
      this.checkPosition();
    }, 10);
    this.enemyInterval = setInterval(() => {
      this.generateEnemies();
    }, 3000);

    this.collisionInterval = setInterval(() => {
      this.checkCollision(); 
    }, 1);
  }

  generateEnemies() {
    const enemy = new Enemy(this.boardElement);
    enemy.init();
    this.enemies.push(enemy);
  }

  checkPosition() {
    this.craft.missiles.forEach((missile, index, arr) => {
      if (missile.element.offsetTop < -20) {
        arr.splice(index, 1);
      }
    });

    this.enemies.forEach((enemy, index, arr) => {
      if (enemy.element.offsetTop > window.innerHeight) {
        arr.splice(index, 1);
      }
    });
  }

checkCollision() {
  this.enemies.forEach((enemy, enemyIndex) => {
    this.craft.missiles.forEach((missile, missileIndex) => {
      if (this.isColliding(missile.element, enemy.element)) {
        this.handleCollision(missileIndex, enemyIndex);
      }
    });
  });


  this.enemies.forEach((enemy, enemyIndex) => {
  
      if(this.isColliding(enemy.element, this.craft.craft)){
  this.handleShipCollision()
      } 
    });
}


  isColliding(obj1, obj2) {
    const rect1 = obj1.getBoundingClientRect();
      
      const rect2 = obj2.getBoundingClientRect()
   
   
   
    return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    );
  }

  handleCollision(missileIndex, enemyIndex) {
    const missileElement = this.craft.missiles[missileIndex].element;
    missileElement.parentNode.removeChild(missileElement);

    const enemyElement = this.enemies[enemyIndex].element;
    enemyElement.parentNode.removeChild(enemyElement);

    this.stats.addPoints(10);
    this.stats.displayPoints();

    this.craft.missiles.splice(missileIndex, 1);
    this.enemies.splice(enemyIndex, 1);
  }

  handleShipCollision(enemyIndex) {
    console.log('game over')

    // You can perform other actions when the ship is hit by an enemy
    // For example, reduce health, trigger game over, etc.
    // this.stats.reduceHealth(10);
    // this.stats.checkGameOver();
  }
}

const game = new Game();
game.start();
