//// How the JS excuted in Behind the Sence //

/*
{}  code file 
 |-> Golbal Execution  it refere to (.this)
 |-> Function Execution
 |-> Eval Execution
*/
 

/* phase in JS 

 -> Memroy Creation Phase( it only allocated the memroy for the variable not logical)
 ->Execution phase

 let val1=10
 let vaalu2=5
 function addNum(num1,num2){
 let total =num1+num2
  return total
  }
  let result =add(valu1,valu2)
  let result1=add(10,20)



  1 -> Global Execution - it refere to  (.this)
  2->  Memroy Phase    
     -> Val1=undefined
     -> Val2=undefined
     -> addNum=defination(store the function) 
     ->result=undefined
     ->result1=undefind

   3-> Execution Phase
     ->val1=10
     ->val2=5  
     -> addNum = create new execution content
                 [new variable enviroment + Execution thread
                  and the Memroy phase will create again
                  and Execution
                  val1=undefiined
                  val2=undefined
                  total=undefined
                   -> Execution[
                   num=10
                   num=5
                   total=15
                   ]
                    it delete after the execution
                 ]
    -> result2={same as a addnum it create new execution content +thread}
  */
 // call Stack
 /*
 []
 []
 if you call one function insde  first function and again call the function third inside the function two which one will remove
 remove first in this if Fllow the LIFO 
 one(){
  two(){
  third(){
  }
  }
 }
 [ one()] it delete after the done there program
 [global exe]

 */

//  function one(){
//     console.log("one");
//  }
 
//  function two(){
//     console.log("two");
//  }
 
//  function three(){
//     console.log("three");
//  }
//  one()
//  two()
//  three()
 
 function one(){
    console.log("one");
    two()
 }
 
 function two(){
    console.log("two");
    three()
 }
 
 function three(){
    console.log("three");
 }
 one()
 two()
 three()