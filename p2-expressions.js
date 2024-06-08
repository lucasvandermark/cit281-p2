/*
    CIT 281 Project 2
    Name: Lucas Van Dermark
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1, alphabet.length - 1)];
  }
  
  //Returns a single, lowercase letter from the alphabet
  const getRandomLetter = function() {
    return alphabet[getRandomInteger(0,alphabet.length - 1)];
  }
  
  //Generates a random number between the minLength and maxLength + 1 to make the value inclusive, and then uses that number along with getRandomLetter to generate a random-length string by using a for loop
  const getRandomString = function(minLength, maxLength) {
    let length = getRandomInteger(minLength, maxLength + 1);
    let result = ""
     for (let i = 0; i < length; i++) {
      result += getRandomLetter()
     }
     return result
  }
  
  // As shown in the example in class of reordering variables, uses an anoynmous arrow function to split the string apart between every character into an array, sort the array, and then join the array again with no spaces to form a new string
  const getSortedString = (string) => string.split("").sort().join("");
  
  console.log(getRandomString(10, 20));