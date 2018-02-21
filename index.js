var Word = require('./word.js');
var prompt = require('prompt');

console.log("--------------------------------");
console.log("Welcome to the Interactive Advanced Javascript Hangman!");
console.log("Guess a letter of the name of a technology I have learned!");
console.log("Goodluck");
console.log("--------------------------------");

prompt.start();

game = {

    wordBank: ['javascript', 'nodejs', 'jquery', 'mysql', 'git', 'html', 'css'],
    wordsWon: 0,
    guessesRemaining: 10,
    currentWord: null,

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
        prompt.get(['char'], function(err, result){
            



        })












    }








}