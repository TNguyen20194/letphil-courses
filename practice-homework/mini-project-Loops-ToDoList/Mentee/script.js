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

<<<<<<< HEAD

const tasks = ["Study", "Exercise", "Clean up", "Do magic", "Listen to music"];

const generateBtn = document.getElementById("btnGenerate");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


generateBtn.addEventListener("click", () =>{
    taskList.innerHTML = "";

    // +++ FOR LOOP METHOD +++
    for(let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `(for loop): ${tasks[i]}`;
        taskList.appendChild(listItem)
    };

    // +++ WHILE LOOP METHOD +++
    let taskIndex = 0;
    while(taskIndex < tasks.length) {
        const listItem = document.createElement("li");
        listItem.textContent = `(while loop): ${tasks[taskIndex]}`;
        taskList.appendChild(listItem);
        taskIndex++;
    }

    // +++ FOR OF LOOP METHOD +++
    for(const value of tasks){
        const listItem = document.createElement("li");
        listItem.textContent = `(for...of loop): ${value}`;
        taskList.appendChild(listItem)
    }

    // +++ forEach LOOP METHOD +++
    tasks.forEach(value => {
        const listItem = document.createElement("li");
        listItem.textContent = `(forEach): ${value}`;
        taskList.appendChild(listItem)
    })

    taskCount.innerHTML = `The total task count is: <strong>${tasks.length} tasks</strong> `
})

=======
const tasks = [
  "do the dishes",
  "Take gargabe out",
  "Clean my room",
  "Do homework",
  "Take a shower",
];

const btn = document.getElementById("btnGenerate");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

btn.addEventListener("click", () => {
  taskList.innerHTML = "";
  taskCount.textContent = "";

  for (let i = 0; i < tasks.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `(for loop) ${tasks[i]}`;
    taskList.appendChild(listItem);
  }

  let i = 0;
  while (i < tasks.length) {
    const li = document.createElement("li");
    li.textContent = `(while) ${tasks[i]}`;
    taskList.appendChild(li);
    i++;
  }

  for (let task of tasks) {
    const li = document.createElement("li");
    li.textContent = `(for...of) ${task}`;
    taskList.appendChild(li);
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = `(forEach) ${task}`;
    taskList.appendChild(li);
  });
});
>>>>>>> upstream/main
