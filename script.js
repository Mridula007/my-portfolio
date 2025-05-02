// Dark Mode Toggle
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
