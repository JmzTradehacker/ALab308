//Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Prime Time

let n = 9;
let number = n + 1;

while (true) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("The next prime number after", n, "is", number);
    break;
  } else {
    number++;
  }
}

//Feeling Loopy

const data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let rows = data.split('\n');
for (let i = 0; i < rows.length; i++) {
  let cells = rows[i].split(',');

  let cell1 = cells[0];
  let cell2 = cells[1];
  let cell3 = cells[2];
  let cell4 = cells[3];

  console.log(cell1, cell2, cell3, cell4);
}