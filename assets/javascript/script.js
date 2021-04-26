  //If generate password button is clicked
  //Present prompts(1)
  //Prompt 1 - Include lowercase letters?
  //Store answer and update inclusion as T / F
  //Prompt 2 - Include uppercase letters?
  //Store answer and update inclusion as T / F
  //Prompt 3 - Include numeric characters?
  //Store answer and update inclusion as T / F
  //Prompt 4 - Include special characters?
  //Store answer and update inclusion as T / F
  //Prompt 5 - Select length of password >=8 and <=128 characters
  //Store answer
  //Validate that at least one character type && appropriate length has been selected
  //Generate Password
  //Then display password on screen
  //Allow user to copy password to clipboard

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Create boolean variables to store user dialog choices
var inclLowercase = false;
var inclUppercase = false;
var inclNumeric = false;
var inclSpecial = false;
var passwordLength = 0;

//Present Prompts
function presentPrompts()
{
    //Get user input regarding lowercase letters
    inclLowercase = window.confirm("Would you like to include lowercase letters? \n\n('Ok' to include. 'Cancel' to exclude.)");
    console.log(inclLowercase);

    //Get user input regarding uppercase letters
    inclUppercase = window.confirm("Would you like to include uppercase letters? \n\n('Ok' to include. 'Cancel' to exclude.)");
    console.log(inclUppercase);

    //Get user input regarding numeric characters
    inclNumeric = window.confirm("Would you like to include numbers? \n\n('Ok' to include. 'Cancel' to exclude.)");
    console.log(inclNumeric);

    //Get user input regarding special characters
    inclSpecial = window.confirm("Would you like to include special charcters (! or & for example)? \n\n('Ok' to include. 'Cancel' to exclude.)");
    console.log(inclSpecial);

    if (inclLowercase === false && inclUppercase === false && inclNumeric === false && inclSpecial === false)
    {
      window.confirm("Please be sure to select at least one criteria to generate a password.");
      presentPrompts();
    }
    //Get user input for length of password to have
    passwordLength = Number(window.prompt("Please select the length of your password. \n\n(Choose a number between 8 and 128.)", ""));
    console.log(passwordLength);
    while (passwordLength < 8 || passwordLength > 128)
    {
      passwordLength = Number(window.prompt("Please select the length of your password. \n\nPassword must be between 8 and 128 characters.", ""));
      if(passwordLength >= 8 && passwordLength <=128)
      {
        return;
      }
    }
    password();

}

function password()
{
    //Set the generated password equal to an empty string to start.
    var generatedPassword = '';
    //Create an array of user selection
    var userSelectionArray = [inclLowercase, inclUppercase, inclNumeric, inclSpecial];
    //Create arrays of all possible characters. 
    var availableLowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
    var availableUpperArrary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var availableNumericArray = "0123456789".split("");
    var availableSpecialArray = "!@#$%^&*()-+=".split("");

    for (var i=0; i < userSelectionArray.length; i ++)
    {
      switch(false)
      {
        case userSelectionArray[0]:
          availableLowerArray = [];
          break;
        case userSelectionArray[1]:
          availableUpperArrary = [];
          break;
        case userSelectionArray[2]:
          availableNumericArray = [];
          break;
        case userSelectionArray[3]:
          availableSpecialArray = [];
          break;
        default:
          break;
      }
    }

    //Concatenate all character arrays to create master character array for password generation.
    var availableCharArray = availableLowerArray.concat(availableUpperArrary, availableNumericArray, availableSpecialArray);
    console.log(availableCharArray);
    //Generate a random password
    for (var i=0; i < passwordLength; i++)
    {
      var randomNum = Math.floor(Math.random()*availableCharArray.length);
      var randomArrayValue = availableCharArray[randomNum].toString();
      generatedPassword += randomArrayValue;
    }
    console.log(generatedPassword);
    writePassword(generatedPassword);
    return generatedPassword;
}


//Generate password
function generatePassword()
{

}


// Write password to the #password input
function writePassword(genPassword) {
  var password = genPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", presentPrompts);
