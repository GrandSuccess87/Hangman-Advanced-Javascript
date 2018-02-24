console.log("--------------------------------");
console.log("Welcome to the Interactive Advanced Javascript Hangman!");
console.log("Guess a letter of the name of a technology I have learned!");
console.log("Goodluck");
console.log("--------------------------------");

var Letter = require('./letter.js');
var Word = require('./word.js');
var prompt = require('prompt');
var inquirer = require('inquirer');

var guessesRemaining = 10;
var wordsWon = 0;
var wordBank = ['javascript', 'nodejs', 'jquery', 'mysql', 'git', 'html', 'css', 'npm', 'json']
var currentWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);


prompt.start();


game = {

    
    startGame: function (word) {
        // this.resetGuesses();
        // this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        // this.currentWord.getFilled();
        this.promptUser();

    },

    // resetGuesses: function () {
    //     guessesRemaining = 10;
    // },

    promptUser: function () {
        inquirer.prompt([{
                type: "input",
                name: "guessedLetter",
                message: "Guess a letter: ",
            }])
            .then(function (inquirerResponse) {
                    guessesRemaining--;
                    console.log(currentWord.checkLetter(inquirerResponse.guessedLetter));
                    // if(guessesRemaining > 0 ) && (currentWord.checkLetter(inquirerResponse.guessedLetter) = true) {
                    //     console.log("Guesses Remaining: " + guessesRemaining);
                    // }
                    if (guessesRemaining === 0) {
                        console.log("You Are Out of Guesses!");
                        wordsWon--;
                        console.log("Words Won: " + wordsWon);


                        inquirer.prompt([{
                            type: "rawlist",
                            name: "yesNo",
                            message: "Up for another game?!",
                            choices: ["Y", "N"],

                        }])
                        if (inquirer.prompt.choices === "1") {

                        }
                        game.startGame();

                        // if user choses no, run else if satement to stop game

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
//save guessed letter. 
//decrement guesses remaining when wrong letter is guessed