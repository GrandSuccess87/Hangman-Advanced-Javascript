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
    // console.log(lettArr);
    // };
    this.word = lettArr;
    this.showLetters = function () {
        var wordString = "";
        for (var i = 0; i < this.word.length; i++) {
            wordString += this.word[i].toString() + " ";
        };
        return wordString;
     
    };

    this.checkLetter = function (char) {
        console.log(char + "!!!!!");
        

        for (var i = 0; i < this.word.length; i++) {
            this.word[i].isMatch(char);
        }
        return this.showLetters();
    }


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

// var word1 = new WordReady("quintessa");
// console.log(word1.checkLetter("i"));
// console.log(word1.notFinished());
// console.log(word1.findWord());
// console.log(word1.showLetters());
// console.log(word1.getAnswer());
//?? show answer function not working ??//

module.exports = WordReady;
