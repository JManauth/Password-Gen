// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = 0;
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [ "!", "#", '"', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  passLength = parseInt(prompt('How long do you want your password to be? Choose from 8 - 128 characters'), 10);
  if ( passLength < 8 || passLength > 128 || passLength === NaN){
    alert('Please choose a number between 8 and 128!');
    writePassword();
    return;
  }
  var lowerCase = confirm('Do you want lowercase letters in your password?');
  var upperCase = confirm('do you want upper case letters in your password?');
  var numberConfirm = confirm('do you want numbers in your password?');
  var special = confirm('do you want special characters in your password? ex: "#, %, &, $"');

  if (lowerCase === true && upperCase === false && numberConfirm === false && special === false){
    generatePassword(lowerLetter);
  } else if (lowerCase === false && upperCase === true && numberConfirm === false && special === false){
    generatePassword(upperLetter);
  } else if (lowerCase === false && upperCase === false && numberConfirm === true && special === false){
    generatePassword(numbers);
  } else if (lowerCase === false && upperCase === false && numberConfirm === false && special === true){
    generatePassword(specialChar);
  } else if (lowerCase === true && upperCase === true && numberConfirm === false && special === false){
    var combo1 = lowerLetter.concat(upperLetter);
    generatePassword(combo1);
  } else if (lowerCase === true && upperCase === false && numberConfirm === true && special === false){
    var combo2 = lowerLetter.concat(numbers);
    generatePassword(combo2);
  } else if (lowerCase === true && upperCase === false && numberConfirm === false && special === true){
    var combo3 = lowerLetter.concat(specialChar);
    generatePassword(combo3);
  } else if (lowerCase === true && upperCase === true && numberConfirm === true && special === false){
    var combo4 = lowerLetter.concat(upperLetter, numbers);
    generatePassword(combo4);
  } else if (lowerCase === true && upperCase === true && numberConfirm === false && special === true){
    var combo5 = lowerLetter.concat(upperLetter, specialChar);
    generatePassword(combo5);
  } else if (lowerCase === true && upperCase === false && numberConfirm === true && special === true){
    var combo6 = lowerLetter.concat(numbers, specialChar);
    generatePassword(combo6);
  } else if (lowerCase === true && upperCase === true && numberConfirm === true && special === true){
    var combo7 = lowerLetter.concat(upperLetter, numbers, specialChar);
    generatePassword(combo7);
  } else if (lowerCase === false && upperCase === true && numberConfirm === true && special === false){
    var combo8 = upperLetter.concat(numbers);
    generatePassword(combo8);
  } else if (lowerCase === false && upperCase === true && numberConfirm === false && special === true){
    var combo9 = upperLetter.concat(specialChar);
    generatePassword(combo9);
  } else if (lowerCase === false && upperCase === true && numberConfirm === true && special === true){
    var combo10 = upperLetter.concat(numbers, specialChar);
    generatePassword(combo10);
  } else if (lowerCase === false && upperCase === false && numberConfirm === true && special === false){
    var combo11 = numbers.concat(specialChar);
    generatePassword(combo11);
  };
  
  function generatePassword(combination) {
    var generatedPassword = [];
    for (i = 0; i < passLength; i++){
      var randomChar = combination[Math.floor(Math.random() * combination.length)];
      generatedPassword.push(randomChar);
    }
    password = generatedPassword.join('');
  }
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);