document.querySelectorAll('.btn').forEach((item) => {
  item.addEventListener('click', () => {
    alert('this is awesome');
  });
});

//document.write('hello world');
//alert() for pop up
//console.log() very important for displaying objects
document.write({ name: 'jhon' });
alert({ name: 'jhon' });
console.log({ name: 'john' });
console.log('hello world');

//variables-Most basic building blocks
//used to store ,access,modify=== value
//declare ,assignment operator, assign value
// variable names can contain digits,letters,underscores,$
//cant start with numbers
//case sensitive-fullname vs Fullname
//camelCase or Underscore

let myvar = 'sdfghjkml';
console.log(myvar);
let name = 'john shrimp taco';
let address, zip, state;
address = '101 main street';
zip = '39022';
state = 'CA';
console.log(address, zip, state);
name = 'nacds';
console.log(name);

//LET VS CONST VS VAR

//using Var
var value = 'some value';
// value='some num';

//using let
let node = 'john';
// node = 'some num';

//using const (Constant)- can't re-assign
const logthm = 'some const';

console.log(value);
console.log(node);
console.log(logthm);
// "" or''

const stng = "john's";

console.log(stng);

//string concatenation
const name2 = 'john';
const lastname = 'shakesphere';
let fullname = name2 + ' ' + lastname;
console.log(fullname);
console.log('his full name is:' + name2 + lastname);

//numbers
//losely types=don't declare type

const num = 34;
const num2 = '34';
// let pants = 2.4634567;
// pants = 'sting';
console.log(num);
console.log(num2);

const num3 = 89;
const num4 = 69;

const add = num3 + num4;
const sub = num3 - num4;
const mul = num3 * num4;
const div = num3 / num4;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

//numbers
//+=,-=,/=,*=,++,--,%
//modulus % returns reminder after division

let numb = 40;
numb += 6;
numb++;
console.log(numb);

//implicit type conversion
const val = name2 - lastname;
console.log(val);
let n1 = '80';
let n2 = '40';
const result2 = n1 + n2; //if we sub it converts the string into num but if we use + then it wont
console.log(result2);

//Data  Types -7 total
//primitive-String,Number,Boolean,Null,undefined,Symbol

//object-Arrays,Functions,Objects

//typeof-operator(typeof variable) (typeof value)

//String
const text = 'some text';
console.log(typeof 34);

//number
const number4 = 68;

//boolean
let value1 = true;
let value2 = false;

//Null
const result5 = null;

//undefined
let name5;
console.log(typeof text);

console.log(typeof number4);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof result5);
console.log(typeof name5);

//Arrays
const friends = ['john', 'peter', 'bob', 89, undefined, null];
console.log(friends[5]);

let bestFriend = friends[2];
friends[2] = 'annnnnna';
console.log(bestFriend);
console.log(friends);

function hello() {
  console.log('bob here');
  console.log('anna here');
  console.log('susy here');
  //some code here....
}

hello();
hello();
hello();

function greet(name) {
  console.log('hello there ' + name);
}
greet('anna');

const wallheight = 80;

function calculate(value7) {
  console.log('this is the value in cm : ' + value7 * 2.54 + 'cm');
  return 'hello world';
}

const width = calculate(100);
const height = calculate(wallheight);

const dimensionsn = [width, height];
console.log(dimensionsn);

//function
function addvalues(nu1, nu2) {
  return nu1 + nu2;
}

const firstValue = addvalues(3, 4);

const lastvalue = addvalues(4, 4);

//function expression
const addfu = function (nu2, nu3) {
  return nu2 + nu3;
};
//arrow functions
const multiply = (num1, num2) => num1 * num2;

const values = [firstValue, lastvalue, addfu(4, 6), multiply(2, 7)];
console.log(values);

const person = {
  name: 'john',
  lastName: 'peters',
  age: 45,
  education: false,
  married: true,
  siblings: ['anna', 'peter', 'susan'],
  greetings: function () {
    console.log('hello this is john');
  },
};

console.log(person.name);
console.log(person);
person.name = 'bobby';
console.log(person.name);

//conditional statements
//>,<,>=,<=,==,===,!=,!===
const value9 = false;

if (value9) {
  console.log('hello world');
} else {
  console.log('hello people');
}

const num1 = 6;
const nub2 = '6';
const result6 = num1 >= nub2;
if (num1 > nub2) {
  console.log(' first number is greater');
} else if (result6) {
  console.log('they are equal');
} else {
  console.log('number 2 is greater');
}

const val6 = true;

if (!val6) {
  console.log('value is true');
} else {
  console.log('print');
}

//==checks only value
//=== checks value and type

const val8 = num1 == nub2;
const val9 = num1 === nub2;
console.log(val8);
console.log(val9);

//logical operators
//(||-OR),(&&-AND), !

const na6 = 'peter';
const age = 24;

if (na6 === 'peter' && age === 24) {
  console.log('hello there user');
} else {
  console.log('wrong');
}

//Switch
// const dice = 1;

switch (6) {
  case 1:
    console.log('you got one');
    break;
  case 2:
    console.log('you got two');
    break;
  case 3:
    console.log('you got three');
    break;
  case 4:
    console.log('you got four');
    break;
  case 5:
    console.log('you got five');
    break;
  case 6:
    console.log('you got six');
    break;
  default:
    console.log('you did not roll the diece');
}

//loops
//repeatedly run a block of code while condition is true

let amount = 10;

while (amount > 0) {
  console.log('I have ' + amount + ' dollars.');
  amount--;
}

//DO WHILE LOOP
//code block first, condition second
//runs at least once (difference between while and do while)

let money = 13;

do {
  console.log('you have' + money + ' dollars.');
  money++;
} while (money < 10);

//for loop
let i;
for (i = 0; i <= 10; i++) {
  console.log('the value of i is :' + i + '.');
}
