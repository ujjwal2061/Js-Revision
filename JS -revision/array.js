////     +++ array ++++++ //

// array is ReSize  in Js

//const myArr=[1,2,3,4,5,6,7,]
//    console.log(myArr[0]);
//     const mrArry2=new Array(1,2,3,4,5)

  // methods In Arrray //
     //.push() used to add value in last 
     //myArr.push(7,8);
     // console.log(myArr);
     //.pop() use remove the last value 

     // myArr.pop()

     // .join() is use to change the array to string?

    //  const newArr=myArr.join()
    //  console.log(myArr)
    //  console.log(newArr);
    //  console.log(typeof newArr);

     //slice and splice
  // const myn1=myArr.slice(1 ,3);

  //  console.log("A",myn1)

   // .splice() it Manuplite the oringal Value .

    //  const myarr2=myArr.splice(1,3)
    //  console.log(myarr2);

       //  ++++++++ array parts +++++++ //

 const heros=['thor' , 'Ironman','spiderman'];
 const dc=['superman','flash','batman'];

    /// in this array .push() inside the another arrary as a data.

        //   0        1        2           _________________3_______________  
   // it  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
  // heros.push(dc);
  // for access the elements inside the array of array
  //  console.log(heros[3][1]);

  //   .Concat() the two array in new array with new variable name .

  // const newheros=heros.concat(dc);
  // console.log(newheros);
  // Output-> [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

 // it like break thee glass spreate the  two array in one array[...arrName...arrNmae]


  // const all_new_heros=[...heros,...dc];
  // console.log(all_new_heros);

  //  in this case we use the .flat() where  to make one array in which
  // there is array inside array and array  just give the number inside the flat(number hooe much deep inside the array )

  //  const another_arr=[1,2,3,4,[5,6,7],8,[9,10,[11,12]]]
  //   const rea_arr=another_arr.flat(3)
  //   console.log(rea_arr)
  //   // to covert the any data in array  by using Array.from()

  //   console.log(Array.from("Ujjwal"))
  //   console.log(Array.from({name:"ujjwal"})) // use the key and value to covert  into array


    let score1=100
    let score2=200
    let score3=300
    // this (Array .of() use to cahnge the multiple data in array mean multiple variable at one time so. 
     console.log(Array.of(score1,score2,score3))