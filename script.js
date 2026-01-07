function toggleMode() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
  updateIcon();
}

function updateIcon() {
  document.querySelector(".toggle-btn").textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
}

window.onload = () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
  updateIcon();
};
