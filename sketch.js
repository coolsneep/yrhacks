var nameInput,playButton
var names = "unknown"
var Countries = ["United States","Argentina","Australia","Brazil","France" ,"Canada","South Africa","United Kingdom","China","India","Indonesia","Italy","Russia","Saudi Arabia", "South Africa","South Korea","Japan","Germany","Turkey"]
var guesses = 0
var guessedCountry = []
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
createCanvas(2660,1360)
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

    nameInput.position(2660/3,1360/3)
    playButton.position(2660/3+200,1360/3)
    fill("white")
    background(map)
    textFont(fontBold,30);

    textAlign(CENTER);
    textSize(50)
    text("rules:",2660/8,1360/2.3);
    textFont(fontBold,23);
    text("To start the game, enter your name an click on play",2660/8,1360/2.3+40);
    text("You will be given a fact",2660/8,1360/2.3+80);
    text("You must enter the country that it describes",2660/8,1360/2.3+120)
    text("You have 3 tries to guess the correct country",2660/8,1360/2.3+160)
    text("After each round, the location of the country will appear on a map",2660/8,1360/2.3+200)
    text("You will do this for 10 different random countries",2660/8,1360/2.3+240)
    text("You will receive a score based on your performance",2660/8,1360/2.3+280)
    textAlign(LEFT);

    textFont(fontBold,30);
    textSize(60)
    text("Enter Your Name",2660/3,1360/4)


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
    
    
    temp.position(2660/16,1360/3)
    temp2.position(2660/16+150,1360/3)
   
    
    
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
    text(`Your Fact Is: ${value}`,2660/15,1360-100)
    text(`Guesses made: ${guesses}`,2660/1.5,850)
    text(`Number of rounds played: ${roundsPlayed}`,2660/1.5,800)
    textFont(fontBold,20);
    text(`Wrong guesses ${wrong}`,2660/15,1360-400)
    text(`Right guesses ${correct}`,2660/15,1360-350)
    text(`score ${start -seconds-wrong*5+correct*5}`,100,200)
    // text(`${mouseX} ${mouseY}`,400,400)
    fill("red")

    for(var i = 0;i<guessedCountry.length;i++){
        textSize(32)
        if(guessedCountry[i]==="Canada"){
        noStroke()
        text(guessedCountry[i],500,200)
        strokeWeight(10)
        stroke("red")
        point(500,200)
        }
        if(guessedCountry[i]==="United States"){
            noStroke()
            text(guessedCountry[i],500,350)
            strokeWeight(10)
            stroke("red")
            point(500,400)
            }
        if(guessedCountry[i]==="Turkey"){
            noStroke()
            text(guessedCountry[i],1500,380)
            strokeWeight(10)
            stroke("red")
            point(1500,380)
            }
        if(guessedCountry[i]==="Japan"){
            noStroke()
            text(guessedCountry[i],2272,380)
            strokeWeight(10)
            stroke("red")
            point(2272,380)
            }
        if (guessedCountry[i]==="Argentina"){
            noStroke()
            text(guessedCountry[i],900,900)
            strokeWeight(10)
            stroke("red")
            point(900,900)
        }
        if (guessedCountry[i]==="Australia"){
            noStroke()
            text(guessedCountry[i],2250,900)
            strokeWeight(10)
            stroke("red")
            point(2250,900)
        }
        if (guessedCountry[i]==="Brazil"){
            noStroke()
            text(guessedCountry[i],930,750)
            strokeWeight(10)
            stroke("red")
            point(930,750)
        }
        if (guessedCountry[i]==="France"){
            noStroke()
            text(guessedCountry[i],1300,280)
            strokeWeight(10)
            stroke("red")
            point(1300,280)
        }
        if (guessedCountry[i]==="Italy"){
            noStroke()
            text(guessedCountry[i],1400,350)
            strokeWeight(10)
            stroke("red")
            point(1400,350)
        }
        if (guessedCountry[i]==="China"){
            noStroke()
            text(guessedCountry[i],2050,400)
            strokeWeight(10)
            stroke("red")
            point(2050,400)
        }
        if (guessedCountry[i]==="South Africa"){
            noStroke()
            text(guessedCountry[i],1450,900)
            strokeWeight(10)
            stroke("red")
            point(1450,900)
        }
        if (guessedCountry[i]==="United Kingdom"){
            noStroke()
            text(guessedCountry[i],1270,240)
            strokeWeight(10)
            stroke("red")
            point(1270,240)
        }
        
        if (guessedCountry[i]==="India"){
            noStroke()
            text(guessedCountry[i],1840,500)
            strokeWeight(10)
            stroke("red")
            point(1840,500)
        }
        if (guessedCountry[i]==="Germany"){
            noStroke()
            text(guessedCountry[i],1300,260)
            strokeWeight(10)
            stroke("red")
            point(1300,260)
        }
        if (guessedCountry[i]==="Russia"){
            noStroke()
            text(guessedCountry[i],1900,100)
            strokeWeight(10)
            stroke("red")
            point(1900,100)
        }
        if (guessedCountry[i]==="South Korea"){
            noStroke()
            text(guessedCountry[i],2200,380)
            strokeWeight(10)
            stroke("red")
            point(2200,380)
        }
        if (guessedCountry[i]==="Indonesia"){
            noStroke()
            text(guessedCountry[i],2100,700)
            strokeWeight(10)
            stroke("red")
            point(2100,700)
        }
        if (guessedCountry[i]==="Saudi Arabia"){
            noStroke()
            text(guessedCountry[i],1600,500)
            strokeWeight(10)
            stroke("red")
            point(1600,500)
        }
        
    }


    
    
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
text(`Your name is: ${names}`,2660-600,1360/8)
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
        guessedCountry.push(randomCountries)
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
        guessedCountry.push(randomCountries)
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
