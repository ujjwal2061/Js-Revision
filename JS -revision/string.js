 /// +++ String +++///

 const name="Ujjwal"
  const repCount= 16
  // console.log(name+ repCount +" value");
 //  console.log(`Hello my name is ${name} and my repo count is ${repCount}`);

 /// this methods use to create String object
 // where it store in the key and value form like object
 // you acces the any value by given the key to the console.log(gameName[1]);

  const gameName=new String('ujjwal-gaihre');
   //console.log(gameName[1]);

   //.length is use to find the length of the string or other .

   //console.log(gameName.length)

   // toUperCase is method that change the string to upperCsae .also there lowerCase

   //console.log(gameName.toUpperCase());

   // .charAt() is use find the in what index the  what  value is store

   //console.log(gameName.charAt('4'));

   //.indexof is use to find the value store in which index

  // console.log(gameName.indexOf('w'));
 
  // .substring(starIndexNumber,endIndexNumber) this method  is use to subString the string 

const newString =gameName.substring(0,5);

// .slice(starIndexNumber,endIndexNumber) this method use slice the string by acces the indexValue of it the last number will not consider

const anotherSting=gameName.slice(3,5);

//console.log(newString);

console.log(anotherSting);

//.trim() this methos use trim the space in string

 const newStringOne="       ujjwal     "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 //.replace() use to replace the any string from old string with new one 

  const lastName="Gaihre"
  console.log(lastName.replace('h',''))

  //.split()  it retrun Array just use .splict() 
  // if you use the .split('');
   //console any word or char by using  this 
   
   /*
   const chars = str.split('');
    console.log(chars[8]);
    const words = str.split(' ');
    console.log(words[3]);
    */

  console.log(gameName.split('-'));
  