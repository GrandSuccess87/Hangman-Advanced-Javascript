console.log("--------------------------------");
console.log("Welcome to the Interactive Advanced Javascript Hangman!");
console.log("Guess a letter of the name of a technology I have learned!");
console.log("Goodluck");
console.log("--------------------------------");

// require external files and node packages 
var Letter = require('./letter.js');
var Word = require('./word.js');
var prompt = require('prompt');
var inquirer = require('inquirer');


// create global variables
var guessesRemaining = 10;
var wordsWon = 0;
// var guesses = [];
var wordBank = ['javascript', 'nodejs', 'jquery', 'mysql', 'git', 'html', 'css', 'npm', 'json']
var currentWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);

// initiate prompt
prompt.start();

// create game object
game = {

    // define start game function
    startGame: function (word) {

        //Prevent same letter from being guessed more than once: 
        // guesses = [];
        // if(guesses.indexOf(word) != -1) {
        //        console.log("Please Try Again, You Have Already Guessed That Letter. ");
        //    }
    
        this.promptUser();

    },

    // define reset Guesses function
    resetGuesses: function () {
        guessesRemaining = 10;
        
    },

    // define function that prompts the user to play the game
    promptUser: function () {
        inquirer.prompt([{
                type: "input",
                name: "guessedLetter",
                message: "Guess a letter: ",
            }])
            .then(function (inquirerResponse) {
                    guessesRemaining--;
                    console.log(currentWord.checkLetter(inquirerResponse.guessedLetter));

                    // want to have guessesRemaining stay the same if the user guesses the correct letter:
                    // if(guessesRemaining > 0 ) && (currentWord.checkLetter(inquirerResponse.guessedLetter) = true) {
                    //     console.log("Guesses Remaining: " + guessesRemaining);
                    // }
                    
                    // end game if no more guesses are left
                    if (guessesRemaining === 0) {
                        console.log("You Are Out of Guesses!");
                        wordsWon--;
                        console.log("Words Won: " + wordsWon);

                        // prompt user to see if they would like to play another game
                        inquirer.prompt([{
                            type: "rawlist",
                            name: "yesNo",
                            message: "Up for another game?!",
                            choices: ["Y", "N"],

                        }]);
                        if (inquirer.prompt.choices === "1") {


                        }

                        game.resetGuesses();
                        game.startGame();

                        // end game if user does not wish to play 
                        // if (inquirer.prompt.choices === "2") {
                        //     (!game.startGame());
                        //     console.log("Game Over")

                        // } 

                        // if the word has been guessed correctly
                    } else if (!currentWord.notFinished()) {
                        console.log("You Won!! Congratulations, You Rock!!");
                        wordsWon++;
                        console.log("Words Won: " + wordsWon);
                    } else {
                        //user has to continue guessing until they either win or reach 0.
                        console.log("Guesses Remaining: " + guessesRemaining);
                        game.startGame();

                    }

                

            
        });
    }
}
game.startGame();

// things to fix:

//when user does another game generate new another word
        //Prevent same letter from being guessed more than once: 
                    // want to have guessesRemaining stay the same if the user guesses the correct letter:
                        // end game if user does not wish to play 
