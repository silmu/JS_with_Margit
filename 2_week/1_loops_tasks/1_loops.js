//1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log('End on task 1.');

//2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 …
let k = 99;
for (let j = 1; j <= 100; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
  if (k % 2 === 0) {
    console.log(k);
  }
  k--;
}
console.log('End on task 2.');

//2. ALternative solution

let i = 0;
while (i <= 100) {
  i += 2;
  console.log(i);
  console.log(100 - i);
}

//3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)
while (true) {
  let distance = prompt('Enter distance in km (Enter 0 to quit):');
  if (distance == 0) break;
  let time = prompt('Enter time in h:');
  console.log('Average speed is ' + distance / time);
}

//3. Alternative solution
while (distance != 0) {
  let distance = prompt('Enter distance in km (Enter 0 to quit):');
  let time = prompt('Enter time in h:');
  console.log('Average speed is ' + distance / time);
}

//4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.
let count = 0;

for (let l = 0; l < 21; l++) {
  num = Number(prompt('Enter a number'));
  if (num % 2 === 0) count++;
}
console.log('The count of even numbers: ' + count);

//5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.
let count = 0;
let sum = 0;
while (true) {
  let num1 = Number(prompt('Enter a number (Enter 0 to quit).'));
  if (num1 === 0) break;
  sum += num1;
  count++;
}
console.log('The average is ' + sum / count);

//6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.
let count = 0;
let sum = 0;

for (let i = 0; i < 5; i++) {
  let num = Number(prompt('Enter a number:'));
  sum += num;
  count++;
}
console.log('The average is: ' + sum / count);

//7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.
let sum = 0;
let count = 0;
while (true) {
  let num = Number(prompt('Enter a number: '));
  sum += num;
  count++;
  let answer = prompt('Do you want to continue giving numbers?(y/n)');
  while (answer !== 'n' && answer !== 'y') {
    answer = prompt('Type y or n:');
  }
  if (answer === 'n') break;
}
console.log('The average is: ' + sum / count);

//8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

let smallest, num;

while (true) {
  let amount = Number(prompt('How many numbers do you want to enter?'));

  if (amount === 0) {
    console.log('The smallest number is 0');
    break;
  }
  num = Number(prompt(`Enter the 1 number: `));
  smallest = num;

  for (let i = 2; i <= amount; i++) {
    num = Number(prompt(`Enter the ${i} number: `));
    smallest > num ? (smallest = num) : (smallest = smallest);
  }
  console.log('The smallest number is ' + smallest);
  break;
}

//9. Make a program that asks ten numbers and in the end prints out two biggest numbers.
let num = Number(prompt(`Enter the 1 number: `));
let biggest = num;
let secondBiggest = num;
for (let i = 2; i <= 10; i++) {
  num = Number(prompt(`Enter the ${i} number: `));
  secondBiggest > num ? (secondBiggest = secondBiggest) : (secondBiggest = num);
  if (biggest < secondBiggest) {
    let helper = biggest;
    biggest = secondBiggest;
    secondBiggest = helper;
  }
}
console.log(`The biggest numbers are: ${biggest} and ${secondBiggest}.`);

//10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
let num = Number(prompt(`Enter the 1 number: `));
let biggest = num;
let smallest = num;
let sum = num;
for (let i = 2; i <= 10; i++) {
  num = Number(prompt(`Enter the ${i} number: `));
  sum += num;
  smallest > num ? (smallest = num) : (smallest = smallest);
  biggest < num ? (biggest = num) : (biggest = biggest);
}
console.log(
  `The biggest number is ${biggest}, the smallest number is ${secondBiggest}. The average is ${
    sum / 10
  }`
);
