// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declaring global variables

const lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacterArray = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "()",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  '"',
];
let isLowercase;
let isUppercase;
let isNumbers;
let isSpecialCharacter;
let passwordLength;
let password = "";

function generatePassword() {
  // Create a variable to store our generated password
  var password = "";
  // Asking for a password length
  const passwordLength = prompt(
    "Please enter the length you'd like for your password"
  );
  // Converting user input from string to an integer
  passwordLength = Number.parseInt(passwordLength);
  // Validating password length
  const validatePasswordLength = () => {
    if (passwordLength >= 8 && passwordLength <= 128) {
      alert("Thank you. Please proceed");
    } else {
      alert(
        "Please try again and enter a password length that is between 8 and 128!"
      );
      break;
    }
  };

  // Declaring case selection variables
  const isLowercase = confirm(
    "Would you like your password to include lowercase?"
  );
  const isUppercase = confirm(
    "Would you like your password to include uppercase?"
  );
  const isNumbers = confirm("Would you like your password to include numbers?");
  const isLowercase = confirm(
    "Would you like your password to include special characters?"
  );

  // Return our created password
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
