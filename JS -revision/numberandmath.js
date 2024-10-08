// // ++++++ Number and Maths  ++++++////
// const score=400
// //this simple console the scroe value 
// console.log(score)

// // this give specfic format to show  like this [Number:100]

// const balance= new Number(100)
// console.log(balance);

//  // Change the number into String by using the .toString method() and we can use any method of string.

//  console.log(balance.toString().length);

//  // .tofixed() use for points after the number like this (100.00) any fixed number u can give in tofixed(). 

//  console.log(balance.toFixed(2));

//   const hundreds=100000
//    // this  toLocaleString add (,) in number accoring US
//   console.log(hundreds.toLocaleString('en-IN'));



//        /// ++++++++++++++++++ Maths ++++++++++++++++++++ /////  
  
  //  .abs () change the  negative  value to postive value   just negative value 
  // console.log (Math.abs(-4));
  // .round () use get round number of points number like(4.6) 
  // it return the 5.
 // console.log(Math.round(4.6));
     
  //  +++++++++++++ Math.Random method +++++++++++ //
 // Math.random() return the value between the 0 and 1.

   console.log(Math.random ());

   // the +1 is use to avoid the number start from 0 
   // to start the number from 1.

   console.log((Math.random()*10) + 1)

   // Math.floor(Math.randomm () * by the number that will retrun to between that number )
   // look at the code down

   console.log(Math.floor(Math.random()*10) + 1)

   const min=10
   const max=20
   
   //(max-min+1) it defines the range you want the random number to fall in .
   //Adding 1 makes it inclusive of the maximum value.

  console.log  (Math.floor(Math.random() * (max-min +1))+ min)

  //+ min: Adjusts the result so that it falls between min and max.