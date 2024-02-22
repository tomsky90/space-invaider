export default class Statistics {
  constructor(){
    this.level = 1;
    this.points = 0;
    this.totalPoints = 0;
    this.lives = 3;
  this.pointsDisplay = document.querySelector('.points')
      
  }
  
  getLevel() {
    return this.level
  } 
  
  levelUp() {
    return this.level+=1
  } 
  
  addPoints(points){
    return this.points += points
  }
  
  addTotalPoints(points){
    return this.totalPoints += points
  } 
  
  displayPoints(){
    this.pointsDisplay.textContent = this.points
  }
  
  takeOfLive(){
    return this.lives -= 1
  }
  
  getLives(){
    return this.lives
  } 
}