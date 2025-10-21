// STEP 1: Create a base array named fruits with some items like "apple", "banana", "cherry".

let fruits = ["apple", "banana", "cherry"];

// ==========================
// PUSH — Add to the end
// ==========================
// STEP 2a: Use push to add "mango" to the end of fruits.
// STEP 2b: Use push to add another fruit to the end.
// STEP 2c: Use push again to add one more fruit at the end.
fruits.push("mango");
console.log(fruits);

fruits.push("strawberry");
console.log(fruits);

fruits.push("grape");
console.log(fruits);

// fruits[2] = "mango";
// console.log(fruits);

// fruits.splice(2, 0, "mango");
// console.log(fruits);

// ==========================
// POP — Remove from the end
// ==========================
// STEP 3a: Use pop to remove the last fruit.
// STEP 3b: Use pop again.
// STEP 3c: Use pop one more time.

fruits.pop();
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.pop();
console.log(fruits);

// ==========================
// UNSHIFT — Add to the front
// ==========================
// STEP 4a: Use unshift to add "strawberry" at the front.
// STEP 4b: Use unshift again with another fruit.
// STEP 4c: Use unshift one more time.

fruits.unshift("grape");
console.log(fruits);

fruits.unshift("strawberry");
console.log(fruits);

fruits.unshift("Dragonfruit");
console.log(fruits);

// ==========================
// SHIFT — Remove from the front
// ==========================
// STEP 5a: Use shift to remove the first fruit.
// STEP 5b: Use shift again.
// STEP 5c: Use shift one more time.

fruits.shift();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.shift();
console.log(fruits);

// SLICE — Copy without changing original
// ==========================
// STEP 6a: Make a copy of the first two fruits using slice.
// STEP 6b: Make a copy of the whole array using slice.
// STEP 6c: Make a copy starting from index 1 using slice.

const firstTwo = fruits.slice(0, 2);
console.log(firstTwo);

const allFruits = fruits.slice();
console.log(allFruits);

const oneFruit = fruits.slice(1);
console.log(oneFruit);

// ==========================
// SPLICE — Mutate original array
// ==========================
// STEP 7a: Use splice to remove 1 item from index 1.
// STEP 7b: Use splice to add "kiwi" at index 2.
// STEP 7c: Use splice to replace one item at index 0 with "grape".

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(2, 0, "Kiwi");
console.log(fruits);

fruits.splice(0, 1, "grape");
console.log(fruits);

//.splice(startIndex, deleteCount, newItem1, newItem2)

// ==========================
// SEARCHING — includes + indexOf
// ==========================
// STEP 8a: Check if fruits includes "apple".
// STEP 8b: Check if fruits includes another fruit.
// STEP 8c: Find the indexOf "banana" (or another fruit).

// const test = fruits.includes("apple");
// console.log(test);
// console.log(fruits);

console.log(fruits.includes("apple"));

const hasCherry = fruits.includes("cherry");
console.log(hasCherry);

const bananaIndex = fruits.indexOf("banana");
console.log(`Index of Banana: ${bananaIndex}`);

// ==========================
// LOOPING — for...of and forEach
// ==========================
// STEP 9a: Loop through fruits with for...of and log each fruit.
// STEP 9b: Loop through fruits with forEach and log each fruit with "Fruit: " before it.
// STEP 9c: Use forEach to log the length of each fruit name.

for (const fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit) => {
  console.log(`Fruit: ${fruit}`);
});

fruits.forEach((fruit) => {
  console.log(fruit, "has a length of", fruit.length, "characters");
});

// ==========================
// MAP — Transform each item
// ==========================
// STEP 10a: Use map to create a new array with each fruit name in UPPERCASE.
// STEP 10b: Use map again to create an array of fruit name lengths.

const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

// ==========================
// FILTER — Keep only some items
// ==========================
// STEP 11a: Use filter to make a new array with only fruits that have more than 5 letters.
// STEP 11b: Use filter again to keep only fruits that contain the letter "a".
const things = fruits.filter((fruit) => {
  return fruit.length > 5;
});
console.log(things);

console.log(fruits.filter((fruit) => fruit.includes("a")));

// ==========================
// REDUCE — Combine into one value
// ==========================
// STEP 12a: Use reduce to count the total number of letters across all fruits.
// STEP 12b: Use reduce again to join all fruit names into a single string separated by commas.

const allFruitsCharacterCount = fruits.reduce(
  (acc, num) => acc + num.length,
  []
);

console.log(allFruitsCharacterCount);
