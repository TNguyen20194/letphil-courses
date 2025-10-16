/*
Mini Project — Shopping List Manager 

Goal
  Manage a list of strings with add, remove last, and clear actions; render the list and count.

Exact element ids required
  itemInput, addBtn, removeBtn, clearBtn, list, countLabel

STEP 1 — Data and selection
  Create an empty list named items.
  Select the elements by id and store them with the exact names above.

STEP 2 — Render helper
  Create a function named renderAll that clears the list, appends one list item per string in items, and updates countLabel to show Count: a space and the number of items.

STEP 3 — Add
  Create a function named handleAdd that reads trimmed text from itemInput.
  When the trimmed text is not empty, add it to the end of items and render.

STEP 4 — Remove Last
  Create a function named handleRemove that removes the last item from items when it exists and render.

STEP 5 — Clear
  Create a function named handleClear that empties items and render.

STEP 6 — Wiring
  Wire addBtn to handleAdd, removeBtn to handleRemove, and clearBtn to handleClear.
  Call renderAll once so the page reflects the current state.
*/


const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const countLabel = document.getElementById("countLabel");
const warning = document.getElementById("warning");


const items = [];

// Remove warning on input
itemInput.addEventListener("input", () => {
  warning.textContent = "";
})

// Handle RENDER
function renderAll() {

  list.innerHTML = "";

  items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);

  });

  if(items.length !== 0) {
    countLabel.innerHTML = `Count: <strong>${items.length} items</strong>`
  } else {
    countLabel.innerHTML =  "";
    itemInput.value = "";
  }

}

// Handle ADD
function handleAdd() {
  const input = itemInput.value.trim();
  warning.textContent = ""

  if(input !== ""){
    items.push(input);
    renderAll();
  } else {
    warning.textContent= "Empty value cannot be added. Please provide a valid item.";
  };

  itemInput.value = "";
}

// Remove LAST
function handleRemove() {
  warning.textContent = "";

  if(items.length > 0){
    items.pop();
    warning.textContent = "";
    renderAll();
  } else {
    warning.textContent = "There is no item in your list."
  }
}

// Handle CLEAR
function handleClear() {
  items.length = 0;
  renderAll();
  warning.textContent = "";
}

renderAll();

addBtn.addEventListener("click", handleAdd);
removeBtn.addEventListener("click", handleRemove);
clearBtn.addEventListener("click", handleClear);

