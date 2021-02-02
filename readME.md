# Mr. Robogers!

#### Written by Maxwell Meyer

### This is the webpage for my third code review at Epicodus. 


## Applied Technologies

This project was built using:

* HTML
* CSS
* Javascript
* jQuery
* GIT/Terminal
* Github


## Description/Goals


The user can enter a number into the form.  The number will then be evaluated and a new array will be displayed showing a range of numbers from 0 to the user inputted number with the following exceptions: 
* Numbers that contain a 1: all digits are replaced with "Beep!"
* Numbers that contain a 2: all digits are replaced with "Boop!"
* Numbers that contain a 3: all digits are replaced with "Won't you be my neighbor?"


## Setup


1. Follow link to my Github repo and/or GH-Pages.
2. Link to GH-Pages is found [here](https://maxwellmeyer.github.io/RoboRogers/)
3. Alternatively, clone the repository from GH via [this link](https://github.com/MaxwellMeyer/codereview3.git), and open in browser.

## Specifications: 
* Turn input number into array of numbers from 0 - input.
* Iterate through this new array changing number according to the following rules:
* Describe: roboRogers()
  Test: "Numbers that contain a 1 are replaced with "Beep!"
  Expect (roboRogers(1).willEqual("Beep!))
* Describe: roboRogers()
  Test: "Numbers that contain a 2 are replaced with "Boop!"
  Expect (roboRogers(24).willEqual("Boop!"))
* Describe: roboRogers()
  Test: "Numbers that contain a 3 are replaced with "Won't you be my neighbor?"
  Expect (roboRogers(32).willEqual("Won't you be my neighbor?"))


## Known Bugs


If form fields are left blank, the form will return 0 and still thank the user.

## License Information


You can find all applicable licensing information [here](https://opensource.org/licenses/MIT).


## Contact me!

Maxwell Meyer

maxreadswell@gmail.com