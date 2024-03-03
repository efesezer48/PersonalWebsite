document.addEventListener('DOMContentLoaded', function () {
const burger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  // Toggle a class that controls the visibility of navLinks
  //burger.textContent = "Efe<br>Efe"
  navLinks.classList.toggle("active");
  // Check if navLinks is active and adjust the hamburger icon color
  if (navLinks.classList.contains("active")) {
    // Menu is open, change the hamburger icon to a different color if needed
    burger.style.backgroundColor = "rgba(158, 154, 156, 0.8)"; // Example color when menu is open
  } else {
    // Menu is closed, revert to original color
    burger.style.backgroundColor = ""; // Remove any inline background color to revert
  }
    });
});
