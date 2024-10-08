// // /// ++++++++ object ++++++ ///
// //   // Singleleton
// //     //  Another format Object.create

// //      const mySum=Symbol("key1");

// //    const JsUser ={
// //  name:'ujjwal',
// //  phone:'9762733751',
// //  [mySum]:"mykey1",// access the symblo in oject usin the squar [] bracket .
// //     // array in obect
// //  arr:[1,2,3,4],

  
// //  // create another object inside the object
// //      place:{
// //    Home:'Nepla',
// //    Current:'LuckNow'
// //  }
// //    }
// //     // how to acces the keys and value from the oject .
// //     // simple way to acces the object
// //     //  console.log(JsUser.name)

// //       // another ways  to acces the object
// //       // acces the array in normal way  

// //       // console.log(JsUser.arr[3]);

// //        //acces the array in oject useing the bracket notation

// //       //console.log(JsUser['arr'][2]);
// //       // access the symbol
// //       //console.log(typeof JsUser[mySum])



// //        // chnange the value in object
// //        JsUser.name="Kiran"

// //        // freeze the object so that can't change the valuue in object
// //         // Object.freeze(JsUser.name);
// //         JsUser.name='ujjwal'
// //         console.log(JsUser) 



// //         // deceral the function in Object 
// //         //  JsUser.greeting=function(){
// //         //  console.log("Hello JS user")
// //         //  }
// //         //   console.log(JsUser.greeting());

// //           JsUser.greetingone=function(){
// //             // .this is use to acces the which one oject that you want to refrence any value .
// //             console.log(`Hello JS user, ${this.name}`);
// //             }
// //              console.log(JsUser.greetingone());


// //            //// always use (.) to acces object values.///
           
           



// //                ///    +++++ object parts 2  +++++++///
  
// // Singleton object
//  //const tiinderuser={}

//  // NON single Object
//  // const tinderuser= new Object={}


//   const tinderuser={} //empty object
//   // //  addinng keys and value in empty object

//    tinderuser.id='1234qw'
//      tinderuser.name='ujjwal'
//      tinderuser.email='ujjwalagihre12@gamil.com'
//      tinderuser.isLoggedIn= false
     

//      // object inside object//

//     //  const regularUser={
//     //   Location:'LuckNow',
//     //   // another object
//     //   fullname:{
//     //      userName:'kiran',
//     //      lastName:'Gaihre',
//     //   }
//     //  }
//     //  console.log(regularUser.fullname)
//     //  console.log(regularUser.fullname.userName)

//      /// Combine the two oject in one //
//      const obj1={
//       1:'a',
//      2:'b',
//      3:'c'
//      }
//       const obj2={
//      4:'d',
//      5:'e',
//      6:'g'
//       }
    
//      //  const obj3={obj1,obj2}
//      // the Object.assign({},obj1,obj2) is use to combine the two object 
//      ///  const obj3=Object.assign( {} ,obj1,obj2)
//      const obj3={...obj1, ...obj2}
//        console.log(obj3);
        

//         const arr=[
//             { id:'1',
//               name:'ujjwal'
//             }
//             // object inside  the arrary
//             , 
//             {
//               class:'12',
//               dper:'Bca',
//              }
//         ]
//         // acces aoject inside the array

//          arr[1].id
//          console.log(tinderuser);
//          // Object.keys();
//          //access the keys feom the tinderuser also change into array for using loop like .map and other 
//           console.log(Object.keys(tinderuser));
//           console.log(Object.values(tinderuser));
//           // to find the length of array or any keys and values 
//           console.log(Object.keys(tinderuser).length);
//   // ask the object where the value is  in  the object or not.
//   // by uisng the .hasOwnProperty(keys)
//           console.log(tinderuser.hasOwnProperty(isLoggedIn));



           ////  ++++++ last part +++  ///
           // Destructure ///
             
            const course={
 coursename:'Js Revison',
 price:'599',
 courseInstructor:"hitesh"
            }

// it use get the value of the object rather than use ing
 //course.coursename like this because if we want acces this value multiple time this code will 
 //not be good so use it const {keysname}=ibjectName

            const { courseInstructor}=course
            console.log(courseInstructor);
            
          //  Convert Object to an Array of Keys:
          const obj = { a: 1, b: 2, c: 3 };
// const keys = Object.keys(obj); 
// console.log(keys); // Output: ['a', 'b', 'c']

//Convert Object to an Array of Values:
// const obj = { a: 1, b: 2, c: 3 };
// const values = Object.values(obj);
// console.log(values); // Output: [1, 2, 3]

//. Convert Object to an Array of Key-Value Pairs:
// const obj = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(obj);
// console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]
