

var Letter = function (char) {
    this.letter = char;
    this.appear = false;
    this.guessedLetter = false;

    this.isMatch = function (char) {
        if (char === this.guessedLetter) {
            this.guessedLetter = true;
        }
    } 
            this.guessedLetter = false;

            }

Letter.prototype.toString = function (char) {
    if(this.guessedLetter) {
        return char;
                    
    } 
        return "_";
    }

var A = new Letter(A);
// console.log(A+" ");

module.exports = Letter;

// create this.isMatch function that check this.char to char 

// Person.prototype.toString = function() {
//      var greeting = 'My name is ' + this.name; 
//      if(this.yelling) { return greeting.toUpperCase(); } 
//      return greeting; } var bob = new Person("Bob"); 
     // when concatenating with a string, JavaScript automatically 
    //  calls `toString` console.log(bob + ''); bob.yelling = true; 
    // console.log(bob + '');
