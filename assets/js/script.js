// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = 0;
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [ "!", "#", '"', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

console.log(lowerLetter);
console.log(upperLetter);
console.log(numbers);
console.log(specialChar);
// Write password to the #password input
function writePassword() {
  var passLength = parseInt(prompt('How long do you want your password to be? Choose from 8 - 128 characters'), 10);
  var lowerCase = confirm('Do you want lowercase letters in your password?');
  var upperCase = confirm('do you want upper case letters in your password?');
  var numbers = confirm('do you want numbers in your password?');
  var special = confirm('do you want special characters in your password? ex: "#, %, &, $"');
  
  if(lowerCase === true; )
  



 /* var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password; */
  console.log('passLength is ' + typeof passLength + ' type')
  console.log('Password Length is ' + passLength);
  console.log('Lower case ' + lowerCase);
  console.log('Upper case ' + upperCase);
  console.log('Numbers ' + numbers);
  console.log('Special Characters ' + special);
  console.log('Password is going to be ' + password + ' long.')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

