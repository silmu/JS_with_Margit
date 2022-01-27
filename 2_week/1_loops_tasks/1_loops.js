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
