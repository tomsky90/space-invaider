export default class Missile {
  constructor(positionLeft, positionTop, boardElement ) {
    this.positionLeft = positionLeft
    this.positionTop = positionTop
    this.boardElement = boardElement 
    
    this.element = document.createElement('div')
    this.interval = null
  }
  init(){
    this.element.classList.add('missile')
    this.boardElement.appendChild(this.element)
    this.element.style.left = `${this.positionLeft + 20}px`
    this.element.style.top = `${this.positionTop - 50}px`
    this.interval = setInterval(() => {
      this.element.style.top = `${parseInt(this.element.style.top) - 1}px `
      if(this.element.offsetTop < -20) {
        this.element.remove()
        clearInterval(this.interval) 
      }
    }, 5)
  }
}