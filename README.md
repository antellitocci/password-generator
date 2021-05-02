# Password Generator (Butler Boot Camp Challenge 3)

A web application designed to generate a random password based on prompts answered by a user.

## Built With

* HTML
* CSS
* JavaScript

## Preview

Add image

## Access the Project

url
url

## What's New

* Application prompts the user to make selections for their password composition.
    * Include / exclude lowercase letters
    * Include / exclude uppercase letters
    * Include / exclude numerals
    * Include / exclude special characters
    * Choose a password length from 8 - 128 (inclusive) characters
* Application ensures a user has selected at least one include / exclude option and their selected password length meets the specified bounds
* Application prints the randomly generated password to the user's screen
* Application allows user to copy the generated password to their clipboard
    * This only occurs if a password has been generated

## Additional Features
> The develop branch of this application features a different prompt structure than the submitted work. The rationale for this is the criteria for submission specified prompts needed to be fed to the user. While this is an okay design, it is a bit cumbersome. To overcome this, I have added the following features to the develop branch (to be merged following grading):
    
* A sliding scale for password length selection. 
    * This scale has a minimum value of 8 and and maximum value of 128. The selected length is displayed in a text-box to the left of the scale. This text box may also be used to key in a length.
    * By setting the min / max values for the scale, we avoid the need to check if the user's selection is acceptable. They cannot put non-numeric characters or exceed the bounds.
* Checkboxes were used for the inclusion / exclusion of character selections.
    * By adding checkboxes and not using prompts, a user can change the composition of their password much faster without having to cycle through all of the prompts again.
    * It also allows the user to change their password length only and, once again, avoid cycling through all of the prompts again.

## Future Release

* To inclue an odometer animation when the generated password is printed to the screen. Much like the wheels of a slot machine spinning.
* Restyle the page

### Made by Andrew Tellitocci
