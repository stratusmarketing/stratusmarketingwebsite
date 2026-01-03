console.log("✅ STRATUS app.js LOADED (vFINAL)");
// app.js — Stratus “Alive” motion (v3, robust)
// Works on file:/// and GitHub Pages. Avoids "blank sections" + avoids early returns.

(() => {
  document.documentElement.classList.add("js");

  const html = document.documentElement;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

  // Respect reduced-motion user preference
  const prefersReduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  document.addEventListener("DOMContentLoaded", () => {
    /* ---------------------------
       Theme toggle (keep)
    ---------------------------- */
    const themeToggle = document.querySelector(".theme-toggle");
    try {
      const stored = localStorage.getItem("stratus-theme");
      if (stored === "light" || stored === "dark") html.setAttribute("data-theme", stored);
    } catch (_) {}

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
        html.setAttribute("data-theme", next);
        try { localStorage.setItem("stratus-theme", next); } catch (_) {}
        themeToggle.classList.add("theme-toggle-animate");
        setTimeout(() => themeToggle.classList.remove("theme-toggle-animate"), 240);
      });
    }

    /* ---------------------------
       Mobile nav
    ---------------------------- */
    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");
    if (navToggle && mainNav) {
      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-open");
        mainNav.classList.toggle("is-open");
      });
      document.querySelectorAll(".nav-link").forEach((a) => {
        a.addEventListener("click", () => {
          mainNav.classList.remove("is-open");
          navToggle.classList.remove("is-open");
        });
      });
    }

    /* ---------------------------
       Sticky header compact
    ---------------------------- */
    const header = document.querySelector(".site-header");
    const headerIntent = () => {
      if (!header) return;
      if (window.scrollY > 14) header.classList.add("is-compact");
      else header.classList.remove("is-compact");
    };
    window.addEventListener("scroll", headerIntent, { passive: true });
    headerIntent();

    /* ---------------------------
       Reveal (safe; if none exist, do nothing)
    ---------------------------- */
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (revealEls.length) {
      let lastY = window.scrollY;
      let lastT = performance.now();
      let vel = 0;

      const updateVel = () => {
        const y = window.scrollY;
        const t = performance.now();
        const dy = Math.abs(y - lastY);
        const dt = Math.max(16, t - lastT);
        vel = vel * 0.75 + (dy / dt) * 0.25;
        lastY = y; lastT = t;
      };
      window.addEventListener("scroll", updateVel, { passive: true });

      const applyRevealVars = (el) => {
        const v = clamp(vel, 0, 2.2);
        el.style.setProperty("--reveal-dur", `${Math.round(420 + v * 320)}ms`);
        el.style.setProperty("--reveal-y", `${Math.round(12 + v * 10)}px`);
        el.style.setProperty("--reveal-ease", "cubic-bezier(.2,.8,.2,1)");
      };

      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            applyRevealVars(e.target);
            e.target.classList.add("reveal-visible");
            io.unobserve(e.target);
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

        revealEls.forEach((el) => io.observe(el));
      } else {
        revealEls.forEach((el) => el.classList.add("reveal-visible"));
      }

      // never let above-the-fold stay hidden
      const force = () => {
        const vh = window.innerHeight || 800;
        revealEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.92) el.classList.add("reveal-visible");
        });
      };
      force(); setTimeout(force, 120); setTimeout(force, 450);
    }

    /* ---------------------------
       Count-ups (visible when scrolled into view)
       Supports your markup: <span class="countup" data-count="60" ...>60%</span>
    ---------------------------- */
    const counters = Array.from(document.querySelectorAll(".countup[data-count], [data-count]"));
    const ease = (x) => 1 - Math.pow(1 - x, 3);

    const animateCounter = (el) => {
      if (el.dataset._counted === "1") return;
      el.dataset._counted = "1";

      const to = Number(el.dataset.count || "0");
      const from = Number(el.dataset.from || "0");
      const dur = Number(el.dataset.duration || "900");
      const decimals = Number(el.dataset.decimals || "0");
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";

      const start = performance.now();
      const tick = (now) => {
        const t = clamp((now - start) / dur, 0, 1);
        const v = from + (to - from) * ease(t);
        el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (counters.length) {
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            animateCounter(e.target);
            io.unobserve(e.target);
          });
        }, { threshold: 0.35, rootMargin: "0px 0px -10% 0px" });

        counters.forEach((c) => io.observe(c));
      } else {
        counters.forEach(animateCounter);
      }
    }

    /* ---------------------------
       Radar tooltip pill (body-mounted) + blip firing
    ---------------------------- */
    const radar = document.querySelector(".hero-panel-radar");
    const blips = radar ? Array.from(radar.querySelectorAll(".radar-blip")) : [];

    let tip = document.querySelector(".radar-tooltip-floating");
    if (!tip) {
      tip = document.createElement("div");
      tip.className = "radar-tooltip-floating";
      document.body.appendChild(tip);
    
    // Inline fallback styles (in case CSS fails to load / is overridden)
    tip.style.cssText = "position:fixed;left:0;top:0;z-index:999999;pointer-events:none;padding:8px 10px;border-radius:999px;background:rgba(2,6,23,0.92);border:1px solid rgba(148,163,184,0.35);color:rgba(255,255,255,0.92);font-size:12px;white-space:nowrap;box-shadow:0 12px 30px rgba(0,0,0,0.35);opacity:0;visibility:hidden;transform:translateY(6px) scale(0.99);transition:opacity .14s ease, transform .14s ease, visibility .14s ease;";
}

    const hideTip = () => {
      tip.classList.remove("is-visible");
      // inline fallback reset (we set these in showTip)
      tip.style.opacity = "0";
      tip.style.visibility = "hidden";
      tip.style.transform = "translateY(6px) scale(0.99)";
      // park it offscreen so it never "hangs" during scroll
      tip.style.left = "-9999px";
      tip.style.top = "-9999px";
    };

    const showTip = (blip) => {
      const text = blip.getAttribute("data-tip") || "";
      if (!text) return;
      tip.textContent = text;
      tip.classList.add("is-visible");
    // inline fallback
    tip.style.opacity = "1";
    tip.style.visibility = "visible";
    tip.style.transform = "translateY(0) scale(1)";

      // measure
      tip.style.left = "0px";
      tip.style.top = "0px";
      const tRect = tip.getBoundingClientRect();

      const b = blip.getBoundingClientRect();
      let x = b.left + b.width / 2 - tRect.width / 2;
      let y = b.top - tRect.height - 10;

      const pad = 10;
      x = clamp(x, pad, window.innerWidth - tRect.width - pad);
      y = clamp(y, pad, window.innerHeight - tRect.height - pad);

      tip.style.left = `${Math.round(x)}px`;
      tip.style.top = `${Math.round(y)}px`;
    };

    if (radar && blips.length) {
      // Fallback: proximity hover (works even if overlays intercept events)
      // On mouse move over the radar, find the closest blip center and show its tooltip.
      if (!prefersReduced) {
        let activeBlip = null;
        const threshold = 26; // px radius for "hover"
        const centers = () => blips.map(b => {
          const r = b.getBoundingClientRect();
          return { b, cx: r.left + r.width/2, cy: r.top + r.height/2 };
        });

        let cached = centers();
        const recache = () => { cached = centers(); };

        const onMove = (e) => {
          // If native events are working, they'll keep this updated too — this is just a safety net.
          let best = null;
          let bestD = 1e9;
          for (const it of cached) {
            const dx = e.clientX - it.cx;
            const dy = e.clientY - it.cy;
            const d = Math.sqrt(dx*dx + dy*dy);
            if (d < bestD) { bestD = d; best = it.b; }
          }
          if (best && bestD <= threshold) {
            if (activeBlip !== best) {
              activeBlip = best;
              showTip(best);
            } else {
              showTip(best);
            }
          } else {
            activeBlip = null;
            hideTip();
          }
        };

        radar.addEventListener("mousemove", onMove, { passive: true });
        radar.addEventListener("mouseenter", recache, { passive: true });
        radar.addEventListener("mouseleave", () => { activeBlip = null; hideTip(); }, { passive: true });
        window.addEventListener("resize", recache, { passive: true });
        // recache after fonts/layout settle
        setTimeout(recache, 200);
      }


      blips.forEach((blip) => {
        blip.addEventListener("mouseenter", () => showTip(blip));
        blip.addEventListener("mousemove", () => showTip(blip));
        blip.addEventListener("mouseleave", hideTip);
        blip.addEventListener("click", (e) => {
          e.preventDefault();
          showTip(blip);
          clearTimeout(blip._t);
          blip._t = setTimeout(hideTip, 1400);
        });
      });
      window.addEventListener("scroll", hideTip, { passive: true });
      window.addEventListener("resize", hideTip, { passive: true });

      // fire blips once per rotation (visible pulse)
      const sweepMs = 5200;
      const offsets = [0.18, 0.48, 0.72];
      const fire = (b) => {
        b.classList.add("radar-blip-active");
        setTimeout(() => b.classList.remove("radar-blip-active"), 650);
      };
      const loop = () => {
        blips.forEach((b, i) => setTimeout(() => fire(b), Math.round(sweepMs * offsets[i % offsets.length])));
      };
      loop();
      setInterval(loop, sweepMs);
    }

    /* ---------------------------
       Pipeline sequential activation (auto + hover/tap)
    ---------------------------- */
    const steps = Array.from(document.querySelectorAll(".hero-system-steps .hero-step"));
    const pipeWrap = document.querySelector(".hero-system-pipeline") || document.querySelector(".hero-system-steps");

    const runPipeline = () => {
      if (!steps.length) return;

      steps.forEach((s) => {
        s.classList.remove("is-active");
        s.classList.remove("is-success");
      });

      let i = 0;
      const tick = () => {
        if (i < steps.length) {
          steps[i].classList.add("is-active");
          i++;
          setTimeout(tick, 520);
        } else {
          const last = steps[steps.length - 1];
          last.classList.add("is-success");
          setTimeout(() => last.classList.remove("is-success"), 950);
        }
      };
      tick();
    };

    runPipeline();
    setInterval(runPipeline, 9000);

    if (pipeWrap) {
      ["mouseenter", "click", "touchstart"].forEach((evt) => {
        pipeWrap.addEventListener(evt, runPipeline, { passive: true });
      });
    }
  });
})();
