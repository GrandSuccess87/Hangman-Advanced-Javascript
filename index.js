var Word = require('./word.js');
var prompt = require('prompt');

console.log("--------------------------------");
console.log("Welcome to the Interactive Advanced Javascript Hangman!");
console.log("Guess a letter of the name of a technology I have learned!");
console.log("Goodluck");
console.log("--------------------------------");

prompt.start();

game = {

    wordBank: ['javascript', 'nodejs', 'jquery', 'mysql', 'git', 'html', 'css', 'npm', 'json'],
    wordsWon: 0,
    guessesRemaining: 10,
    // currentWord: null,

    startGame: function(word) {
        this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWord.getFilled();
        this.promptUser();

    },

    resetGuesses: function () {
        this.guessesRemaining = 10;
    },

    promptUser: function () {
        var index = this;
        prompt.get(['char'], function(err, result){
            // console.log(result);
            console.log("You Guessed: " + result.char);
            var newWord = new Word(result);
            var guessed = newWord.checkLetter(result.char);
            console.log(guessed);

            if(guessed == 0 ) {
                
                console.log("WRONG!");
                index.guessesRemaining--;
            } else {
                console.log("CORRECT");
                //?? find word function not working ?? //
                    if(index.currentWord.findWord()) {
                        console.log("You Won!");
                        // console.log("Words Won: " + index.wordsWon++;);
                        console.log("--------------------------------");
                        return;

                    }
                }
                console.log("Guesses remaining: " + index.guessesRemaining);
                console.log("--------------------------------");
                if((index.guessesRemaining > 0) && (index.currentWord.found == false)) {
                    index.promptUser();

                } else if(index.guessesRemaining === 0) {
                    console.log("Game Over! Correct Word Is: " + index.currentWord.target);

                } else {
                    console.log(index.currentWord.showLetter());
                }      
        
            });
    
        }
};

game.startGame();
// game.promptUser();