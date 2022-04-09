var nameInput,playButton
var names = "fakeName"
var Countries = ["Afghanistan","America","Canada","South Africa","Ukraine","China","India","Taiwan","Japan","France","Germany","Spain"]
var guesses = 0
var score = 0
var gameState = 0
var value
var randomCountries
var temp,temp2
var roundsPlayed = 0
var seconds;
var time1;
var time2;
var time3
var pos1, pos2,pos3
var leaderBoard
var checker
function setup(){

database = firebase.database();
createCanvas(800,800)
frameRate(30)
nameInput = createInput("");
nameInput.position(300,300)
nameInput.input(load);
playButton = createButton("click to play")
playButton.position(500,300)
playButton.mousePressed(submitName)
}   
function draw(){
//begin
text(names,600,100)
if(gameState === 0){
    fill("black")
    background('#355070')
    text("Enter Your Name",300,200)
    
    
}
if (gameState === 0.5){
    clear()
    gameState =1
}
//play
if(gameState === 1){
    
    if(roundsPlayed<11){
    randomCountry()
    gameState = 1.5
    
    temp = createInput("")
    temp.position(100,100)
    temp2 = createButton("submit")
    temp2.position(300,100)
    temp2.mousePressed(check)
    
    
    }
    else {
        gameState=2
        console.log('peepee')
    }
    
    //else{
      //  gameState = 2
   // }
}

if(gameState === 1.5){
    if(guesses<4){
    background('#355070')
    
    text(`Your fact is: ${value}`,400,400)
    text(`Guesses made: ${guesses}`,400,450)
    text(`Number of rounds played: ${roundsPlayed}`,400,500)
    
}

//end
}
if(gameState === 2){
    temp.hide()
    temp2.hide()
    clear()
    background("yellow")
    

    text("the game is finished your score is: "+score,400,400) 
    seconds = ceil(frameCount / 30)

    leaderBoard = new leaderboards()
        leaderBoard.getLeaderInfo1()
        leaderBoard.getLeaderInfo2()
        leaderBoard.getLeaderInfo3()

        setTimeout(leaderboard,3000)
        gameState = 3
}
if(gameState === 3){
    console.log("done")
}
}


function submitName(){
    if(/^[A-Za-z]*$/.test(names)){
        gameState = 0.5
        playButton.remove()
        nameInput.hide()
       
      }
      else{
        console.log("Invalid name contact 416 416 416 to express your disapointment")
      }
}

function load(){
    names = this.value()
  }
function again(){
    window.location.reload();
}

function randomCountry(){
    randomCountries= Countries[Math.floor(Math.random()*Countries.length)];
    var playerTimeRef = database.ref(randomCountries+'/fact1')

    Countries.splice(Countries.indexOf(randomCountries),1)
    playerTimeRef.on('value', (data) => {
        value = data.val();
        text(`Your fact is ${value}`,400,400)
    
    
})
}

function check(){
    if(temp.value().split(/\s/).join('').toLowerCase() === randomCountries.split(/\s/).join('').toLowerCase()){
        guesses = 0
        clear()
        gameState = 1
        roundsPlayed +=1
    }
    else{
        guesses +=1

    }
    if(guesses===3&&roundsPlayed===10) {
        gameState = 2
        
    }
    else if(guesses === 3){
        gameState = 1
        console.log("loss")
        roundsPlayed +=1
        guesses = 0
    }

}
function leaderboard(){
    leaderBoard.compare()
   }