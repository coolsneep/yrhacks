var nameInput,playButton
var names = "fakeName"
var Countries = ["America","Canada"]
var guesses = 0
var score = 0
var gameState = 0
var value
var randomCountries
var temp
var guessed = 0
function setup(){

database = firebase.database();
createCanvas(800,800)
frameRate(30)
nameInput = createInput("");
nameInput.position(300,300)
nameInput.input(load);
playButton = createButton("click to play")
playButton.position(400,300)
playButton.mousePressed(submitName)
}
function draw(){
//begin
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
    if(guessed<11){
    randomCountry()
    gameState = 1.5
    
    temp = createInput("")
    temp.position(100,100)
    temp2 = createButton("submit")
    temp2.position(300,100)
    temp2.mousePressed(check)
      }
    }

if(gameState === 1.5){
    if(guesses<=3){
    
    
    text(guesses,500,500)
    console.log("waiting")
    
}
else{
    gameState = 1
    
}
//end
}
if(gameState === 2){
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

    playerTimeRef.on('value', (data) => {
        value = data.val();
        text(value,400,400)
    
    
})
}

function check(){
    console.log(temp.value())
    if(temp.value() === randomCountries){
        console.log("wow")
        guesses = 0
        clear()
        gameState = 1
        guessed +=1
        console.log(guessed)
    }
    else{
        guesses +=1
        
    }
    if(guesses === 3){
        guessed +=1
        guesses = 0
    }
}