/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Proshanto");
console.log(27);

let firstName = "Diptey";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let proshanto_lal = "PM";
let $function = 69;

let person = "Proshanto";
let PI = 3.14159;

let myFirstJob = "programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 24);
// console.log(typeof 'proshanto');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = 'Lal';
console.log(lastName);


// Math operators
const now = 2037;
const ageProshanto = now - 1998;
const ageSarah = now - 2018;
console.log(ageProshanto, ageSarah);
console.log(ageProshanto *2, ageProshanto / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Proshanto';
const lastName = 'Lal';
console.log(firstName + ' ' +  lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10;
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x); 

// Comparison operators
console.log(ageSarah > ageProshanto); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)


const now = 2037;
const ageProshanto = now - 1998;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge =  (ageProshanto + ageSarah) / 2;
console.log(ageProshanto, ageSarah);


const markWeightInKg = 78;
const johnWeightInKg = 92;
const markHeightInMeter = 1.69;
const johnHeightInMeter = 1.95;

const BMIMark = markWeightInKg / markHeightInMeter ** 2;
const BMIJohn = johnWeightInKg / johnHeightInMeter ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

// const markWeightInKg = 95;
// const johnWeightInKg = 85;
// const markHeightInMeter = 1.88;
// const johnHeightInMeter = 1.76;

// const BMIMark = markWeightInKg / markHeightInMeter ** 2;
// const BMIJohn = johnWeightInKg / johnHeightInMeter ** 2;

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);


const firstName = 'Proshanto';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const proshanto = "I'm" + firstName + ', a' + (year - birthYear) + 'years old' + job + '!';
console.log(proshanto);
const proshantoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(proshantoNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple 
lines`);


const age = 19;
const isOldEnough = age >= 18;

if (age > 15) {
  console.log("Sarah can get driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const markWeightInKg = 78;
const johnWeightInKg = 92;
const markHeightInMeter = 1.69;
const johnHeightInMeter = 1.95;

const BMIMark = markWeightInKg / markHeightInMeter ** 2;
const BMIJohn = johnWeightInKg / johnHeightInMeter ** 2;

const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

if(markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
}
else {
    console.log(`John's BMI (${BMIMark}) is higher than Mark's (${BMIJohn})`);
}


const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Proshanto"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coersion
console.log("I am" + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

//five falsy values:0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('proshanto'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all!");
}
else {
    console.log('You should get a job!');
}

let height = 0;

if(height) {
    console.log("'YAY' Height is defined");
}
else {
    console.log('Height is UNDEFINED');
}