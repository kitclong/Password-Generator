// Assignment Code
// Declare variables, setting boolean to false
let generateBtn = document.querySelector("#generate");
let lower = false;
let upper = false;
let numeric = false;
let special = false;

/* ================================================================================================================*/

// Create function to confirm lower, upper, numeric, special. Returns true or false
function chartype(){
  lowerBool = confirm('Do you want lowercase letters?')
  upperBool = confirm('Do you want uppercase letters?')
  numericBool = confirm('Do you want numbers?')
  specialBool = confirm('Do you want special characters?')

  // Failsafe have at least one 'chartype' (selection type)
  if(!lowerBool && !upperBool && !numericBool && !specialBool){
    // Alert if none are chosen
    alert("Must specify at least 1");
    chartype();
  }
}

/* ================================================================================================================*/

// Create function to grab and generate a random password
function generatePassword() {

  // Variable array for password list
  // Can maybe use ascii list ranges for variable array, instead of listing???
  let lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let specArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "^", "_", "`", "{", "|", "}", "~"];
  let numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let upArray = [];

  // Change 'lowArray' letters to 'upArray' letters, mapping upper case letters using '.toUpperCase' to new empty array
  let toUpper = function(letter){
    return letter.toUpperCase();
  }
  upArray = lowArray.map(toUpper);

  // Create var 'passLength' to grab input and parse for number
  let passLength = parseInt(prompt("Please enter the length of your desired password (# between 8 - 128): "));

  if(!passLength) {
    alert("Choose a number");
  }
  else if(passLength > 128 || passLength < 8){
    alert("Please enter a number between 8 - 128");
    generatePassword();
  }
  else{
    alert("Number received!");
    chartype();

  }

  // Generate a password
  // Empty 'choices' array
  let choices = [];
  
  /*Concat the array list if the user chooses true for 
  'lowerBool', 'upperBool', 'numericBool', and/or 'specialBool'
  if the var 'lowerBool' is true, '.concat' 'lowArr' */

  if(lowerBool){
    choices = choices.concat(lowArray)
  }
  if(upperBool){
    choices = choices.concat(upArray)
  }
  if(numericBool){
    choices = choices.concat(numArray)
  }
  if(specialBool){
    choices = choices.concat(specArray)
  }
  
  /*Randomize the character of the password at index i, where i is 
  less than the 'passwordLength' using the 'choices' array, '.push' the 
  randomized character into the 'password' array*/

  // Empty 'password' array
  let password = [];
  for (var i = 0; i < passLength; i++){
    password.push(choices[Math.floor(Math.random() * choices.length)]);
  }

  // Use join to convert 'password' array into string and return the password string
  password = password.join("");
  return password;

}

/* ================================================================================================================*/

// Create function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





