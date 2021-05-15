// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = 0;
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [ "!", "#", '"', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

console.log(lowerLetter);
console.log(upperLetter);
console.log(numbers);
console.log(specialChar);
// Write password to the #password input
function writePassword() {
  var passLength = parseInt(prompt('How long do you want your password to be? Choose from 8 - 128 characters'), 10);
  passLength--;
  if ( passLength < 7 || passLength > 127){
    alert('Please choose a number between 8 and 128!');
    writePassword();
    return;
  }
  var lowerCase = confirm('Do you want lowercase letters in your password?');
  var upperCase = confirm('do you want upper case letters in your password?');
  var numberConfirm = confirm('do you want numbers in your password?');
  var special = confirm('do you want special characters in your password? ex: "#, %, &, $"');

  if (lowerCase === true && upperCase === false && numberConfirm === false && special === false){
    //run function with lowLetters
  } else if (lowerCase === false && upperCase === true && numberConfirm === false && special === false){
    //run function with upperLetters
  } else if (lowerCase === false && upperCase === false && numberConfirm === true && special === false){
    //run function with numbers
  } else if (lowerCase === false && upperCase === false && numberConfirm === false && special === true){
    // run function with specialChar
  } else if (lowerCase === true && upperCase === true && numberConfirm === false && special === false){
    var combo1 = lowerLetter.concat(upperLetter);
  } else if (lowerCase === true && upperCase === false && numberConfirm === true && special === false){
    var combo2 = lowerLetter.concat(numbers);
  } else if (lowerCase === true && upperCase === false && numberConfirm === false && special === true){
    var combo3 = lowerLetter.concat(specialChar);
  } else if (lowerCase === true && upperCase === true && numberConfirm === true && special === false){
    var combo4 = lowerLetter.concat(upperLetter, numbers);
  } else if (lowerCase === true && upperCase === true && numberConfirm === false && special === true){
    var combo5 = lowerLetter.concat(upperLetter, specialChar);
  } else if (lowerCase === true && upperCase === false && numberConfirm === true && special === true){
    var combo6 = lowerLetter.concat(numbers, specialChar);
  } else if (lowerCase === true && upperCase === true && numberConfirm === true && special === true){
    var combo7 = lowerLetter.concat(upperLetter, numbers, specialChar);
  } else if (lowerCase === false && upperCase === true && numberConfirm === true && special === false){
    var combo8 = upperLetter.concat(numbers);
  } else if (lowerCase === false && upperCase === true && numberConfirm === false && special === true){
    var combo9 = upperLetter.concat(specialChar);
  } else if (lowerCase === false && upperCase === true && numberConfirm === true && special === true){
    var combo10 = upperLetter.concat(numbers, specialChar);
  } else if (lowerCase === false && upperCase === false && numberConfirm === true && special === false){
    var comb11 = numbers.concat(specialChar);
  };
  



 /* var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password; */


  console.log('passLength is ' + typeof passLength + ' type')
  console.log('Password Length is ' + passLength);
  console.log('Lower case ' + lowerCase);
  console.log('Upper case ' + upperCase);
  console.log('Numbers ' + numbers);
  console.log('Special Characters ' + special);
  console.log('Password is going to be ' + passLength + ' long.')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

