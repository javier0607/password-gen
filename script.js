// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordNumbers = "0123456789";
var passwordUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLowerChars = "abcdefghijklmnopqrstuvwxyz";
var passwordSpecialChars = "!@#$%^&*";
var passwordCharsWork = "";
var password = "";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Math.random
function generatePassword() {


  var passwordLength = prompt("Enter the length of your password.");


  if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {

    // Makes a message to show that the number is not between 8 and 128
    var between = confirm("Please pick a number between 8 and 128.");
    console.log(between);

  }

  else {
    // Sets both values to nothing incase the user trys to generate a new password.
    password = "";
    passwordCharsWork = "";



    var hasNumbers = confirm("Include Numbers?");
    if (hasNumbers === true) {
      passwordCharsWork += passwordNumbers
    } else {
      console.log("No numbers");
    }

    var hasSpecialCharacters = confirm("Include special characters?");
    if (hasSpecialCharacters === true) {
      passwordCharsWork += passwordSpecialChars;
    } else {
      console.log("No Special Chars")
    }

    var hasUpperCase = confirm("Include UpperCase?");
    if (hasUpperCase === true) {
      passwordCharsWork += passwordUpperChars;
    } else {
      console.log("No Upper Chars")
    }

    var hasLowerCase = confirm("Include LowerCase?");
    if (hasLowerCase === true) {
      passwordCharsWork += passwordLowerChars;
    } else {
      console.log("no Lower Chars");
    }

    if (hasNumbers === false && hasSpecialCharacters === false && hasUpperCase === false && hasLowerCase === false) {
      var noCharacters = confirm("Please select okay with any of the options.");
      console.log(noCharacters);
    } else {

      for (var i = 0; i <= parseInt(passwordLength); i++) {
        var randomNumber = Math.floor(Math.random() * passwordCharsWork.length);
        password += passwordCharsWork.substring(randomNumber, randomNumber + 1);
      }


      
    }

    return (password);
    

  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*
var passwordAllChars = passwordNumbers + passwordUpperChars + passwordLowerChars + passwordSpecialChars;
    var passwordNumsChars = passwordNumbers + passwordUpperChars + passwordLowerChars;
    var passwordNumsUpper = passwordNumbers + passwordUpperChars;
    var passwordNumsLower = passwordNumbers + passwordLowerChars;
    var passwordUpperLower = passwordUpperChars + passwordLowerChars;
    var passwordSpecialNumUpper = passwordSpecialChars + passwordNumbers + passwordUpperChars;
    var passwordSpecialNumLower = passwordSpecialChars + passwordNumbers + passwordLowerChars;
    var passwordSpecialUpperLower = passwordSpecialChars + passwordLowerChars + passwordUpperChars;
    var passwordSpecialNum = passwordSpecialChars + passwordNumbers;
    var passwordSpecialUpper = passwordSpecialChars + passwordUpperChars;
    var passwordSpecialLower = passwordSpecialChars + passwordLowerChars;
    */