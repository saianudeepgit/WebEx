for (let step = 0; step < 5; step++) {
    console.log("Walking east one step");
  }
//------------------
  let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//------------------
var x=0;
var y=10;
while(x<y)
{   
    console.log(x)
    x++;
}

//------------------
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(numbers)
{
  sum += numbers;
}
console.log(sum)
//------------------
hour = 18;
if (hour < 12) {greeting = "Good day"; console.log(greeting)}
else if (hour > 12) {greeting = "good night"; console.log(greeting)}
else {greeting = "madthabettu";console.log(greeting)}
//------------------
switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
      console.log(text)
  }