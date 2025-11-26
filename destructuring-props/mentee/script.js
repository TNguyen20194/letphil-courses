,e// Project-01 — Passing "Props" & Destructuring
// -------------------------------------------------------------
// In this project, you will practice:
// - treating objects like "props" passed into functions
// - OBJECT DESTRUCTURING (including nested)
// - ARRAY DESTRUCTURING
// - using functions, array methods, and DOM updates
//
// This file contains ONLY instructions. Turn each STEP into real code.

// 🧠 STEP 1 — SETUP: SELECT ELEMENTS & DEFINE DATA
//
// 1. Use document.getElementById(...) to select:
//
//    - searchInput        (id="searchInput")
//    - highlightJsBtn     (id="highlightJsBtn")
//    - resetHighlightBtn  (id="resetHighlightBtn")
//    - helperStatus       (id="helperStatus")
//
//    - cardsGrid          (id="cardsGrid")
//    - emptyState         (id="emptyState")
//    - selectedDetails    (id="selectedDetails")
//
// 2. Use document.querySelectorAll(...) to select all level filter chips:
//      const levelChips = document.querySelectorAll(".chip[data-level]");
//
// 3. Create a const named students and set it to an ARRAY OF OBJECTS.
//    Each student object should have at least:
//
//      {
//        id: number,
//        name: string,
//        role: string,          // e.g. "Frontend Dev", "Beginner JS"
//        level: string,         // "beginner" | "intermediate" | "advanced"
//        favoriteLang: string,  // e.g. "JavaScript"
//        hoursPerWeek: number,  // study hours
//        skills: array of strings,   // e.g. ["HTML", "CSS", "JavaScript"]
//        location: {
//          city: string,
//          timezone: string
//        }
//      }
//
//    Create at least 4–6 students with different data so filters are visible.
//
// 4. Create a let variable named currentLevelFilter and set it to "all".
// 5. Create a let variable named currentSearchTerm and set it to "".
// 6. Create a let boolean named highlightJsFans and set it to false.

// 🧠 STEP 2 — HELPER: UPDATE STATUS TEXT
//
// 1. Define a function named setHelperStatus that receives one parameter: message.
// 2. Inside, set helperStatus.textContent = message.
// 3. If message is a non-empty string, you can add a class "highlight" to helperStatus.
//    If message is empty, remove that class.

// 🧠 STEP 3 — CORE IDEA: PASSING "PROPS" & OBJECT DESTRUCTURING
//
// You will create functions that receive a SINGLE OBJECT PARAMETER and destructure it.
//
// 1. Define a function named buildStudentTagline that receives one parameter:
//      studentProps
//
// 2. Inside the function, use OBJECT DESTRUCTURING in the parameter line.
//    For example (you will actually write it when implementing):
//      function buildStudentTagline({ name, favoriteLang, hoursPerWeek }) { ... }
//
// 3. Use the destructured variables to build a string like:
//      `${name} is focusing on ${favoriteLang} ~ ${hoursPerWeek}h/week`
//
// 4. Return that string.
//
// 5. Define a second function named getLocationSummary that destructures
//    a NESTED OBJECT. It should receive one parameter: student.
//
//    Inside the parameter list, destructure:
//
//      - name
//      - location: { city, timezone }
//
//    Then return a string like:
//      `${name} is studying from ${city} (${timezone}).`
//
//    Again, focus on destructuring in the parameter list.

// 🧠 STEP 4 — ARRAY DESTRUCTURING FOR SKILLS
//
// 1. Define a function named getTopSkillsSummary that receives a student object.
//
// 2. Inside the function:
//
 

// 🧠 STEP 5 — FILTERING STUDENTS (ARRAY METHODS + DESTRUCTURING)
//
// 1. Define a function named getVisibleStudents (no parameters).
//
// 2. Inside:
//
//    - Start with a const named filteredByLevel that filters the students array
//      based on currentLevelFilter:
//
//        - If currentLevelFilter is "all", keep all students.
//        - Otherwise, only keep students where student.level === currentLevelFilter.
//
//    - Then create a const named filteredBySearch:
//        - If currentSearchTerm is empty, just use filteredByLevel.
//        - Else, filter filteredByLevel again so that:
//            - student.name.toLowerCase() includes currentSearchTerm.toLowerCase()
//
//    - Return filteredBySearch.

