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

document.querySelectorAll(".nav-links a, .mobile-sidebar-nav a").forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

/* ── MOBILE SLIDE‑IN SIDEBAR ── */
const navToggle = document.querySelector(".nav-toggle");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("sidebarOverlay");
const closeBtn = document.getElementById("sidebarClose");

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
  navToggle.classList.add("nav-toggle--open");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
  navToggle.classList.remove("nav-toggle--open");
  document.body.style.overflow = "";
}

if (navToggle && sidebar && overlay && closeBtn) {
  navToggle.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // Close when a nav link inside the sidebar is clicked
  sidebar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeSidebar);
  });
}