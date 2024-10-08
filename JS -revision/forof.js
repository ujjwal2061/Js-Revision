// for of 

//["","",""]
// [{},{},{}]


// const arr=[1,2,3,4]


/*
the for of loop 
inside the looop you will  decaler any variable and give the variable name that 
you decaler outside the loop then it will print the result  
*/
// For Example->
// for (const value of arr) {
//     console.log(value);
    
    
// }


// check the wheen the loop find space  and break
// const greeting="Hello word"
// for (const greet of greeting) {
//     if(greet==" "){
//         break;
//     }
//     console.log(greet);
    
// }

   
//    ///++++Maps++++///
//     const map=new Map()
//     map.set('NP',"Nepal")
//     map.set('IN',"India")
//     map.set('USA',"United Staes of America")

//     // console.log(map);
//     // to get the any map set value use keys inside the .get('keyvalue')
//     //console.log(map.get('NP'))

//     //  loop in map
//     // to print the value and leys ussing the forOF loop 
//   for (const [key,value] of map) {
//      console.log( key,'->' ,value );
//   }    


  //Object in loop  using forin loop
   

  // to get the key of object 
//   const myObject={
//     'game1':"NFS",
//     'game2':"Spiderman",
//   }
//    for (const key in myObject) {
//     console.log(`${key}`);
//     //  console.log(myObject[key]);
     
//    }
// //    /// this code is for acces the value of Oject 
//    const myObject={
//     'game1':"NFS",
//     'game2':"Spiderman",
//   }
//    for (const key in myObject) {
//     console.log(`${key} game number: ${myObject[key]}`);
//    }


    /// this is anotherr code  for acces the value of Object  
    // const myObject = {
    //     'game1': "NFS",
    //     'game2': "Spiderman",
    // };
    
    // const values = Object.values(myObject);
    // for (const value of values) {
    //     console.log(`Game: ${value}`);
    // }
    


    // Array in loop
 // acces the both value and key in array

    // const program=["js","rb","py","java","cpp"]
    // for (const key in program ) {
    //     console.log(`${key} :${program[key]} `)
    // }

    // Most of time forin loop use in the oject
    // And for Array we use forof loop 


    /// for each loop 
    // inside the array you can use any paramenter name just like {element,items values or other }
    // also you can print it 
    // const coding =["js","ruby","java","python"]
    //   coding.forEach(elment => {
    //      console.log(elment);
    //   });
      // add new elment in arr
      // Notes-: 
        // To add any elment in array you have to console.log it in array by makeing new arraay and
        // using [... arrayname,"elemtname"]
    //   const coding =["js","ruby","java","python"]

    //   //  const updateCoding=[...coding,"c++"]
    //   //  console.log(updateCoding);
       

    //    coding.forEach((items,index ,arr)=>{
    //  console.log(items,index,arr);
   
    //    })



     // for Each doesnot return any value 

    //  const mycoding=[
    //   {
    //   name:"Neplai",
    //   country:"Nepal",
    //  },
    //  {
    //   name:"Hindi",
    //   country:"India",
    //  },
    //  {
    //   name:"English",
    //   country:"USA",
    //  }
     
    // ]
    //  mycoding.forEach( (element)=>{
    //  console.log(element.name);
    //  })



     // value cannot chnage
    // const coding =["js","ruby","java","python"]
    //  const values= coding.forEach(  (items)=>{
    //  console.log(items)
    //   return items
    //  })
    //   console.log(values)

 /// the filter((values)=> conditions to check)
 // and print it..
  //   const myNUms=[1,2,3,4,5,6]
  //    const num=myNUms.filter( (nums)=> nums >4  )
  //  console.log(num);
 

  /// to  print the value by using the {} you have to  retrun the value 
  // return num >2 // retrun --conditions--
   // looks this code for better understand-- 
    //const myNums=[1,2,3,4,5,6]
//    const NewNums=myNums.filter( (num)=>{
//     return num >2 
//    })
//  console.log(NewNums);

 // In the forEach loop  to retrun any value or any conditions 
 // you have to create NewArr and push the the num inside the NewArr
 // By  using the if conditions
 //in the first array use .forEach loop annd.push (num)
 // console.log("the new array")
//  const myNums=[1,2,3,4,5,6]
//  const  Newarr=[]
//   myNums.forEach((num) =>{
//     if (num>2) {
//        Newarr.push(num)
//     }
//   })
//  console.log(Newarr)