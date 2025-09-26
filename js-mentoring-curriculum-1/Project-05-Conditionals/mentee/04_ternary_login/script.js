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
    const input = ageInput.value;

    if(isNaN(input) || input < 0 || input === "") {
        result.textContent = "Please enter a valid input";
        return;
    };

    const label = input >= 18 ? "Adult" : "Minor";

    result.textContent = label;
})