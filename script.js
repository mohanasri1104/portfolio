const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    toggleBtn.innerHTML = "☀ Light";
  } else {
    toggleBtn.innerHTML = "🌙 Dark";
  }
});
