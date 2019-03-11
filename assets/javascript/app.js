
//global variables
var questionsIndex = 0;
var howManyRight = 0;
var howManyWrong = 0;
var time = 10;

//data object with all the questions answers and maybe images to display
var questions = [
    {   question : "What is an Autobot's favorite type of music?",
        answers : ["Rock", "Classical", "Country", "Jazz"],
        correctAnswerIndex : 3
    },
    {   question : "What is an Autobot's favorite science TV show",
        answers : ["Bill Nye the Science Guy", "How It's Made", "Cosmos", "MythBusters"],
        correctAnswerIndex : 2
    },
    {   question : "What is an Autobot's favorite insect?",
        answers : [ "Bumblebee", "Grasshopper", "Ladybug", "Fly"],
        correctAnswerIndex : 0
    }
    {   question : "What does an Autobot use fix a flat?",
        answers : [ "Wrench", "Wheeljack", "Screwdriver", "Fork"],
        correctAnswerIndex : 1
    }    
    {   question : "What did the Autobots see in the desert?",
        answers : [ "Sand", "Camels", "Mirage", "Palm Trees"],
        correctAnswerIndex : 0
    }    
    {   question : "What is an Autobot's least favorite way to communicate across distances?",
        answers : [ "Smoke Signals", "Telepathy", "Radios", "Soundwave"],
        correctAnswerIndex : 3
    }
    {   question : "What is an Autobot's favorite dog?",
    answers : [ "Hound", "Husky", "Pug", "Cat"],
    correctAnswerIndex : 0
    }
];	

//Make an instance of a timer that counts down and updates screen every second
//If the time runs down to zero it clears the timer and does whatever happens 
//in the game when the time runs out.
function timer() {
  counter=setInterval(startTimer, 1000); //1000 will  run it every 1 second
  function startTimer(){
 
  if (count <= 0){
     clearInterval(counter);
     answerTimeout();
  }
  if (time > 0){
     time=time-1;  
  }
  $("#gameDisplay").html("<p> Time Remaining: <span id='timer'>" + time + "</span> seconds </p>");
}
//If the user doesn't answer the question in time it updates the user, 
//adds to the incorrect guesses,
//lets the user know which guess was correct by looking it up in the data object
//maybe show an image of the right answer if we have time to do that...
//increase the question counter
//starts a new question and resets the timeout
function answerTimeout(){
    if (time === 0) {
        howManyWrong++;
        var correctAnswer = questions[questionsIndex].correctAnswerIndex;
        $("#gameScreen").append("<p>The corrrect answer was " + questions[questionsIndex].correctAnswerIndex + "</p>";
        setTimeout(nextQuestion, 4000);
        questionIndex++;
}

function grabQuestion(){
    //if we don't have any more questions
    if (questionsIndex === questions.length){
        //show the stats
        $("#gameDisplay").html("<p> You got " + howManyRight + " right and " + howManyWrong + " wrong.");
        $("#gameDisplay").append("<h1 id='start'>Reset Game?</h1>");
        //Give them the option to restart the game
        resetGame();
        $("#start").click(grabQuestion);
    }
    else {
        //display the question
        $("#gameDisplay").html("<p> Time Remaining: <span id='timer'>" + time + "</span> seconds </p>");
        $("#gameDisplay").append("<p>" + questions[questionsIndex].question + "</p>");
        //now we display the possible answers
        for (i = 0; i< questions[questionsIndex].answers.length; i++){
            $("#gameDisplay").append("<p class='options'>" + questions[questionsIndex].answers[i] + "</p>");
        }
        //Now the user chooses an answer
        $("#gameDisplay").on("click", ".options", function() {
            //we see if the answer chosen matches the number of the right answer.
            //if the text of the option chosen matches the text of the location of the correct
            //answer, then....
            var correctAnswer = questions[questionsIndex].correctAnswerIndex;
            if ($(this).text() === questions[questionsIndex].answers[correctAnswer]) {
                // player wins function
                questionsIndex++;
                howManyRight++;
                $("#gameDisplay").html("<h2> Correct! </h2>")
                setTimeout(grabQuestion, 2000);
            }
            //if they choose the wrong answer
            else {
                questionsIndex++;
                howManyWrong++;
                $("#gameDisplay").html("<h2> Wrong! </h2>")
                setTimeout(grabQuestion, 2000);
            }
        });
    }
}
function resetGame(){
    time = 10;
    questionsIndex = 0;
    howManyRight = 0;
    howManyWrong = 0;
}

$(document).ready(function() {


    $("#start").click(function(){
        
        $("#start").hide();
        time = 10;
        //Display the timer at the top
        grabQuestion();


    });

        

       
});


//When we start the game by clicking the start button
//Then we hide the start button and replace it with the countdown clock
//then we grab a question from the data object and start the countdown


//Dig up a question from our data object and append each of the choices to the game screen 
// loop through all the possible choices 

// What do do if the user guessed correctly
// update the display, add to the correct guesses, display the correct answer
// increase the index of the question asked then start a new question ()    

// If they guess wrong, essentially do everything the same as if they win




//when the game is over, show the stats, then reset the game and let them start again



//Serve up the next question and start the clocks
// moves question counter forward to show next question
//We are going tocheck and make sure we are not out of questions.
//We'll do that by checking the questioncounter and making sure that we are not at the last one
//If we are at the last question we will show the results of the game.
//If we still have questions left, we will start the clock at 15 seconds
//Then we will display the timer on the #gameScreen
//We will pull the new question, start the timer and start the userTimeout

//If we reset the game we restart the glabal variables





// when one of the choices on you gets clicked on the game display
//set the guess to the text of whatever was clicked...
//Look in your data object and see if the text you choose matches the right answer...
//if the answers match, clear the clock and add a win,
//otherwise clear the clock and add a loss
