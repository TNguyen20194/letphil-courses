// ===================== MENTEE — INSTRUCTIONAL STEPS =====================
// Goal: Practice different types of loops by generating a to-do list.

// STEP 1 — Create an array with 5 tasks (strings).
// STEP 2 — Select button (#btnGenerate), ul (#taskList), and p (#taskCount).
// STEP 3 — Add click event listener to button.
// STEP 4 — Inside the event:
//   - Clear the list.
//   - Use a for loop to add tasks with prefix "(for)".
//   - Use a while loop to add tasks with prefix "(while)".
//   - Use for...of to add tasks with prefix "(for...of)".
//   - Use forEach to add tasks with prefix "(forEach)".
// STEP 5 — Show total task count in #taskCount.


const tasks = ["Study", "Exercise", "Clean up", "Do magic", "Listen to music"];

const generateBtn = document.getElementById("btnGenerate");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


generateBtn.addEventListener("click", () =>{
    taskList.innerHTML = "";

    for(let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = tasks[i];
        taskList.appendChild(listItem)
    };
    
    taskCount.innerHTML = `The total task count is: <strong>${tasks.length}</strong> tasks`
})