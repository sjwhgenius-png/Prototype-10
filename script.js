// footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// mobile menu toggle
const toggleBtn = document.querySelector(".nav__toggle");
const navMenu = document.getElementById("navMenu");

function setMenu(open) {
  if (!toggleBtn || !navMenu) return;
  navMenu.classList.toggle("is-open", open);
  toggleBtn.setAttribute("aria-expanded", String(open));
}

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    setMenu(!navMenu.classList.contains("is-open"));
  });

  // close menu when a link is clicked
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setMenu(false));
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInside = navMenu.contains(e.target) || toggleBtn.contains(e.target);
    if (!clickedInside) setMenu(false);
  });
}