// 🧠 STEP 6 — RENDERING A SINGLE CARD USING DESTRUCTURING
//
// 1. Define a function named createStudentCard that receives a single parameter:
//      student
//
// 2. In the PARAMETER list, use OBJECT DESTRUCTURING with RENAMING, e.g.:
//
//      function createStudentCard({
//        id,
//        name,
//        role,
//        level,
//        favoriteLang,
//        hoursPerWeek,
//        skills,
//        location: { city }
//      }) { ... }
//
//    This is the core "props + destructuring" idea.
//
// 3. Inside the function:
//
//    - Create a <article> element and assign it class "student-card".
//    - Set a data-id attribute to the id.
//
//    - Create a header <div> with class "student-header".
//      Inside, create:
//        • <span class="student-name"> with the name.
//        • <span class="student-role"> with the role.
//
//    - Create a <p class="student-tagline"> and set its textContent
//      to the result of buildStudentTagline( /* pass an object with at least
//      name, favoriteLang, hoursPerWeek */ ).
//
//      NOTE: Here you can practice calling buildStudentTagline in two ways:
//        - with a full student object
//        - or by passing a smaller "props" object like:
//              { name, favoriteLang, hoursPerWeek }
//
//    - Create a <div class="pill-row"> for level + hours + city:
//
//        • Level pill:
//            - <span class="pill level-..."> e.g. "Beginner"
//              Class should depend on level:
//                "level-beginner", "level-intermediate", or "level-advanced".
//
//        • Hours pill:
//            - <span class="pill pill-hours"> e.g. "6 h/week"
//
//        • City pill:
//            - <span class="pill pill-city"> e.g. city name.
//
//    - Create a <div class="skills"> and for each skill string in the skills array,
//      create a <span class="skill-tag"> with the skill text.
//
//    - If highlightJsFans is true AND favoriteLang is "JavaScript":
//        - You can add an inline style or extra class to the card
//          to make it stand out (e.g. a subtle border or glow).
//
//    - Add a click event listener to the card:
//        • When clicked, call a function showSelectedStudentSummary(student).
//
//    - RETURN the card element.

// 🧠 STEP 7 — RENDER ALL CARDS
//
// 1. Define a function named renderStudents (no parameters).
//
// 2. Inside:
//
//    - Clear the cardsGrid: cardsGrid.innerHTML = "";
//
//    - Call getVisibleStudents() and store the result in a const named visibleStudents.
//
//    - If visibleStudents.length === 0:
//        • Make sure emptyState is visible (append it to cardsGrid).
//        • Return.
//
//    - Otherwise:
//        • Hide or remove emptyState (you can just not append it).
//
//    - Loop over visibleStudents with forEach:
//
//        • For each student, call createStudentCard(student)
//        • Append the returned card into cardsGrid.

// 🧠 STEP 8 — SHOW SELECTED STUDENT SUMMARY (DESTRUCTURED PARAMS)
//
// 1. Define a function named showSelectedStudentSummary that receives ONE PARAMETER.
//    In the parameter list, use destructuring again:
//
//       function showSelectedStudentSummary({
//         name,
//         level,
//         favoriteLang,
//         hoursPerWeek,
//         location: { city, timezone }
//       }) { ... }
//
// 2. Inside, build a multi-line string that uses:
//
//      - buildStudentTagline(...) for the first line.
//      - getLocationSummary(...) for the second line.
//      - getTopSkillsSummary(...) for the third line.
//
//    Example structure:
//
//      `${buildStudentTagline({ name, favoriteLang, hoursPerWeek })}
//       ${getLocationSummary({ name, location: { city, timezone } })}
//       ${getTopSkillsSummary(fullStudentObjectHere)}`
//
// 3. Set selectedDetails.textContent to that string.

