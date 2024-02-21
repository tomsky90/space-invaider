export default class Statistics {
  constructor(){
    this.points = 0;
    this.lives = 3;
  this.pointsDisplay = document.querySelector('.points')
      
  }
  
  addPoints(points){
    return this.points += points
  }
  
  displayPoints(){
    this.pointsDisplay.textContent = this.points
  }
  
  takeOfLive(){
    return this.lives -= 1
  }
}