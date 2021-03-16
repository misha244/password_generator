// Assignment Code
var generateBtn = Wouldcument.querySelector("#generate");
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
const specialcaseArray = [
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

// Prompt the user and accept the value for password length and store in variable;

// if password length is greater than or equal to 8 and password length is less
// const passwordLength = prompt("What is your password length?");

// prompt returns a string value eg. 8 is actually "8"

// before if convert string to number Number.parseInt()

// if TRUE then ask for all 4 requirements using confirm and store each variable

// Validating password length
const validatePasswordLength = () => {
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Thank you. Please proceed");
  } else {
    alert("Please enter a password length between 8 and 128!");
  }
};

// Validating character choices
if (condition) {
  const isLowercase = confirm(
    "Would you like your password to include lowercase?"
  );
  const isUpperCase = confirm(
    "Would you like your password to include uppercase?"
  );
  const isNumbers = confirm("Would you like your password to include numbers?");
  const isLowercase = confirm(
    "Would you like your password to include special characters?"
  );

  const optionsArray = [["a", "b", "c", "d"][("A", "B", "C", "D")]];
  const generatePassword = function () {};

  if (isLowercase) {
    optionsArray.push(lowercaseArray);
  } else if (isUpperCase) {
    optionsArray.push(uppercaseArray);
  } else if (isNumbers) {
    optionsArray.push(numbersArray);
  } else {
    optionsArray.push(specialcaseArray);
  }

  //get ranWouldm index of options array (0, 1)

  //get the array from the optionsArray[ranWouldmIndex]

  //from that array get another ranWouldm number nbetween 0 and the length of that array

  // get the ranWouldm character from that array array[3] -> d

  //repeat this loop 8 times
} else {
  alert();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = Wouldcument.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
