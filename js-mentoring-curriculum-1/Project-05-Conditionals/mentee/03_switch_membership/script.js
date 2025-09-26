// GOAL: Use a switch statement to show benefits based on a selected membership tier.
//
// STEP 1: GET ELEMENTS
// - select#tierSelect, button#showBtn, p#result
//
// STEP 2: ADD CLICK LISTENER
// - Read the current value of the select (e.target.value or tierSelect.value).
//
// STEP 3: SWITCH ON THE SELECTED VALUE
// - case "bronze": result = "Bronze: Basic support."
// - case "silver": result = "Silver: Priority support + discounts."
// - case "gold": result = "Gold: 24/7 support + VIP access."
// - default: result = "Unknown tier."
//
// STEP 4: DISPLAY THE BENEFITS IN result.textContent


const tierSelect = document.getElementById("tierSelect");
const showBtn = document.getElementById("showBtn");
const result = document.getElementById("result");


showBtn.addEventListener("click", () => {
    let tier = tierSelect.value;

    switch(tier) {
        case "bronze":
            tier = "Bronze: Basic support.";
            break;
        case "silver":
            tier = "Silver: Priority support + discounts."
            break;
        case "gold":
            tier = "Gold: 24/7 support + VIP access."
            break;
        default:
            tier = "Unknown tier"
    };

    result.textContent = tier;
})