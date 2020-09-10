


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

//TODO: Creat generatePassword();, return final password
//TODO: create a prompt asking the length of the password and save it to a variable
// TODO: create a "confirm" , ask user if they want lower case chars
// TODO: create a "confirm" , ask user if they want upper case chars
// TODO: create a "confirm" , ask user if they want special chars
// TODO: create a "confirm" , ask user if they want numbers chars 
// TODO: add validations to make sure at least one type of char is selected, alert user if no type has been selected
// TODO: create arrays for all needed characters; upper case and lower case
// TODO: create a variable that holds the users choice of password
// TODO: create a conditional situation that holds the user choices(use if statements to check user choice)
// TODO: create a new variable that holds all the chosen characters
// TODO: validate that password length entered is at least 8 chars and less than 128 chars
// TODO: create set number of characters randomly for the user. 
//TODO: use math.floor(math.random()) to get a random character--create a for loop to loop the length of chosen characters(for)
// TODO: create a random password at the end



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// var number = [0-9]
for(vari = o; i < userCharLength; i++);