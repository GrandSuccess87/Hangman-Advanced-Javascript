var Letter = function (char) {
    this.char = char;
    this.guessedLetter = false;

    this.isMatch = function (letter) {
        if (letter === this.char) {
            this.guessedLetter = true;
        } else {
            this.guessedLetter = false;

        }
    } 
        return;
}

Letter.prototype.toString = function () {
    // console.log(this.guessedLetter);
    if (this.guessedLetter === true) {
        return this.char;

    } else {
        return "_";
    }
}



module.exports = Letter;





// var A = new Letter(A);
// console.log(A+" ");

// create this.isMatch function that check this.char to char 

// Person.prototype.toString = function() {
//      var greeting = 'My name is ' + this.name; 
//      if(this.yelling) { return greeting.toUpperCase(); } 
//      return greeting; } var bob = new Person("Bob"); 
     // when concatenating with a string, JavaScript automatically 
    //  calls `toString` console.log(bob + ''); bob.yelling = true; 
    // console.log(bob + '');
