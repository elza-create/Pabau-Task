const form = document.getElementById("checkboxForm");
const shuffleBtn = document.getElementById("shuffleBtn");

function shuffleValues() {
  const checkboxes = Array.from(
    form.querySelectorAll('input[type="checkbox"]')
  );
  checkboxes.sort(() => Math.random() - 0.5);
  checkboxes.forEach((checkbox) => form.appendChild(checkbox.parentNode));
}

shuffleBtn.addEventListener("click", shuffleValues);
