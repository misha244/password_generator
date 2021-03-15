// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declaring arrays (specify them)

lowerCaseArray = [];
upperCaseArray = [];
numbersArray = [];
specialCaseArray = [];

const generatePassword = function () {
  // Prompt the user and accept the value for password length and store in variable;

  // if password length is greater than or equal to 8 and password length is less
  // const passwordLength = prompt("What is your password length?");

  // prompt returns a string value eg. 8 is actually "8"

  // before if convert string to number Number.parseInt()

  // if TRUE then ask for all 4 requirements using confirm and store each variable
  // if (passwordLength >= 8 && passwordLength <= 128) {
  //  console.log("HURRAY - PROCEED");
  //} else {
  //  // alert message here
  //}

  if (condition) {
    const isLowercase = confirm("Do you want lowercase?");
    const isLowercase = confirm("Do you want lowercase?");
    const isLowercase = confirm("Do you want lowercase?");
    const isLowercase = confirm("Do you want lowercase?");
    // edit to the different requirements

    const optionsArray = [["a", "b", "c", "d"][("A", "B", "C", "D")]];

    if (isLowercase) {
      optionsArray.push(lowerCaseArray);
    } else if (isUpperCase) {
      optionsArray.push(upperCaseArray);
    } else if (isNumbers) {
      optionsArray.push(numbersArray);
    } else {
      optionsArray.push(specialCaseArray);
    }

    //get random index of options array (0, 1)

    //get the array from the optionsArray[randomIndex]

    //from that array get another random number nbetween 0 and the length of that array

    // get the random character from that array array[3] -> d

    //repeat this loop 8 times
  } else {
    alert();
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
