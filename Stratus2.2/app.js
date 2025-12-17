// Apply theme ASAP
(function initTheme(){
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }
})();

function toggleTheme(){
  const html = document.documentElement;
  const cur = html.getAttribute("data-theme") || "dark";
  const next = (cur === "dark") ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// Mobile menu
function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;
  menu.classList.toggle("open");
}

// Reveal animations + year
window.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("reveal--in");
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.14});
  els.forEach(el=>io.observe(el));

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Close mobile menu when clicking a link (mobile)
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", ()=> menu.classList.remove("open"));
    });
  }
});
