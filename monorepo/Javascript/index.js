const form = document.getElementById("checkboxForm");
const shuffleBtn = document.getElementById("shuffleBtn");
const changeBtn = document.getElementById("changeBtn");
const showSelectedBtn = document.getElementById("showSelectedBtn");
const selectedValuesDiv = document.getElementById("selectedValues");

function shuffleValues() {
  const checkboxes = Array.from(
    form.querySelectorAll('input[type="checkbox"]')
  );
  checkboxes.sort(() => Math.random() - 0.5);
  checkboxes.forEach((checkbox) => form.appendChild(checkbox.parentNode));
}

function changeValues() {
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const newValues = ["Web Development", "Marketing", "Sales", "Design"];

  checkboxes.forEach((checkbox, index) => {
    checkbox.value = newValues[index];
    checkbox.nextSibling.textContent = newValues[index];
  });
}

function showSelectedValues() {
  const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
  const selectedValues = Array.from(checkboxes).map(
    (checkbox) => checkbox.value
  );
  selectedValuesDiv.textContent =
    "Selected Values: " + selectedValues.join(", ");
}

shuffleBtn.addEventListener("click", shuffleValues);
changeBtn.addEventListener("click", changeValues);
showSelectedBtn.addEventListener("click", showSelectedValues);
