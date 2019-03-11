
//global variables

//data object with all the questions answers and maybe images to display

	  
//Dig up a question from our data object and append each of the choices to the game screen 
// loop through all the possible choices 

// What do do if the user guessed correctly
// update the display, add to the correct guesses, display the correct answer
// increase the index of the question asked then start a new question ()    

// If they guess wrong, essentially do everything the same as if they win


//If the user doesn't answer the question in time it updates the user, 
//adds to the incorrect guesses,
//lets the user know which guess was correct by looking it up in the data object
//maybe show an image of the right answer if we have time to do that...
//increase the question counter
//starts a new question and resets the timeout

//when the game is over, show the stats, then reset the game and let them start again

//Make a timer
// game clock currently set to 15 seconds
//Make an instance of a timer that counts down and updates screen every second
//If the time runs down to zero it clears the timer and does whatever happens 
//in the game when the time runs out.

//SErve up the next question and start the clocks
// moves question counter forward to show next question
//We are going tocheck and make sure we are not out of questions.
//We'll do that by checking the questioncounter and making sure that we are not at the last one
//If we are at the last question we will show the results of the game.
//If we still have questions left, we will start the clock at 15 seconds
//Then we will display the timer on the #gameScreen
//We will pull the new question, start the timer and start the userTimeout

//If we reset the game we restart the glabal variables

//When we start the game by clicking the start button
//Then we hide the start button and replace it with the countdown clock
//then we grab a question from the data object and start the countdown



// when one of the choices on you gets clicked on the game display
//set the guess to the text of whatever was clicked...
//Look in your data object and see if the text you choose matches the right answer...
//if the answers match, clear the clock and add a win,
//otherwise clear the clock and add a loss
