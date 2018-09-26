function simpleOperators (numberA, numberB)
{
  let adding = numberA + numberB;
  let substract = numberA - numberB;
  let multiply = numberA * numberB;
  let devide = numberA / numberB;
  console.log(adding);
  console.log(substract);
  console.log(multiply);
  console.log(devide);
}

let number = [4, 7, 13, 99];
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);


let skipCount = 0; // skip count by 2's to 10

for (let i=15; i<=5; i--)
{
  skipCount += 2;
  console.log(skipCount);
}
