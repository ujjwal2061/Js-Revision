// // //  /// for 
// // //          //condition check therre// the code move to the console.log when it check the condition// if true then it retrun to the increment  stage //
                   
// // // for (let i = 0; i < 10; i++) {
// // //     const element = i;
// // //      if (element==5) {
// // //         console.log("The 5 is best number")
// // //      }
// // //     console.log(element);
// // // }


// // for (let i = 0; i < 10; i++  ){
// //    console.log(`Inner loop value ${i}`);
// //    for(let j=1; j<10;j++) {
// //    // console.log(`Outer loop value is ${j}`);
// //   console.log(i + '*' + 'j' + '=' +i*j)   
// // } 
// // }


// const mrArr=[1,2,3,4,5]
//  for (let i = 0; i < mrArr.length; i++) {
//     if (i=3){
//     const element = mrArr[i];
//     console.log(element);
//     // break to the loop when it match the conidtion
//     break;
//     }  
//  }



  //{// break and continue }

  for (let index = 1; index <=20; index++) {
    if (index==6) {
        console.log("5 is find");
        // break use to move to from the scope of the condition
      //break;
      // coutinue after the value match withh  condition 
      continue;
    }
   console.log(`value of i ${index}`);

  }