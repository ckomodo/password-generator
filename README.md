# password-generator


```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page






//TODO: Create generatePassword();, return final password
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