'use strict';

// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function,
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE??
// - Refactor using a Higher Order Function
// - Do it with a RegEx! (a 2 line solution is possible)


// let string = "Love";
let string1 = 8;

// function doubleChar(string) {
//   let newString = '';
//   for(var i = 0; i < string.length; i++){
//     console.log(newString = newString + string[i] + string[i]);
//     // console.log(newString);
//   }
//   console.log(newString);
//   return newString;
// }

function doubleChar(string){
  if(typeof(string) !== 'string'){
    console.log("Ruh roh! That isn't a string!");
    return "Ruh roh! That isn't a string!" ;
  }

  let array = string.split('');
  console.log(array);
  let doubledArray = [];
  let doubledString;
   array.map(function(element){
    // console.log(element + element);
    doubledArray.push(element + element);
  });
  // console.log(doubledArray);
  doubledString = doubledArray.join('');
  console.log(doubledString);
  // return doubledString;
}

// doubleChar(string);
doubleChar(string1);

// module.exports = {
//   doubleChar:doubleChar,
//   attendance:"wordy word here"
// }
