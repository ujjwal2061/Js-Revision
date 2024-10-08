//  const myNumber=[1,2,3,4,5,6,7,8,9]
//  let firstvalu=100;
//   const total= myNumber.reduce( (acc ,currval) =>{
//     console.log(`Acc:${acc} and :${currval}`)
//  return acc+currval
//   },firstvalu) 
//   console.log(total);
  

  // this using  in shopping card where the  user slected the multiple items and find total of the items
  /// this can be use to find the total sum of array 

  //  for array 
   const shopingcard=[
    {
        itemName:"js coures",
        price:299
    },
    {
        itemName:"moblie coures",
        price:999
    },
    {
        itemName:"C++ coures",
        price:599
    }
   ]
  
     // const priceToPlay=shopingcard.reduce( ( acc,items)=>acc +items.price,0)
     const priceToPlay=shopingcard.reduce((acc ,items)=>{
     if (typeof items.price=="number") {
     acc=acc+items.price
     }
     return acc;
     },0);
     console.log(`Total price is :${priceToPlay}`);
     