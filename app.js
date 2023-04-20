// ES5 version Same keys and Values 
function createInstructor (firstName, LastName){
    return {
        firstName: firstName,
        LastName: LastName
    }
};
//Write an ES2015 version 
function createInstructor(firstName, LastName) {
    return {
        firstName,
        LastName
    }
};


// ES5 Computed Property Names
var favoriteNumber = 42;

var instructor = {
    firstName: 'Colt'
}
instructor[favoriteNumber] = 'That is my favorite!'
// Write an ES2015 Version 
let  favoriteNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favoriteNumber] : 'That is my favorite!'
};


// ES5 Object Methods 
var instructor = {
    firstName: 'Colt',
    sayHi: function(){
        return 'Hi';
    },
    sayBye: function(){
        return this.firstName + 'says Bye!';
    }
}
// Write an ES2015 Version 
const instructor = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi'
    },
    sayBye(){
        return this.firstName + ' says Bye!';
    }
};


//createAnimal function 
function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise
        }
    }
}