var Letter = require('./letter.js');
// console.log(Letter);

var wordReady = function (input) {
    this.input = input;
    this.filled = [];
    this.found = false;

    this.getFilled = function () {
        for (var i = 0; i < this.input.length; i++) {
            this.filled.push(new Letter(this.input[i].toLowerCase()));

        }
        console.log(this.filled);
        this.numCorrect;

    };

    this.showLetters = function () {
        var wordString = " ";
        for (var i = 0; i < this.filled.length; i++) {
            wordString += this.filled[i] + " ";
            console.log(wordString);
            return wordString;
        }
        //  return this.found;
    };

    this.checkLetter = function (char) {
        var toReturn = 0;
        this.numCorrect;
        // this.numGuesses = 0;

        for (var i = 0; i < this.filled.length; i++) {
            if (this.filled[i].char == char) {
                // is .char needed after this.filled[i]?
                this.filled[i].appear = true;

                toReturn++;
                console.log(toReturn);

                this.numCorrect++;
                console.log(this.numCorrect);

            }
            this.numCorrect--;
            console.log(this.numCorrect);
            toReturn--;
            console.log(toReturn);

        }
        return toReturn;
    };

    this.findWord = function () {
        this.found = this.filled.every(function (currLett) {
            return currLett.appear;
        });
        return this.found;
    }

}


input = "belize";

var word = new wordReady(input);
// word.showLetters(input);
// word.guessed();
// word.guessed("bab");
console.log(word.getFilled());








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