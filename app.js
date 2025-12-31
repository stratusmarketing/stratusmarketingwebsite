// app.js

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const logo = document.getElementById("brand-logo");

  // --- Theme init ---
  const storedTheme = localStorage.getItem("stratus-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    html.setAttribute("data-theme", storedTheme);
  } else {
    html.setAttribute("data-theme", "dark");
  }
  updateLogo();

  // --- Theme toggle ---
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current =
        html.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";

      html.setAttribute("data-theme", next);
      localStorage.setItem("stratus-theme", next);

      // Click animation
      themeToggle.classList.add("theme-toggle-animate");
      updateLogo();
      setTimeout(
        () => themeToggle.classList.remove("theme-toggle-animate"),
        280
      );
    });
  }

  function updateLogo() {
    if (!logo) return;
    const theme = html.getAttribute("data-theme") || "dark";
    if (theme === "light") {
      logo.src = "assets/logo-stratus-light.png";
    } else {
      logo.src = "assets/logo-stratus-dark.png";
    }
  }

  // --- Mobile nav ---
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("is-open");
      mainNav.classList.toggle("is-open");
    });
  }

  // Close nav on link click (mobile)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (mainNav && mainNav.classList.contains("is-open")) {
        mainNav.classList.remove("is-open");
        if (navToggle) navToggle.classList.remove("is-open");
      }
    });
  });

  // --- Reveal animations ---
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback
    revealEls.forEach(el => el.classList.add("reveal-visible"));
  }

  // --- Radar blip timing (ping when sweep passes) ---
  const radarBlips = document.querySelectorAll(".radar-blip");
  if (radarBlips.length) {
    const SWEEP_DURATION = 4500;       // matches CSS radar-sweep duration
    const BLIP_PING_DURATION = 900;    // must match @keyframes length
    const STAGGER = 400;               // ms between each blip ping

    function pingBlips() {
      radarBlips.forEach((blip, index) => {
        const delay = index * STAGGER;
        setTimeout(() => {
          blip.classList.add("radar-blip-active");
          setTimeout(() => {
            blip.classList.remove("radar-blip-active");
          }, BLIP_PING_DURATION);
        }, delay);
      });
    }

    // Kick off immediately, then loop with the sweep
    pingBlips();
    setInterval(pingBlips, SWEEP_DURATION);
  }
});
