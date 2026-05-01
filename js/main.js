/* ── SCROLL REVEAL ── */
const revealCards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 80);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealCards.forEach(card => cardObserver.observe(card));

/* ── HEADER SCROLL STATE ── */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ── ACTIVE NAV LINK ── */
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});