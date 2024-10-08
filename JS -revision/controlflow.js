// if 
/* (the condtion should true inside this ){
//  before the code runner inside the if scope
}*/
// const temperature=41
//  if (temperature==41){
//     console.log("IS less than 50")
//  }else{
//     console.log("temperature")
//  }

  /*< less than 
  <  greater than  
  <= check the two condtion 
  >=
  ==  Check Equal 
  != Not Equal
  === is check the type of variable
  !==
  */



//    const score=200
//     if(score>100){
//         const power="fly"
//         console.log(`User power ${power}`);
//     }
//     console.log(`User power ${power}`);


 // short hand notiaton
const blance=1000
//   if(blance>5000) console.log("test");
 //don't use this code in same line to check the condtion without useing the {} 


  //Nested Conditions
//   if (blance <500){
//     console.log("Less than 500")
//   } else if(blance<750){
//     console.log("Less than 750")
//   }else if ( blance < 900){
//    console.log("Less than 900")
//   } else{
//     console.log("Greate than 1000");
//   }



const userLogin=true
const debitcard=true
const loginFromGoogle=false
const gmailcom=true
 if (userLogin && debitcard){
     console.log("Allow to buy");
 }
 if(loginFromGoogle || gmailcom){
    console.log("User logged in")
 }
 // NUllish Coalescing Operator (??): null underfined


 let valu1;
// valu1=5 ?? 10
// check the first value if it not then check the second value . 
// it only woork in null and undefined 
// it use to return the value if the value does't return so  it retrn the null
 valu1=null ?? 10
 console.log(valu1);
 

 // Terninary Operator 
 //  condition ? true :false
  const ice=100
 ice <=30 ? console.log("less than 30"):console.log("more than 30");