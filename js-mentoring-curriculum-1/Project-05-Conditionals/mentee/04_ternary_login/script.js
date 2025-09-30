// GOAL: Use the ternary operator to show "Adult" or "Minor" based on age.
//
// STEP 1: GET ELEMENTS
// - input#ageInput, button#checkBtn, p#result

//
// STEP 2: ADD CLICK LISTENER
// - Convert input value to Number.
// - Validate (Number.isNaN). If invalid, show a helpful message and stop.
//
// STEP 3: TERNARY
// - Create a variable called label:
//   label = (age >= 18) ? "Adult" : "Minor"
//
// STEP 4: DISPLAY label IN result.textContent

const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  let age = ageInput.valueAsNumber;
  let message = Number.isNaN(age) ? "Please provide a valid input" : "";
  if (message) {
    result.textContent = message;
    return;
  }

  let label = age >= 18 ? "Adult" : "Minor";
  result.textContent = label;
});
