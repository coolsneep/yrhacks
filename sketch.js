var nameInput,playButton
var names = "fakeName"
var Countries = ["America","Canada"]
var guesses = 0
var score = 0
var gameState = 0


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
    
    var randomCountries= Countries[Math.floor(Math.random()*Countries.length)];
    var playerTimeRef = database.ref(randomCountries+'/fact1')
    playerTimeRef.on('value', (data) => {
        time1 = data.val();
    console.log(time1)
})
}
//end
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
