import Missile from './Missile.js';

export default class Spaceship {
  constructor(craft, fireBtn, boardElement){
    this.craft = craft
    this.missiles = []
    this.fireBtn = fireBtn
    this.boardElement = boardElement
  } 
  init(){
    this.craft.style.position = 'absolute';
    this.craft.style.bottom = '20px';
    this.craft.style.left = '50%';
    this.craft.style.transform = 'translateX(-50%)'
  } 
  
  fire(){
    const craftLeft = this.craft.getBoundingClientRect().left
    const craftTop = this.craft.getBoundingClientRect().top
    this.missile = new Missile(craftLeft, craftTop, this.boardElement)
    this.missile.init()
    this.missiles.push(this.missile) 
  }
  
  moveCraftLeft(craft ){
    const currentPosition = craft.getBoundingClientRect() 
    if (currentPosition.left > 20) {
   const newX = currentPosition.left - 5
         craft.style.left = `${newX}px`
    }
    return
    
  }
  
  moveCraftRight(craft) {
    const windowWidth = window.innerWidth
      const currentPosition = craft.getBoundingClientRect();
      if(currentPosition.right <= windowWidth - 20) {
const newX = currentPosition.right - 5
        craft.style.left = `${newX}px`
      }
      return
  
    }
} 