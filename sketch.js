var nameInput,playButton
var names = "unknown"
var Countries = ["United States","Argentina","Australia","Brazil","France" ,"Canada","South Africa","United Kingdom","China","India","Indonesia","Italy","Russia","Saudi Arabia", "South Africa","South Korea","Japan","Germany","Turkey"]
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
let fontBold
var correct = 0, wrong = 0
var map
var start =1000 
var seconds2
function preload(){
    fontBold = loadFont('kaushan-script/KaushanScript-Regular.otf');
    map = loadImage('unknown.png')
}
function setup(){

database = firebase.database();
createCanvas(windowWidth,windowHeight)
frameRate(30)
nameInput = createInput("");
nameInput.input(load);

playButton = createButton("click to play")
playButton.mousePressed(submitName)

nameInput.style('font-family', "Times New Roman")
playButton.style('font-family', "Times New Roman")
}   
function draw(){
//begin

if(gameState === 0){
    nameInput.position(windowWidth/3,windowHeight/2)
    playButton.position(windowWidth/3+200,windowHeight/2)
    fill("white")
    background(map)
    textFont(fontBold,30);
    text("Enter Your Name",windowWidth/3,windowHeight/2.3)
    
    
}
if (gameState === 0.5){
    clear()
    gameState =1
    temp = createInput("")
    temp2 = createButton("submit")
    temp2.mousePressed(check)
    temp.style('font-family', "Times New Roman")
temp2.style('font-family', "Times New Roman")
}
//play
if(gameState === 1){
    
    if(roundsPlayed<11){
    randomCountry()
    gameState = 1.5
    
    
    temp.position(windowWidth/16,windowHeight/3)
    temp2.position(windowWidth/16+150,windowHeight/3)
   
    
    
    }
    else {
        gameState=2
        
    }
    
    //else{
      //  gameState = 2
   // }
}

if(gameState === 1.5){
    if(guesses<4){
    fill("white")
    seconds = ceil(frameCount / 30)

    background(map)
    textFont(fontBold,40);
    text(`Your Fact Is: ${value}`,windowWidth/15,windowHeight-100)
    text(`Guesses made: ${guesses}`,windowWidth/1.5,850)
    text(`Number of rounds played: ${roundsPlayed}`,windowWidth/1.5,800)
    textFont(fontBold,20);
    text(`Wrong guesses ${wrong}`,windowWidth/15,windowHeight-400)
    text(`Right guesses ${correct}`,windowWidth/15,windowHeight-350)
    text(`score ${start -seconds-wrong*5+correct*5}`,100,200)
    fill("red")
    text(randomCountries,50,50)
    strokeWeight(10)
    stroke("red")
    point(50,50)
    // console.log(mouseX,mouseY)
}

//end
}
if(gameState === 2){
    temp.hide()
    temp2.hide()
    clear()
    background(map)
    textFont(fontBold,40);
    fill("white")
    text(`the game is finished your score is: ${start -seconds-wrong*5+correct*5}`,400,400) 
    seconds = ceil(frameCount / 30)
    seconds2 = start -seconds-wrong*5+correct*5
    leaderBoard = new leaderboards()
        leaderBoard.getLeaderInfo1()
        leaderBoard.getLeaderInfo2()
        leaderBoard.getLeaderInfo3()

        setTimeout(leaderboard,3000)
        gameState = 3
}
if(gameState === 3){

}
textFont(fontBold,40);
noStroke()
fill("white")
text(`Your name is: ${names}`,windowWidth-600,windowHeight/8)
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
    var countryRef = database.ref(randomCountries+'/fact1')

    Countries.splice(Countries.indexOf(randomCountries),1)
    countryRef.on('value', (data) => {
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
        correct+=1
        temp.value("")
    }
    else{
        guesses +=1

    }
    if(guesses===3&&roundsPlayed===10) {
        gameState = 2
        
    }
    else if(guesses === 3){
        gameState = 1
        
        wrong+=1
        roundsPlayed +=1
        guesses = 0
    }

}
function leaderboard(){
    leaderBoard.compare()
    text("Leaderboard",100,500)
   }
function keyPressed(){
if(keyCode === 13)
{
    check()
    
}

}