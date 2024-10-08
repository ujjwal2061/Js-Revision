const number=[1,2,3,4,5,6,7,8]
 // addin the 10 is each number 
//   const Newnumber=number.map((num) =>{
//    return   num+10
// })
//   console.log(Newnumber);

  // By forEach loop
//   const newNumber=[];
//  number.forEach((num) =>{
//   newNumber.push(num+10);
//  } )
// console.log(newNumber);

    //chain 

//  const newNumber= number.map((num) => num*10)
// .filter((num) => num>33)
//   console.log(newNumber);
    // using foorEach

  // first we create  Empty newArray to store the array after multiple the each number by 10
      const newNumber=[]
      number.forEach((num) => {
         newNumber.push (num*10)
      });
    // and store the new array in another array to find the num which is greater then 34 using the filter methods 
     const anothernumber= newNumber.filter((num)=>{
             return num >34
        })
      console.log(anothernumber);

      ////++++ Note-:
      // the filter() check the true or false condtions 
      