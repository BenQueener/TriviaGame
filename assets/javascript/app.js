
$(document).ready(function() {
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
        },
        {   question : "What does an Autobot use fix a flat?",
            answers : [ "Wrench", "Wheeljack", "Screwdriver", "Fork"],
            correctAnswerIndex : 1
        },    
        {   question : "What did the Autobots see in the desert?",
            answers : [ "Sand", "Camels", "Mirage", "Palm Trees"],
            correctAnswerIndex : 2
        },    
        {   question : "What is an Autobot's least favorite way to communicate across distances?",
            answers : [ "Smoke Signals", "Telepathy", "Radios", "Soundwave"],
            correctAnswerIndex : 3
        },
        {   question : "What is an Autobot's favorite dog?",
        answers : [ "Hound", "Husky", "Pug", "Cat"],
        correctAnswerIndex : 0
        }
    ];	
    
    var pictures = ["assets/images/Jazz.jpg","assets/images/cosmos.jpg","assets/images/bumblebee.jpg", "assets/images/wheeljack.jpg","assets/images/mirage.jpg", "assets/images/soundwave.jpg", "assets/images/hound.jpg"]

    //Make an instance of a timer that counts down and updates screen every second
    //If the time runs down to zero it clears the timer and does whatever happens 
    //in the game when the time runs out.
    function timer() {
        counter=setInterval(startTimer, 1000); //1000 will  run it every 1 second
        function startTimer(){
        
        if (time <= 0){
            clearInterval(counter);
            answerTimeout();
        }
        if (time > 0){
            time--;  
        }
        //took out the reference to gameDisplay, pointed it to the timer span
        $("#timer").html( time );
        }
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
            $("#gameDisplay").append("<p>The correct answer was " + questions[questionsIndex].answers[questions[questionsIndex].correctAnswerIndex] + "</p>");
            $("#gameDisplay").append("<img  src=" + pictures[questionsIndex] +">");
            questionsIndex++;
            setTimeout(grabQuestion, 3000);
        }
    }

    function resetGame(){
        time = 10;
        questionsIndex = 0;
        howManyRight = 0;
        howManyWrong = 0;
    }
    function grabQuestion(){
        $("#start").hide();
        
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
            //initialize the timers
            time = 3;
            timer();
            answerTimeout();
            //display the question
            $("#gameDisplay").html("<p> Time Remaining: <span id='timer'>" + time + "</span> seconds </p>");
            $("#gameDisplay").append("<p>" + questions[questionsIndex].question + "</p>");
            //now we display the possible answers
            for (i = 0; i< questions[questionsIndex].answers.length; i++){
                $("#gameDisplay").append("<p class='options'>" + questions[questionsIndex].answers[i] + "</p>");
            }
        }
    }

    $("#start").click(grabQuestion);       
    //Now the user chooses an answer
    $("#gameDisplay").on("click", ".options", function() {
    //we see if the answer chosen matches the number of the right answer.
    //if the text of the option chosen matches the text of the location of the correct
    //answer, then....
        var correctAnswer = questions[questionsIndex].correctAnswerIndex;
        // player wins 
        if ($(this).text() === questions[questionsIndex].answers[correctAnswer]) {
            questionsIndex++;
            howManyRight++;
            clearInterval(counter);
            $("#gameDisplay").html("<h2> Correct! </h2>")
            $("#gameDisplay").append("<p>The correct answer was " + questions[questionsIndex-1].answers[questions[questionsIndex-1].correctAnswerIndex] + "</p>");
            $("#gameDisplay").append("<img  src=" + pictures[questionsIndex-1] +">");
            setTimeout(grabQuestion, 2000);
        }
        //if they choose the wrong answer
        else {
           
            howManyWrong++;
            clearInterval(counter);
            $("#gameDisplay").html("<h2> Wrong! </h2>")
            var correctAnswer = questions[questionsIndex].correctAnswerIndex; 
            questionsIndex++;
            $("#gameDisplay").append("<p>The correct answer was " + questions[questionsIndex-1].answers[questions[questionsIndex-1].correctAnswerIndex] + "</p>");
            $("#gameDisplay").append("<img  src=" + pictures[questionsIndex-1] +">");
            setTimeout(grabQuestion, 2000);
            }
    });
});

