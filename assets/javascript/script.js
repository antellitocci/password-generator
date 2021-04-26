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
    generatePassword();

}

//Generate password
function generatePassword()
{
  //Set the generated password equal to an empty string to start.
  var generatedPassword = '';
  //Create an array of all possible characters. Include at the top so every time this function is run include all available characters.
  const availableCharArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+=".split("");
  //Remove segments of the array based on user selection
  if (inclLowercase != false && inclUppercase === false && inclNumeric === false && inclSpecial === false)
  {
    availableCharArray.splice(26,51);
    availableCharArray.splice(52,61);
    availableCharArray.splice(62,74);
  }
  else if (inclLowercase != false && inclUppercase != false && inclNumeric === false && inclSpecial === false)
  {
    availableCharArray.splice(52,61);
    availableCharArray.splice(62,74);
  }
  else if (inclLowercase != false && inclUppercase != false && inclNumeric != false && inclSpecial === false)
  {
    availableCharArray.splice(62,74);
  }
  else if (inclLowercase != false && inclUppercase != false && inclNumeric != false && inclSpecial != false)
  {
    availableCharArray;
  }
  //THIS IS THE ONLY CORRECT ONE AT THE MOMENT
  else if (inclLowercase === false && inclUppercase !== false && inclNumeric === false && inclSpecial === false)
  {
    availableCharArray.splice(0,26);
    availableCharArray.splice(26,49);
  }
  else if (inclLowercase === false && inclUppercase != false && inclNumeric != false && inclSpecial === false)
  {
    availableCharArray.splice(0,25);
    availableCharArray.splice(62,74);
  }
  else if (inclLowercase === false && inclUppercase != false && inclNumeric != false && inclSpecial != false)
  {
    availableCharArray.splice(0,26);
  }
  else if (inclLowercase === false && inclUppercase === false && inclNumeric != false && inclSpecial === false)
  {
    availableCharArray.splice(0,25);
    availableCharArray.splice(26,51);
    availableCharArray.splice(62,74);
  }
  else if(inclLowercase === false && inclUppercase === false && inclNumeric != false && inclSpecial != false)
  {
    availableCharArray.splice(0,25);
    availableCharArray.splice(52,61);
  }

  //Still need to check additional conditions, like when everything else is true but numbers
  else
  {
    availableCharArray;
  }

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


// Write password to the #password input
function writePassword(genPassword) {
  var password = genPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", presentPrompts);
