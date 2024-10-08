// data types in js 
/*
 . number
 . bigint
 . string =>""
 . boolean => true/false
 . null => standalone value// type of it is object 
 . undefined => value not define
 . symbol => unique
*/
// object


 // conversion of data type
  // let score=33
  //console.log(typeof score);

   //let valueInNumber =Number(score);
   //console.log(valueInNumber)   
   
   // "33"=>33
   // "33abc" => NaN not a number
   // true => 1
   // false => 0
  // let isLoogedIn=0
  // let booleanInLOgged =Boolean(isLoogedIn)
 //console.log(booleanInLOgged)
     //"" => false
     // "ujwal" mean string value retrun in boolean => true

                     /**********  Operations ********/

  // let value =3 
  // let negvalue= -value       
  // console.log(negvalue);
                
// console.log("1"+2)
// console.log("1"+2+2)
// console.log((1+2)+"2")


//  console.log(+true)
//  console.log(+"");

 //  **** perfix and postfix operator ***** // read it on MDN.com

 /// Summary of data type 
   
 // Primitive Data Type.
 /*
  7 types: String ( call by value .coping the value )
  .Number
  .Boolearn
  .null
  .undefined
  .Symbol
  .BigInt
  */

  // Refercence (Non primitive)
  //Array ,Objects,Functions
 const names=['ujjwal','kiran','Ram']
 let myObj={
  name:"Ujjwal",
  age: 20,
 }

  /* Is Java Script is Dynamic language or Static language

    The Java Script is Dynamic language bcz it does not check the types of 
    variables until the program is running .

  */
 
 //null => data type is Object //

  const id=Symbol('123');
  const anotherId=Symbol('123');
  console.log( id== anotherId);

  const bigNumber=2345678912901200n
  