// 🧠 STEP 9 — EVENT HANDLERS (FILTERS + HIGHLIGHT + SEARCH)
//
// 1. For level filter chips (levelChips NodeList):
//    - Loop over them with forEach.
//    - For each chip, add a "click" event listener.
//    - Inside the listener:
//        • Read the level from chip.dataset.level.
//        • Update currentLevelFilter.
//        • Remove "active" class from all chips.
//        • Add "active" to the clicked chip.
//        • Call renderStudents().
//
// 2. For searchInput:
//    - Add an "input" event listener.
//    - Inside, update currentSearchTerm with searchInput.value.
//    - Call renderStudents().
//
// 3. For highlightJsBtn:
//    - Set highlightJsFans = true.
//    - Call setHelperStatus("Highlighting JavaScript lovers ✨");
//    - Call renderStudents().
//
// 4. For resetHighlightBtn:
//    - Set highlightJsFans = false.
//    - Call setHelperStatus("") to clear.
//    - Call renderStudents().

// 🧠 STEP 10 — INIT ON PAGE LOAD
//
// At the bottom of this file:
//
// 1. Optionally call setHelperStatus with a small hint like:
//      "Click on a card to see a destructured summary."
//
// 2. Call renderStudents() once so that the initial cards show up.
//
// That’s it! You’ve now practiced:
// - Passing "props" as objects
// - Destructuring in parameters and inside functions
// - Nested destructuring
// - Array destructuring
// - DOM + events + array methods working together.

const searchInput = document.getElementById("searchInput");
const highlightJsBtn = document.getElementById("highlightJsBtn");
const resetHighlightBtn = document.getElementById("resetHighlightBtn");
const helperStatus = document.getElementById("helperStatus");
const cardsGrid = document.getElementById("cardsGrid");
const emptyState = document.getElementById("emptyState");
const selectedDetails = document.getElementById("selectedDetails");

const levelChips = document.querySelectorAll(".chip[data-level]");

const students = [
  {
    id: 1,
    name: "Truong",
    role: "Beginner JS", // e.g. "Frontend Dev", "Beginner JS"
    level: "beginner", // "beginner" | "intermediate" | "advanced"
    favoriteLang: "JavaScript", // e.g. "JavaScript"
    hoursPerWeek: 8, // study hours
    skills: "['HTML','TypeScript', 'Git', 'SQL']", // e.g. ["HTML", "CSS", "JavaScript"]
    location: {
      city: "Toronto",
      timezone: "EST",
    },
  },
  {
    id: 2,
    name: "Maria",
    role: "Advanced JS", // e.g. "Frontend Dev", "Beginner JS"
    level: "advanced", // "beginner" | "intermediate" | "advanced"
    favoriteLang: "JavaScript", // e.g. "JavaScript"
    hoursPerWeek: 4, // study hours
    skills: "['HTML','CSS', 'JavaScript', React']", // e.g. ["HTML", "CSS", "JavaScript"]
    location: {
      city: "Miami",
      timezone: "EST",
    },
  },
  {
    id: 3,
    name: "Trong",
    role: "React Explorer", // e.g. "Frontend Dev", "Beginner JS"
    level: "intermediate", // "beginner" | "intermediate" | "advanced"
    favoriteLang: "SQL", // e.g. "JavaScript"
    hoursPerWeek: 6, // study hours
    skills: "['HTML','CSS', 'JavaScript','React','SQL']", // e.g. ["HTML", "CSS", "JavaScript"]
    location: {
      city: "Atlanta",
      timezone: "EST",
    },
  },
  {
    id: 4,
    name: "Luis",
    role: "API Master", // e.g. "Frontend Dev", "Beginner JS"
    level: "beginner", // "beginner" | "intermediate" | "advanced"
    favoriteLang: "JavaScript", // e.g. "JavaScript"
    hoursPerWeek: 8, // study hours
    skills: "['JavaScript','REST Apis', 'Python']", // e.g. ["HTML", "CSS", "JavaScript"]
    location: {
      city: "Mexico",
      timezone: "EST",
    },
  },
];


