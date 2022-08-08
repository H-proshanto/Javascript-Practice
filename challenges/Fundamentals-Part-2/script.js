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


/*
using arrays and reduce function

const dolphinsScore = [85, 54, 41];
const koalasScore = [23, 34, 27];

const calcAverage = (score) => {
    const sumOfScore = score.reduce((acc, curr) => {
        acc += curr;

        return acc;
    }, 0);

    return sumOfScore / 3;
}


const calcAverage = (a, b, c) => (a + b + c) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`The winners are Dolphins with score of (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`The winners are Koalas with score of (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};


// First Test Case:

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);


// Second Test Case :
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);


// Part 2 - 009
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ['Bob', 'Alice'];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);
*/

// Part 2 - 010
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); // Last
const popped = friends.pop(); 
console.log(popped);
console.log(friends);

friends.shift(); // First;
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Proshanto'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Proshanto'));
console.log(friends.includes('23'));

if(friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
