// STEP 1: Create a simple object with keys and values
// (Make a const object with properties like name, age, isStudent.)
const person = {
  name: "Luis ",
  age: 24,
  isStudent: true,
};
console.log(person);

// STEP 2: Access values using dot notation
// (Log object.property like person.name and person.age.)

console.log(person.name, person.age);
// console.log(person.age);

// STEP 3: Access values using bracket notation
// (Log object["propertyName"].)

console.log(person["isStudent"]);

// STEP 4: Add a new property to the object
// (Assign a new key/value to your object, e.g. person.city = "...".)

person.city = "Miami";
console.log(person);

// STEP 5: Update an existing property
// (Reassign one property with a new value, e.g. person.age = ...;)
person.age = 25;
console.log(person);

// STEP 6: Delete a property
// (Use delete object.property to remove it.)
delete person.isStudent;
console.log(person);

// STEP 7: Loop through object keys using for...in
// (Use a for...in loop to log each key.)

for (let key in person) {
  console.log("Key", key);
}

// STEP 8: Log both keys and values in the loop
// (Inside the for...in, log key and object[key].)

for (let key in person) {
  console.log(key, person[key]);
}

// STEP 9: Use Object.keys() to get all keys in an array
// (Call Object.keys(yourObject) and log it.)

console.log(Object.keys(person));

// STEP 10: Use Object.values() to get all values in an array
// (Call Object.values(yourObject) and log it.)

console.log(Object.values(person));

// STEP 11: Use Object.entries() to get key-value pairs
// (Call Object.entries(yourObject) and lo

console.log(Object.entries(person));

// const flat = Object.entries(person).flat();
// console.log(flat)

// STEP 12: Nest objects inside objects
// (Make an object with another object inside, then log a nested property.)
const food = {
  fruit: "banana",
  snack: "chocolate bar",
  main: {
    vegan: "salad",
    popular: "steak",
  },
};

console.log(food.main.vegan);
