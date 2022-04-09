class leaderboards{
    constructor(){
 this.name = names
 this.times =seconds
       
       
 
       
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
         if(time1.time<=this.times){
         
           console.log(
           "First Place       Name: " + time1.name + "   Time: " + time1.time + " seconds"
           )
         }
         else{
         
           checker = 1
           console.log("First Place       Name: " + this.name + "   Time: " + this.times + " seconds")
           console.log("Second Place       Name: " + time1.name + "   Time: " + time1.time + " seconds")
           console.log("Third Place       Name: " + time2.name + "   Time: " + time2.time + " seconds")
           this.addplayerfirst()
           console.log("congrats you got a new highscore")
           return
         }
 //second place
         if(time2.time<=this.times){
                 
             console.log(
             "Second Place       Name: " + time2.name + "   Time: " + time2.time + " seconds"
             )
         }
         else{
         
             checker=2
             
            console.log( "Second Place       Name: " + this.name + "   Time: " + this.times + " seconds")
            console.log( "Third Place       Name: " + time2.name + "   Time: " + time2.time + " seconds")
            this.addplayersecond()
            console.log("congrats ur second on the global leaderboard")
            return
            
         }
         //third place
         if(time3.time<=this.times){
         
             console.log(
             "Third Place       Name: " + time3.name + "   Time: " + time3.time + " seconds"
             )
             console.log("sad u aint on the leaderBoard")
             
             
           }
           else{
           
            checker = 3
            console.log( "Third Place       Name: " + this.name + "   Time: " + this.times + " seconds")
            this.addplayerthird()
          console.log("yay you get the bronze medal for being third")
           }
         
     }
             
 }
 