
// Toggle dark/light mode function toggleMode() { document.body.classList.toggle("light-mode"); const toggleBtn = document.querySelector(".toggle-btn"); toggleBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙"; }

// On load, set default toggle icon window.onload = () => { const toggleBtn = document.querySelector(".toggle-btn"); toggleBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙"; };

