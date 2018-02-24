// require letter.js file 
var Letter = require('./letter.js');


// create word constructor function 
var WordReady = function (input) {
    this.input = input;
    var lettArr = [];

    //push new letter object into an array
    for (var letter in input) {
        lettArr.push(new Letter(input[letter].toLowerCase()));

    };
    // console.log(lettArr);

    this.word = lettArr;

    //define show letters function which will concantenate the word and underscores together as a string
    this.showLetters = function () {
        var wordString = "";
        for (var i = 0; i < this.word.length; i++) {
            wordString += this.word[i].toString() + " ";
        };
        return wordString;
     
    };

    // define checkLetter function which compares users letter guess to correct character
    this.checkLetter = function (char) {
        // console.log(char + "!!!!!");
        

        for (var i = 0; i < this.word.length; i++) {
            this.word[i].isMatch(char);
        }
        return this.showLetters();
    }


    // create a not finished function so that the user can keep guessing
    this.notFinished = function () {
        var guessMore = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].toString() == "_") {
                guessMore = true;
                break;
            }
        }
        return guessMore;

    }

};



module.exports = WordReady;
