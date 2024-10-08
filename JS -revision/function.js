// ++++ Function in JS  ++++++ ///
  
 /*function function name(){
  code here 
 }*/
 // call the function
 /* Reference of Function 
  functionName only name for function Refercence 
  Execution of Function
   FunctionName() use small bracket to excuted the
    function.
 */
    //  //  give  the value inside function small bracket(is prarmeter) 
    //  function two_number(number1,number2){
    //    console.log(number1+number2)
    //  }
    //  // passing the value to the when the function call 
    //  // is argument.

     // function can store in variable 

 //   const result =  two_number(3,4)


//  function two_number(number1,number2){
//        //let result=number1 + number2
//        //return result
//         return number1 + number2    
//            // in the last we use return to return the output of the function
//        // when it store in the variable //
//     }
   
//      // function can store in variable 
//      // like this 
//  const result = two_number(3,4)
//   console.log('Result:',result);
 
//  function loginUserMesage(username){
//     if(username===undefined){
//         // if(!username) is same as the username===undefined (!is change to false if it is true and true to false )
//         console.log('Enter please username ');
//         return 
//     }
//     return `${username} just loogged in`
//  }
//  // when you don't pass any argument it return undefined  
//  console.log(loginUserMesage(''));
  

// user Shopping card //
// don't  how many argument can in function 
//... there dots mean restoperator  mean

 function addToCard(...num1){
 return num1
 }
  console.log(addToCard(200,300,400))


  // how  too pass object into function///
  const user={
    name:"ujjwal",
    pricebook:200
  }
   function handObject(// the reason of give aanyobject is that any object can pass 
    anyoject){
  console.log(`Username is ${anyoject.name} and price is ${anyoject.pricebook}`)
   }
    //handObject(user);
 handObject({
    name:'kiran',
    pricebook:199
 })


 //pass the array in function
   const myNewarray=[200,300,400]
    function retrunSecoondVlaue( // this is user defiend  paramemter name 
        getarray){
            // look which value is return so then return it the paramenter not fuunctionName 
        return getarray[1]

    }
     console.log(retrunSecoondVlaue(myNewarray))