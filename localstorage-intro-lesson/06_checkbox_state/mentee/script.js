// 🧠 STEP 1: SELECT THE CHECKBOX ELEMENT
// Use document.getElementById() to select the checkbox (id="subscribeCheckbox").

// 💾 STEP 2: LOAD CHECKED STATE FROM localStorage
// Use localStorage.getItem("isSubscribed") to see if it was saved as "true" or "false".
// If "true", set checkbox.checked = true.

// 🎯 STEP 3: SAVE CHECKED STATE WHEN USER TOGGLES THE BOX
// Add a "change" event listener to the checkbox.
// Inside the listener:
// - Get the current checkbox state (true or false)
// - Save it using localStorage.setItem("isSubscribed", value)


const checkbox = document.getElementById("subscribeCheckbox");
const statusText = document.getElementById("statusText");
const resetBtn = document.getElementById("resetBtn");

const checkState = localStorage.getItem("isSubscribed");

if(checkState) {
    checkbox.checked = true;
};

// Checkbox functionality
checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;

    if(isChecked) {
        statusText.textContent = "Subscribed!"
    } else {
        statusText.textContent = "Not subscribed"
    };

    localStorage.setItem("isSubscribed", isChecked);
});

// Reset Btn functionality
resetBtn.addEventListener("click", () => {
    if(checkState) {
        checkbox.checked = false;
        statusText.textContent = "Not subscribed";
        localStorage.removeItem("isSubscribed");
    }

})
