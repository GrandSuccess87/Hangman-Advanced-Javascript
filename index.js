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
            // index.currentWord.isMatch(result.char);
            // console.log(result);
            console.log("You Guessed: " + result.char);
            // var newWord = new Word(result);
            // var guessed = newWord.checkLetter(result.char);
            // console.log(guessed);
            if(index.guessesRemaining === 0) {
                console.log("Out of Guesses");
            }  else if(index.currentWord.checkLetter(result.char)) {
                //loop through currentWord.filled[i].isMatch(char) similar to showLetters function in word.js
                // for (var i = 0; i < this.filled.length; i++) {
                    // if(this.filledd[i].isMatch(char)) {

                // index.guessesRemaining--;
                console.log(index.currentWord.showLetters());

                console.log("CORRECT");
                //?? find word function not working ?? //
                    // if(index.currentWord.findWord()) {
                    //     console.log("You Won!");
                    //     // console.log("Words Won: " + index.wordsWon++;);
                    //     console.log("--------------------------------");
                    //     return;

                    // }
                
            } 
                // } 
            // }
                else {

                console.log(index.currentWord.showLetters());
                console.log("WRONG!");
                index.guessesRemaining--;

               
                }
                // console.log("Guesses remaining: " + index.guessesRemaining);
                // console.log("--------------------------------");
                // if((index.guessesRemaining > 0) && (index.currentWord.found == false)) {
                //     index.promptUser();

                // } else if(index.guessesRemaining === 0) {
                //     console.log("Game Over! Correct Word Is: " + index.currentWord.target);

                // } else {
                //     console.log(index.currentWord.showLetter());
                // }      
        
        });
    
        }
};

game.startGame();
// game.promptUser();
// game.promptUser();