let currentLevelFilter = "all";
let currentSearchTerm = "";
let highlightJsFans = false;

function setHelperStatus(message){
helperStatus.textContent = message;
helperStatus.classList.remove("highlight");
if(message){
helperStatus.classList.add("highlight");
}
};


function buildStudentTagLine({name, favoriteLang, hoursPerWeek}) {
    return `${name} is focusing on ${favoriteLang} ~ ${hoursPerWeek}h/week`
};

function getLocationSummary({name, location: {city, timezone}}) {
    return `${name} is studying from ${city} (${timezone}).`;
}

function getTopSkillsSummary(student) {
    const {skills} = student;

    const [firstSkill, secondSkill] = skills;
    const safeFirst = firstSkill || "N/A";
    const safeSecond = secondSkill || "N/A";
    return  `Top skills: ${safeFirst}, ${safeSecond}`;
    
    
    
}
    



// STEP 5 — FILTERING STUDENTS (ARRAY METHODS + DESTRUCTURING)
//
// 1. Define a function named getVisibleStudents (no parameters).
//
// 2. Inside:
//
//    - Start with a const named filteredByLevel that filters the students array
//      based on currentLevelFilter:
//
//        - If currentLevelFilter is "all", keep all students.
//        - Otherwise, only keep students where student.level === currentLevelFilter.
//
//    - Then create a const named filteredBySearch:
//        - If currentSearchTerm is empty, just use filteredByLevel.
//        - Else, filter filteredByLevel again so that:
//            - student.name.toLowerCase() includes currentSearchTerm.toLowerCase()
//
//    - Return filteredBySearch.

function getVisibleStudents () {
    let filteredByLevel = students;
    if(currentLevelFilter !== "all") {
        filteredByLevel = students.filter((student) => student.level === currentLevelFilter);


    }

    // const filteredByLevel = students.filter((student) => {
    //     if(currentLevelFilter !== "all") {
    //         student.level === currentLevelFilter
    //     }
    // })
}




// 🧠 STEP 6 — RENDERING A SINGLE CARD USING DESTRUCTURING
//
// 1. Define a function named createStudentCard that receives a single parameter:
//      student
//
// 2. In the PARAMETER list, use OBJECT DESTRUCTURING with RENAMING, e.g.:
//
//      function createStudentCard({
//        id,
//        name,
//        role,
//        level,
//        favoriteLang,
//        hoursPerWeek,
//        skills,
//        location: { city }
//      }) { ... }
//
//    This is the core "props + destructuring" idea.
//
// 3. Inside the function:
//
//    - Create a <article> element and assign it class "student-card".
//    - Set a data-id attribute to the id.
//
//    - Create a header <div> with class "student-header".
//      Inside, create:
//        • <span class="student-name"> with the name.
//        • <span class="student-role"> with the role.
//
//    - Create a <p class="student-tagline"> and set its textContent
//      to the result of buildStudentTagline( /* pass an object with at least
//      name, favoriteLang, hoursPerWeek */ ).
//
//      NOTE: Here you can practice calling buildStudentTagline in two ways:
//        - with a full student object
//        - or by passing a smaller "props" object like:
//              { name, favoriteLang, hoursPerWeek }
//
//    - Create a <div class="pill-row"> for level + hours + city:
//
//        • Level pill:
//            - <span class="pill level-..."> e.g. "Beginner"
//              Class should depend on level:
//                "level-beginner", "level-intermediate", or "level-advanced".
//
//        • Hours pill:
//            - <span class="pill pill-hours"> e.g. "6 h/week"
//
//        • City pill:
//            - <span class="pill pill-city"> e.g. city name.
//
//    - Create a <div class="skills"> and for each skill string in the skills array,
//      create a <span class="skill-tag"> with the skill text.
//
//    - If highlightJsFans is true AND favoriteLang is "JavaScript":
//        - You can add an inline style or extra class to the card
//          to make it stand out (e.g. a subtle border or glow).
//
//    - Add a click event listener to the card:
//        • When clicked, call a function showSelectedStudentSummary(student).
//
//    - RETURN the card element.