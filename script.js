


// button.addEventListener(click, function()){

// prompt("how many characters do you want in your password?");

// }
// function generatePassword

  // (characterAmount, includeUppercase, includeNumbers, includeSymbols)










// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var userCharNum =   prompt("how many characters do you want in your password?");
  console.log(userCharNum);

  var specialChar = prompt("do you want any special characters?");
  console.log(specialChar);


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
