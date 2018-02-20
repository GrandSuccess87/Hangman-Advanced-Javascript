var Letter = require('./letter.js');
// console.log(Letter);

var letterArray = [];

input = "tessa";




var wordReady = function (input) {
    this.letter = letterArray;
    this.numCorrect;

    for (var i = 0; i < input.length; i++) {
        letterArray.push(new Letter(input[i]));
        

    } console.log(letterArray);
    
  
this.showLetters = function() { 
    var wordString = " "; 
    for(var i = 0; i < letterArray.length; i++ ) {
       wordString += this.letterArray[i] + " "; 
         console.log(wordString);
         return wordString;

    }

this.guessFunction = function() {
    this.correct = 0;
    this.numGuesses = 0;
    for (var i = 0; i < letterArray.length; i++) {
        if(letter[i] === this.isMatch(char)) {
            correct ++;

        } 
         correct --; 
        
    }
}

    
}

var word = new wordReady(input);


}

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// var word1 = "quintessa";
// var word2 = "sarah";
// var word3 = "austin";


 // var tessa = new Letter (char);
// char = ["t", "e", "s", "s", "a"];

// var t = new Letter ("t", "e");
// var e = new Letter ("e", "e");

// console.log("You guessed the correct letter" + char);
// console.log("\n");

//  // create a for loop that will concantenate the underscores
//  console.log("\n");
            
// var underScore = "_";

//             for (var i = 0; i < char.length; i++) {
//             this.guessedLetter += " ";  console.log(underScore);
// 