"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log('I can drive :D');
}

//const interface = 'Audio'
//const private = 534;


function logger() {
    console.log("My name is Proshanto");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Part 2 - 004
//function declaration
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1 (1991);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2 (1991);

console.log(age1, age2);

// Part 2 - 005
//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Proshanto'));
console.log(yearsUntilRetirement(1980, 'Bob'));


//Part 2 - 006
function cutFruitPieces(fruit) {
    return fruit * 4;
}   

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

    return juice;
}

console.log(fruitProcessor(2, 3));
*/
// part 2 - 007
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        return -1;
        console.log(`${firstName} has already retired`);
    }
}

yearsUntilRetirement(1991, 'Jonas');
yearsUntilRetirement(1950, 'Mike');
