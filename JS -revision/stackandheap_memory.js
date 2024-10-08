// +++++++ Stack(Primitive) ,Heap(No-Primitive) +++++ ///

// let myname="ujjwal";
// let anothername=myname;
// anothername='Me'/// change it on the copy value not thee original value 

// console.log(myname);
// console.log(anothername);


let userOne={
    emali:"ujjwal@goole.com",
    upi: "user@ybl",
}

// get the original value in NON-Primitive 
let userTwo=userOne
userTwo.emali="kirsn@goole.com"
console.log(userOne.emali)
console.log(userTwo.emali);
  

