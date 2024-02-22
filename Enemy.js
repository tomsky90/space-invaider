export default class Enemy {
  constructor(boardElement, level){
    this.element = document.createElement('div')
    this.boardElement = boardElement
    this.level = level
    this.enemyIntetval = null
  }
  
  init(){
    this.element.classList.add('enemy')
    this.boardElement.appendChild(this.element)
    this.element.style.top = 0
    this.element.style.left = `${this.generateRandomPosition()}px`
    this.enemyIntetval = setInterval(() => {
      this.moveEnemy()
    }, 500)
  }
  
  generateRandomPosition(){
    const screenWidth = window.innerWidth
    return Math.floor(Math.random() * screenWidth - 50)
  }
  
  moveEnemy(){
  
    if (parseInt(this.element.style.top) <= window.innerHeight) {
  this.element.style.top = `${parseInt(this.element.style.top) + 5 + this.level}px`
  
       
    } else {
      this.element.remove()
      clearInterval(this.enemyIntetval)
    }
  }
} 