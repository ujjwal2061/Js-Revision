const userEmail=[]

// if (userEmail) {
//      console.log("Got  user email");
// } else{
//     console.log("Don't have user email")
// }

//falsy values
/*
 false ,0,-0,BigInt,0n,null,undefined,NaN,""
*/
// truthy value
/*
  "0" is ture value if inside the string
   'false' is true bzc it inside string
   "",
   [],->empty array
   {},->empty object
   function()->empty function
  */


   // checkinr the arrary

//    if (userEmail.length===0) {
//      console.log("Array is empty")
    
//    }


 // check the empty ={}
  const emptObj={}

   // check the object by access the keys the keys retrun in array format
   // so use the  lenght to see 
   // Always use (Object)
  if (Object.keys(emptObj).length===0) {
     console.log("Object is empty")
  }