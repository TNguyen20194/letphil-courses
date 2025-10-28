// =============================================================
// Mini Project — Contact Card
// =============================================================

/*
STEP 1 — Create these DOM references (exact names):
  - const form = document.getElementById("contactForm")
  - const contactsList = document.getElementById("contacts")
  - const status = document.getElementById("status")
  - const clearBtn = document.getElementById("clearBtn")
*/

const form = document.getElementById("contactForm");
const contactsList = document.getElementById("contacts");
const status = document.getElementById("status");
const clearBtn = document.getElementById("clearBtn");

/*
STEP 2 — Write a helper function named createContactCard(dataObject)
  - Function name: createContactCard
  - Parameter: an object with keys { first, last, email, phone, fav }
  - Returns: a <div> element with class "contact" (the card)

  Inside createContactCard:
    STEP 2A — Compute initials (variable name: initials)
    STEP 2B — Create the outer <div> (variable name: card)
    STEP 2C — Fill card content with these classes:
        - avatar
        - contact-body
        - name
        - meta
        - badge (only if fav is true)
    STEP 2D — return card
*/

const testObject = {
  first: "John",
  last: "Doe",
  email: "john.doe@email.com",
  phone: 0123456789,
  fav: "Coding"
}

function createContactCard(dataObject) {
  // object destructuring
  const {first, last, email, phone, fav} = dataObject;

  const f = first ? first.trim() : "";
  const l = last ? last.trim() : "";

  const initials = `${f ? f[0] : null}${l ? l[0] : null}`.toUpperCase();

  const card = document.createElement("div");
  card.className = "contact";

  card.innerHTML = `
    <div class="avatar">${initials}</div>
    <div class="contact-body">
      <div class="name">${first} ${last}</div>
          <div class="meta">
            <p class="email">${email}</p>
            <p class="phone">${phone}</p>
          </div>
    </div>
    ${fav ? `<div class="badge"></div>` : ""}
  `;

  console.log(card)

  return card;
};

/*
STEP 3 — Write a helper function named showToast()
  - Function name: showToast
  - Action: unhides #status, then hides it after 2000ms
*/
function showToast() {
  status.hidden = false;

  setTimeout(() => {
    status.hidden = true;
  }, 2000
  )
};


/*
STEP 4 — Write a helper function named removeEmptyState()
  - Function name: removeEmptyState
  - Action: if an element with class ".empty" exists inside #contacts, remove it
*/
function removeEmptyState() {
  const emptyMessage = contactsList.querySelector(".empty");

  if(emptyMessage) {
    emptyMessage.remove();
  }
};

/*
STEP 5 — Write a helper function named restoreEmptyState()
  - Function name: restoreEmptyState
  - Action: replace the innerHTML of #contacts with the default empty-state block
*/

function restoreEmptyState() {
  contactsList.innerHTML = `
  <div class="empty">No contacts yet - add your first one!</div>
  `
};

/*
STEP 6 — Add a "submit" listener on form that runs an inline function
  - Read inputs into exact variable names:
      first, last, email, phone, fav
  - Build a card with createContactCard({ first, last, email, phone, fav })
  - Call removeEmptyState(), then append the new card to contactsList
  - Call showToast(), then reset the form
*/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const first = document.getElementById("firstName");
  const last = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document. getElementById("phone");
  const fav = document.getElementById("fav");

  const dataObject = {
    first: first.value,
    last: last.value,
    email: email.value,
    phone: phone.value,
    fav: fav.checked
  }

  const card = createContactCard(dataObject);
  removeEmptyState();

  contactsList.appendChild(card);
  showToast();
  form.reset();
})

/*
STEP 7 — Add a "click" listener on clearBtn
  - When clicked, call restoreEmptyState()
*/
clearBtn.addEventListener("click", () => {
  restoreEmptyState();
})
