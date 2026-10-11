const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((el) => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.classList.toggle("open");
  mobileNav.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  menuButton.classList.remove("open");
  mobileNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
