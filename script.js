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

function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Asking for a password length
  const inputPasswordLength = prompt(
    "Please enter the length you'd like for your password"
  );

  // Converting the input length from a string to an integer
  const passwordLength = parseInt(inputPasswordLength, 10);

  // Validating password length
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Your password length shoud be between 8 and 128 characters!");
    return (password = "Try again and enter a valid password length!");
  }

  // Confirming character type selection
  const isLowercase = confirm(
    "Would you like your password to include lowercase characters?"
  );
  const isUppercase = confirm(
    "Would you like your password to include uppercase characters?"
  );
  const isNumbers = confirm("Would you like your password to include numbers?");
  const isSpecialCharacter = confirm(
    "Would you like your password to include special characters?"
  );

  // Ensuring at least one type of character is chosen
  if (!isLowercase && !isUppercase && !isNumbers && !isSpecialCharacter) {
    alert("At least one character type is required to generate a password!");
    return (password = "Try again and choose 1 or more character types.");
  }

  // Collecting user preferences
  const optionsArray = [];

  const confirmPreference = (answer, array) => {
    if (answer) {
      optionsArray.push(...array);
      return;
    }
  };

  confirmPreference(isLowercase, lowercaseArray);
  confirmPreference(isUppercase, uppercaseArray);
  confirmPreference(isNumbers, numbersArray);
  confirmPreference(isSpecialCharacter, specialCharacterArray);

  // Creating the password by picking random characters out of the chosen arrays
  // Creating a loop that will generate characters from the chosen arrays, using the chosen length for the password.

  for (let i = 0; i <= passwordLength; i++) {
    password += optionsArray[Math.floor(Math.random() * optionsArray.length)];
  }

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
