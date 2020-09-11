// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var specialChar;
  var upperCase;
  var lowerCase;
  var passNum;
  var finalArray =[]
  var userPassword;

  var characterStringUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var characterStringLower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  var characterStringNum = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9",]
  var characterStringSpecial= [ "!", "@", "#", "%", "^", "&", "(", ")", "_", "-" ]

    
    




  var userCharNum =   prompt("how many characters do you want in your password?");
  if (userCharNum<8 || userCharNum>128){
    prompt("password must be between 8 and 128 characters in length");
    userCharNum =   prompt("how many characters do you want in your password?");
  }
  else{
    specialChar = confirm("do you want any special characters?");
    upperCase = confirm("do you want upper case letters?");
    lowerCase = confirm("do you want lower case letters?");
    passNum = confirm("do you want numbers?");
  }


   if(specialChar===false && upperCase===false && lowerCase===false && passNum===false){
    alert ("you must select a value?");
    specialChar = confirm("do you want any special characters?");
    upperCase = confirm("do you want upper case letters?");
    lowerCase = confirm("do you want lower case letters?");
    passNum = confirm("do you want numbers?");  
    
  }

  if(specialChar===true){
    for(var i = 0; i<characterStringSpecial.length; i++){
      finalArray.push(characterStringSpecial[i]);
    }

  }
  console.log(finalArray);
  if(upperCase===true){
    for(var i = 0; i<upperCase.length; i++){
      finalArray.push(upperCase[i]);
    }

  }
  if(lowerCase===true){
    for(var i = 0; i<lowerCase.length; i++){
      finalArray.push(lowerCase[i]);
    }

  }

  if(passNum===true){
    for(var i = 0; i<passNum.length; i++){
      finalArray.push(passNum[i]);
    }

  }




  return "Password would be here"

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
// TODO: create an array to hold the final result
//TODO: use math.floor(math.random()) to get a random character--create a for loop to loop the length of chosen characters(for)
// TODO: inside the for loop push each char into the final char variable
// TODO: create a random password at the end



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// var number = [0-9]
// for(var i = o; i < userCharLength; i++);