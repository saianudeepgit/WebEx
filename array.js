//in an array with size 5 with index , get count
//remove one element and count array size again
//add another element and count again
//slice the array 
//create nested array
//replace first array items with 2nd array element
//index all these array
{
const arr = [1,2,3,4,5,6];
 const mapped = arr.map(element=>element+30);
 console.log(mapped);
}
 {
const arr2 = [7,8,9,10,11,12];
 const filtered = arr2.filter(element => element ===2 || element === 4);
 console.log(filtered);
}
let electronics = ["laptops","consoles","desktops","smartphones","headphones"]
let automobiles = ["cars","motorbikes","trucks","jet","boats"]
electronics = electronics.concat(automobiles);
console.log(electronics.length)
console.log(electronics)
console.log(automobiles)

console.log(electronics.pop())
console.log(automobiles.indexOf("motorbikes"))
console.log(electronics.shift())

console.log(electronics.unshift())
console.log([[electronics]])
console.log(automobiles.slice())
console.log(automobiles)
//console.log(electronics.push.pop())

const scores = [22, 54, 76, 92, 43, 33];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);}
    
    
let j = 0;

while (j < scores.length) {
    console.log(scores[j]);
    j++;
}

//Datatypes
let variable1 = "string";
var name = "sai";
var age = 24;
var CGPA = 9.0;
let graduated = true;
let Gradelist = [9.0,8.5,8.7]
console.log(age);

//Loops
for (let increase = 0; increase < 6; increase++) {
    console.log("value increases as",increase);}

let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}

let i = 0;
do {
 i += 1;
 console.log(i);
} while (i < 5);

//Operators
// addition
console.log('x + y = ', x + y);

// subtraction
console.log('x - y = ', x - y);

// multiplication
console.log('x * y = ', x * y);

// division
console.log('x / y = ', x / y);

// remainder
console.log('x % y = ', x % y);

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);

// equal operator
console.log(2 == 2); 
console.log(2 == '2'); 

// not equal operator
console.log(3 != 2); 
console.log('hello' != 'Hello');

// strict equal operator
console.log(2 === 2);
console.log(2 === '2');

// strict not equal operator
console.log(2 !== '2');
console.log(2 !== 2); 

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false