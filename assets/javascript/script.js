// Get references to the #generate element & #copy-text element
var generateBtn = document.querySelector("#generate");
var copyTextBtn = document.querySelector("#copy-text");


//Create boolean variables to store user dialog choices and initialize password length at 0
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
    
    //Get user input regarding uppercase letters
    inclUppercase = window.confirm("Would you like to include uppercase letters? \n\n('Ok' to include. 'Cancel' to exclude.)");

    //Get user input regarding numeric characters
    inclNumeric = window.confirm("Would you like to include numbers? \n\n('Ok' to include. 'Cancel' to exclude.)");

    //Get user input regarding special characters
    inclSpecial = window.confirm("Would you like to include special characters (! or & for example)? \n\n('Ok' to include. 'Cancel' to exclude.)");

    //If user fails to select any of the character types, present them with the prompts again.
    if (inclLowercase === false && inclUppercase === false && inclNumeric === false && inclSpecial === false)
    {
      window.confirm("Please be sure to select at least one criteria to generate a password.");
      presentPrompts();
    }
    else
    {
      passwordLengthPrompt();
    }

}

function passwordLengthPrompt()
{
    //If the users response falls outside of acceptable password length range, keep presenting them with the password length selection dialog box until they choose an appropriate length.
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))
    {
      //Get user input for length of password to have
      passwordLength = Number(window.prompt("Please select the length of your password. \n\nPassword must be between 8 and 128 characters.", ""));
    }
    //Begin the password generation phase
    generatePassword();
}

//Generate password
function generatePassword()
{
    //Set the generated password equal to an empty string to start.
    var generatedPassword = '';

    //Create an array of user selection
    var userSelectionArray = [inclLowercase, inclUppercase, inclNumeric, inclSpecial];

    //Create arrays of all possible characters. 
    var availableLowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
    var availableUpperArrary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var availableNumericArray = "0123456789".split("");
    var availableSpecialArray = "\"\'!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split(""); 
    
    //Nest the possible character arrays into another array. A psuedo "all available characters" array if you will.
    var pseudoAllAvailChar = [[availableLowerArray], [availableUpperArrary], [availableNumericArray], [availableSpecialArray]];

    //Check if a user has declined to use a character type. If they have, it will set the nested array at index i to an empty array in the pseudoAllAvailChar array
    for (var i=0; i < userSelectionArray.length; i++)
    {
        if(userSelectionArray[i].valueOf(i) === false)
        {
          //if false, set the nested array at index i to an empty array.
          pseudoAllAvailChar[i] = [];
        }
    }
    //Flatten the nested arrays created in psuedoAllAvailChar array. 2 is used to bring it up two levels (and prevent further nested arrays which causes issues when trying to select 
    //characters for the password)
    var availableCharArray = pseudoAllAvailChar.flat(2);

    //Generate a random password
    for (var i=0; i < passwordLength; i++)
    {
      //choose a random number. minimum value (0) is included and maximum value (array.length) is excluded. Exclusion is okay because there is no character at that index # any way.
      var randomNum = Math.floor(Math.random()*availableCharArray.length);
      //convert the chosen character to a string for addition to the password string.
      var randomArrayValue = availableCharArray[randomNum].toString();
      //add the random character to the password string.
      generatedPassword += randomArrayValue;
    }
    //Reset password length
    passwordLength = 0;

    //Run the writePassword function to print the password to the screen
    writePassword(generatedPassword);
}

// Write password to the #password input
function writePassword(genPassword) {
  var password = genPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Copy generated password to clipboard if desired.
function copyToClipboard(genPassword)
{
  //Get the text from password field
  var copyText = document.querySelector("#password");

  //Check that a password has been generated
  if (copyText.value != "")
  {
    //select the password text
    copyText.select();
    copyText.setSelectionRange(0,9999); //For mobile devices
    //Copy the selected text
    document.execCommand("copy");
    //Alert the user the password has been copied
    alert("Copied password!");
  }
  else
  {
    alert("You must generate a password first.");
  }

}

// Add event listener to generate button and then present prompts for the user
generateBtn.addEventListener("click", presentPrompts);

//Add event listener to copy to clipboard button to copy generated password to clipboard
copyTextBtn.addEventListener("click", copyToClipboard);
