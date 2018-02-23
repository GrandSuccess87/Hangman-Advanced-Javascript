var Letter = require('./letter.js');
// console.log(Letter);

var WordReady = function (input) {
    this.input = input;
    var lettArr = [];
    this.found = false;

    // this.getFilled = function () {
        for (var letter in input) {
            lettArr.push(new Letter(input[letter].toLowerCase()));

        };
        console.log(lettArr);
    // };
    this.word = lettArr;
    this.showLetters = function () {
        var wordString = "";
        for (var i = 0; i < this.word.length; i++) {
            wordString += this.word[i].toString() + " ";
        };
            return wordString;
            // console.log(wordString);
        //  return this.found;
    };

    this.checkLetter = function (char) {
        console.log(char + "!!!!!");
        // var toReturn = 0;
        // this.numCorrect;

        // this.numGuesses = 0;

        for (var i = 0; i < this.word.length; i++) {
            // if (lettArr[i].letter == char) {
                // is .char needed after lettArr[i]?
                // lettArr[i].appear = true;

                this.word[i].isMatch(char);
        }
                return this.showLetters();
    }
                // toReturn++;
                // console.log(toReturn);

                // this.numCorrect++;
                // console.log(this.numCorrect);

            
            // this.numCorrect--;
            // console.log(this.numCorrect);
            // toReturn--;
            // console.log(toReturn);

        // }
        // return false;
    // };

    this.getAnswer = function () {
        console.log(this.word);
    }


    this.findWord = function () {
        this.found = this.word.every(function (currLett) {
            console.log(currLett);
            return currLett.appear;
        });
        return this.found;
    }


    this.notFinished = function() {
        var guessMore = false;
        for(var i = 0; i < this.word.length; i++) {
            if(this.word[i].toString() == "_") {
            guessMore = true;
            break;
        }
    }
    return guessMore;

}

module.exports = WordReady;

// input = "belize";



// var word = new wordReady("belize");
// console.log(word);
// console.log(word.showLetters());

// word.showLetters(input);
// word.guessed();
// word.guessed("bab");
// console.log(word.getFilled());








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
