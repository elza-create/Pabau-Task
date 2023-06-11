const form = document.getElementById("checkboxForm");
const shuffleBtn = document.getElementById("shuffleBtn");
const changeBtn = document.getElementById("changeBtn");

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

shuffleBtn.addEventListener("click", shuffleValues);
changeBtn.addEventListener("click", changeValues);
