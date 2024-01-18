let name3 = 'dasdfghjkertyuidvbncvbnfghj';
console.log(name3);

let address, zip, state;
console.log(address);
address = '101 main street';
state = 'hyd';
zip = '56034';
console.log(address, zip, state);

//LET VS CONST VS VAR
//using var
var value = 'some value';
console.log(value);

value = 'some y value';
console.log(value);

const value2 = 'some const value';
console.log(value2);

// value2 = 'why value'; cant re-assign
console.log(value2);

let value3 = 'cvghio';
console.log(value3);

value3 = 'here is the value ';
console.log(value3);

const name7 = 'john';
const lastName = 'shakesphere';
let fullName = name7 + ' ' + lastName;
console.log(fullName);

const website = 'google';
const url = 'http://www.' + website + '.com';
console.log(url);

//Numbers
//loosely typed = don't declare type

const gun = 45;
let guns = 67.5;
console.log(gun);
console.log(guns);

let num = 40;
num += 5;
console.log(num);
num -= 3;
console.log(num);
num++;
console.log(num);

//implicit Type conversion exist
//if one of the variable is string then the type conversion happens

const name5 = 'jhon';
const lastName4 = 'josh';
const full = name5 + ' ' + lastName4;
console.log(full);

let con = num + gun;
console.log(con);

n1 = 9;
n2 = '5';
console.log(n1 + n2); //implicit type conversion to string

n2 = 5;
n1 = 9;
console.log(n1 + n2);

n2 = 5;
n1 = '9';
console.log(n2 + n1);

//Data Types-7 total
//primitive - String, Number ,Boolean, Null, Undefined, Symbol
//Object- Arrays, Functions, Objects

//typeof- operator( typeof variable) ( typeof value)

//String
const text = 'strength';
console.log(typeof text);

//Number
const nu8 = 90;
console.log(typeof nu8);

//Null(bug in js -null as object but it is not an object)
const res = null;
console.log(typeof res);

//Boolean
let value1 = true;
let value23 = false;
console.log(typeof value1);
console.log(typeof value23);
//undefined
let namess;
console.log(namess);

//Arrays-[],0 index based
const friends = ['anna', 'banna', 'canna', 'diana', 90, 89, null];
console.log(friends);
console.log(friends[9]); //undefined

let bestfriend = friends[3];
console.log(bestfriend);
friends[3] = 'best friend';
console.log(friends);

//functions-declare,invoke

function hello(name) {
  console.log('hello there ' + name);
}

hello();
//greet bob
hello('bob');
hello('sis');
//parameter- are local variables only or placeholders
hello(4);

anna = 'Anna';
hello(anna);

//all functions by default returns an undefined value
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(5, 5);
//function expression(function declaration)reference a function by refering a variable
const add = function (num1, num2) {
  return num1 + num2;
};
const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue];
console.log(values);

//arrow function (only make as function expressions)
const multiply = (num1, num2) => num1 * num2;

//objects-collection of properties(key-pair methods)
//dot notation

const person = {
  name: 'john',
  lastName: 'peters',
  age: 79,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting: function () {
    console.log('hello my name is John');
  },
};

console.log(person.name);
console.log(person.siblings);
person.greeting();

const age = person.age;
person.name = 'bob';
console.log(person.name);

//Conditional Statements
//>,<,>=,<=,==,===,!=,!=== (Comparision Operators)

if (2 > 1) {
  console.log('hello world');
}
if (false) {
  console.log('hello world');
}

const valuess = 2 > 1;
console.log(typeof valuess);

const val = 1 > 2;
if (val) {
  console.log('print ');
}

//example if else
if (true) {
  console.log('printed if statement');
} else {
  console.log('printed else statement');
}
if (false) {
  console.log('printed if statement');
} else {
  console.log('printed else statement');
}

const num1 = 4;
const num2 = 4;
if (num1 > num2) {
  console.log('num1 is greater than num 2');
} else {
  console.log('num1 is less than num2');
}
