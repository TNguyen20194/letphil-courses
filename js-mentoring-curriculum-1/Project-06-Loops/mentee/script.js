// STEP 1: Use a for loop to count from 1 to 3
// (Write a for loop starting at 1; run while <= 3; increase by 1; log the counter.)

for (let i = 1; i <= 3; i++) {
  console.log("Count:", i);
}

// STEP 2: Use a for loop to print 5 stars
// (Write a for loop that runs 5 times; log "⭐" each time.)

for (let i = 5; i > 0; i--) {
  console.log("⭐");
}

for (let i = 0; i < 5; i++) {
  console.log("⭐");
}

// STEP 3: Loop through an array of fruits and log each one
// (Create const fruits = ["apple", "banana", "cherry"]; use a for loop with i < fruits.length and log each item.)

const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[1]);
}

// STEP 4: Use a loop to print even numbers from 2 to 10
// (Start at 2; increment by 2; stop at 10; log each number.)

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// STEP 5: Loop backwards from 5 to 1
// (Start at 5; decrement by 1; stop at 1; log each number.)

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// STEP 6: Loop through letters in a string
// (Create let word = "hello"; loop over its length and log each character.)

let word = "hello";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// STEP 7: Use a while loop to count from 1 to 3
// (Make a counter that starts at 1; while it’s <= 3, log it; remember to increment.)

let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

// i = 1 run the while loop
// i = 2 run the while loop
// i = 3 run the while loop

// STEP 8: Use a while loop to print 5 stars
// (Start a counter at 0; while it’s < 5, log "⭐"; increment after logging.)
let index = 0;
while (index < 5) {
  console.log("⭐");
  index++;
}

// STEP 9: Loop through the same fruits array using a while loop and log each one
// (Use an index that starts at 0; while index < fruits.length, log fruits[index]; increment index.)

let start = 0;
while (start < fruits.length) {
  console.log(fruits[start]);
  start++;
}

// STEP 10: Use a while loop to print even numbers from 2 to 10
// (Start at 2; while <= 10, log the number; add 2 each time.)

let num = 2;
while (num <= 10) {
  console.log(num);
  num += 2;
}

// STEP 11: Use a while loop to loop backwards from 5 to 1
// (Start at 5; while >= 1, log the number; subtract 1 each loop.)

let num1 = 5;
while (num1 >= 1) {
  console.log(num1);
  num1--;
}

// STEP 12: Use a while loop to loop through letters in the same string
// (Use an index starting at 0; while index < word.length, log word[index]; then increment.)

let string = "Welcome!";
let letterIndex = 0;
while (letterIndex < string.length) {
  console.log(string[letterIndex]);
  letterIndex++;
}

// let letterIndex2 = 0;
// while (letterIndex2 < word.length) {
//   console.log(word[letterIndex2]);
//   letterIndex2++;
// }

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let x = 1; x <= i; x++) {
    row += "*";
  }
  console.log(row);
}

// *
// **
// ***
// ****
// *****

const rows = 5;

for (let i = 1; i <= rows; i++) {
  let spaces = "".repeat(rows - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars + spaces);
}
