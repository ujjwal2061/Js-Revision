/// Dates
 /// Date is Object .

 //let myDate =new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toDateString);
 
 //let myCreateDate1=new Date ("01-14-2023")
//  let myCreateDate=new Date(2024 ,0,12 ,3,5);
//   console.log(myCreateDate.toDateString);
//  console.log(myCreateDate1);
  
  //Times
  // similar to .new Date ()
   let date= Date.now()
   // most use in hotel sector which one book first 

   // console.log(myTimeStap);

   //.getTime () is methods to get time of that days. 

   //console.log(myCreateDate1.getTime())

    // how to convert in second (Multiple by 1000 and use Math.Floor also)

    /* there many methods to get any time form .new Date() like :-
    let newDate= new Date()
    console.log(newDate)
    console.log(newDate.getMonth());
    .getDay()
    .getMonth().
    and many more .
    */
    // const seconds=Math.floor(date.getTime()/1000)
    // console.log(seconds)
    

    const newDate= new Date()
     newDate.toLocaleDateString('default',{
        weekday:"long",
    
     })
 console.log(newDate);
