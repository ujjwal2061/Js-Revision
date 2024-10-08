   //var c=300
    let a=20;
//   if (true){
//     let a=100
//  // block scope
//   const b=200
//    console.log("Inner:",a)
//   }
//   // gobal scope 
//    console.log(a)


   // nestest 
    function  one(){
         const username="Ujjwal"
          function two(){
            const website ="youtube"
            console.log(username)
          }
          //console.log(username)
           two()
    }
    // call the one function 
    // one() function is bigParents
     one()

      if(true){
        const username="ujjwal"
        if(username==="ujjwal"){
            const website="Youtube"
            /// console.log(username  +   website)
        }
        // can't not  console because it out of the bloc scope so
         ///console.log(website)
      }
     // console.log(username)
     /// ++++++++++++ Interssting ++++++  /////
     console.log(addOne(5))
      function addOne(num){
        return num + 1
      }
        console.log(addOne(5))
       

        // function can't be call bzc it call before the function runn so 
        // js read the line by line so(if you store the function in variable)
        //addTwo(5)
        const addTwo= function(num){
            return num +2
        }
        addTwo(5)