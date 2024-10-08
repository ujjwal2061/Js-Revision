/// Imediately Invokedd Function Expressions (IIFE)

// IIFE ()use this first then write function 
// Reminder write the function inside the (
// this small bracket to run function fastvwithout calling the function
//)
/// Name  IIFE
 (function chai(){
    console.log(`Db CONNECTED`)
 })();
 /// use ; code to end the first code function

// it use remove the Global scope poplution from the code 
// and run code imeditaley 

 (
 // simple IIFE
    (name)=>{
        console.log(`DB CONNECT TWO ${nmae}`)
    }
 )(Ujjwal)