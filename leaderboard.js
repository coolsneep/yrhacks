class leaderboards{
    constructor(){
 this.name = names
 this.times =seconds2
       
       
 
       
    }
 
 //    update(){
     addplayerfirst(){ 
         database.ref("Times/first").set({
         name: this.name,
         time: this.times
     
   });}
   addplayersecond(){ 
     database.ref("Times/second").set({
     name: this.name,
     time: this.times
 
 
 });}
 addplayerthird(){ 
     database.ref("Times/third").set({
     name: this.name,
     time: this.times
 
 });}
 
 getLeaderInfo1() {
         var playerTimeRef = database.ref('Times/first')
             playerTimeRef.on('value', (data) => {
                 time1 = data.val();
             
         })
         
     
 }
 getLeaderInfo2() {
         var playerTimeRef = database.ref('Times/second');
         playerTimeRef.on("value", (data) => {
             time2 = data.val();
            
             
         })
         
     }
 getLeaderInfo3() {
         var playerTimeRef = database.ref('Times/third');
         playerTimeRef.on("value", (data) => {
             time3 = data.val();
         })
     }
 
 compare(){
 //first place
 textFont(fontBold,40);
fill("white")
         if(time1.time>=this.times){
         
           text(
           "First Place       Name: " + time1.name + "   Time: " + time1.time + " score",100,600
           )
         }
         else{
         
           checker = 1
           text("First Place       Name: " + this.name + "   Time: " + this.times + " score",100,600)
           text("Second Place       Name: " + time1.name + "   Time: " + time1.time + " score",100,700)
           text("Third Place       Name: " + time2.name + "   Time: " + time2.time + " score",100,800)
           this.addplayerfirst()
           text("Congrats you got a new highscore",200,900)
           return
         }
 //second place
         if(time2.time>=this.times){
                 
             text(
             "Second Place       Name: " + time2.name + "   Time: " + time2.time + " score",100,700
             )
         }
         else{
         
             checker=2
             
            text( "Second Place       Name: " + this.name + "   Time: " + this.times + " score",100,700)
            text( "Third Place       Name: " + time2.name + "   Time: " + time2.time + " score",100,800)
            this.addplayersecond()
            text("Congrats you're second on the global leaderboard",200,900)
            return
            
         }
         //third place
         if(time3.time>=this.times){
         
             text(
             "Third Place       Name: " + time3.name + "   Time: " + time3.time + " score",100,800
             )
             text("Sad you are not on the leaderboard",200,900)
             
             
           }
           else{
           
            checker = 3
            text( "Third Place       Name: " + this.name + "   Time: " + this.times + " score",100,800)
            this.addplayerthird()
          text("Yay, you get the bronze medal for being third",200,900)
           }
         
     }
             
 }
 