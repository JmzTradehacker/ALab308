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