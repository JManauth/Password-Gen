// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt('How long do you want your password to be? Choose from 8 - 128 characters');
  var lowerCase = prompt('Do you want lowercase letters in your password?');
  var upperCase = prompt('do you want upper case letters in your password?');
  var numbers = prompt('do you want numbers in your password?');
  var special = prompt('do you want special characters in your password? ex: "#, %, &, $"');
  
  passLength = password.length;

 /* var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;*/
  console.log('Password Length is ' + passLength);
  console.log('Lower case ' + lowerCase);
  console.log('Upper case ' + upperCase);
  console.log('Numbers ' + numbers);
  console.log('Special Characters ' + special);
  console.log('Password is going to be ' + password.length + ' long.')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

