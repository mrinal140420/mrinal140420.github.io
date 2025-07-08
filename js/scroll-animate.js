// scroll-animate.js
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute("data-delay") || "0s";
          const direction = el.getAttribute("data-direction") || "up";

          el.style.transitionDelay = delay;
          el.classList.add("animate-visible", `animate-${direction}`);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
});
