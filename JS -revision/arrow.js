//  /// +++  Arrow Function ++++ ///

//  const user={
//     username:"ujjwal",
//     price:999,
//      welcomeMessage: function (){
//          console.log(`${this.username},Welcome to website`)
//      }
//  }
  /// this console return the empty object value
  // console.log(this)

//    function chai(){
//     // this. can't use in function 
//     let username="ujjwal"
//     console.log(this.username);
//    }

const chai=()=>{
     let usernmae="ujjwal"
     console.log(this.usernmae);
}

 chai()
 //// this is  basic arrow function use case 
//    const addTwo=(num1,num2)=>{
//  return num1 + num2
//   }
//    console.log(addTwo(1,5))


/*
 Reminder  using the {} this bracket you have to retrun the value 
 //
 const addTwo=(num1,num2)=>{
//  return num1 + num2
//   }
//    console.log(addTwo(1,5))
 if use were using like his 
 const addTwo=(num1,num2)=>(num1 + num2)
 you don't have to use the return value 
 this will use iin React app in every arrow function 
*/ 

/// this also another way to use arrow function
// const addTwo=(num1,num2)=> num1 + num2
//  console.log(addTwo(1,5))

 /// how to retrun object 
 const addTwo=(num1,num2)=> 
    ({username: "ujjwal",
     last_Name:"Gaihre"
 })
 console.log(addTwo(1,5))