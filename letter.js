// create a letter constructor function
var Letter = function (char) {
    this.char = char;
    this.guessedLetter = false;

    // compare letter guessed to the correct character to see if it is a match
    this.isMatch = function (letter) {
        if (letter === this.char) {
            this.guessedLetter = true;
            
        } 
    } 
        return;
}

//concantenate the word as a string using this.char or "_".
Letter.prototype.toString = function () {
    if (this.guessedLetter === true) {
        return this.char;

    } 
    else {
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
