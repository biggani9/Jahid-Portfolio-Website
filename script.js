const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const i = menuToggle.querySelector("i");
  i.classList.toggle("fa-bars");
  i.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const i = menuToggle.querySelector("i");
    i.classList.add("fa-bars");
    i.classList.remove("fa-xmark");
  }),
);

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

function updateThemeIcon() {
  const d = document.body.classList.contains("dark");
  themeIcon.classList.toggle("fa-moon", !d);
  themeIcon.classList.toggle("fa-sun", d);
}

if (localStorage.getItem("jahid-theme") === "dark") {
  document.body.classList.add("dark");
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "jahid-theme",
    document.body.classList.contains("dark") ? "dark" : "light",
  );
  updateThemeIcon();
});

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((e) => observer.observe(e));

document.getElementById("year").textContent = new Date().getFullYear();

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.style.padding = window.scrollY > 30 ? "12px 0" : "18px 0";
});

document.querySelectorAll(".world-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.transform = `perspective(800px) rotateX(${
      (y - r.height / 2) / 25
    }deg) rotateY(${(r.width / 2 - x) / 25}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
