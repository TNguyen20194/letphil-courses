/*
Mini Project — Type Table 

Goal
  Build a small fixed list of values and render "<value> — <type>" lines using correct type detection.
  Practice: typeof, Array.isArray, special-case null, and function detection.

Exact element ids required
  buildBtn, outputList

STEP 1 — Values
  Create variables with these exact values:
    textValue equals hello
    numberValue equals 42
    boolValue equals true
    nullValue equals null
    undefValue is declared but not assigned any value
    objValue equals an object with a single key label with the value sample
    arrValue equals a list with values 1, 2, 3
    fnValue equals a function that returns the text yo
  Create a list named values in this exact order:
    textValue, numberValue, boolValue, nullValue, undefValue, objValue, arrValue, fnValue

STEP 2 — Type helper
  Create a function named describeType that returns:
    the text null when the value is exactly null,
    the text array when the value is an array,
    the text function when typeof returns function,
    otherwise use the result of typeof.

STEP 3 — Display helper
  Create a function named toDisplay that tries to build a readable string:
    when the value is an object or an array, try to convert with a structured approach; if that fails, fall back to a simple approach,
    otherwise convert to a text form directly.

STEP 4 — Builder
  Create a function named buildList that removes any existing items inside outputList,
  then for each value in values creates a list item whose text is the display string, a space, a dash, a space, then the type from describeType,
  and appends it to outputList.

STEP 5 — Wiring
  When buildBtn is clicked, run buildList.
*/


const textValue = "hello";
const numberValue = 42;
const boolValue = true;
const nullValue = null;
let undefValue;
const objValue = {key: "sample"};
const arrValue = [1, 2, 3];
const fnValue = function() {
  return "yo";
}

// STEP 1
let values = [
  textValue,
  numberValue,
  boolValue,
  nullValue,
  undefValue,
  objValue,
  arrValue,
  fnValue
]

console.log(values)

//  STEP 2
function describeType(value) {
  if(value === null) {
    return "null";
  }
  if(Array.isArray(value)) {
    return "array";
  }
  if(typeof value === "function") {
    return "function";
  }
  return typeof value;
}

console.log(describeType(arrValue));


// STEP 3
/*
 - Use JSON.strinigfy() to display internal structure of object/ array
 - If JSON.stringify() fails
 - Use JS built-in function String() to display the value in text form

*/
function toDisplay(value) {
  // Exluding null since null is not an object
  if(typeof value === "object" && typeof value !== null) {
    return JSON.stringify(value);
  }

  // .toString() method displays the function as text
  if(typeof value === "function") {
    return value.toString();
  }

  if(Array.isArray(value)) {
    return JSON.stringify(value);
  }

  return String(value)
}


// STEP 4

function buildList() {
  const outputList = document.getElementById("outputList");
  outputList.innerHTML = "";

  values.forEach(value => {
    const listItems = document.createElement("li");
    listItems.classList.add('listStyle');
    listItems.textContent = toDisplay(value) + " - " + describeType(value);

    outputList.appendChild(listItems);
  })
}

function resetList() {
  const outputList = document.getElementById("outputList");
  outputList.innerHTML = "";
}

// STEP 5
const buildBtn = document.getElementById("buildBtn");
const resetBtn = document.getElementById("resetBtn");

buildBtn.addEventListener("click", () => {
  buildList();
})

