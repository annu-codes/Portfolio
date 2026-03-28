

 const reveals = document.querySelectorAll(".reveal");
const fills = document.querySelectorAll(".bar-fill");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
}

function animateBars() {
  fills.forEach((fill) => {
    const top = fill.getBoundingClientRect().top;
    if (top < window.innerHeight - 60 && fill.style.width !== fill.dataset.width) {
      fill.style.width = fill.dataset.width;
    }
  });
}

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}


function sendMessage(event) {
  event.preventDefault();
}

window.addEventListener("scroll", () => {
  revealOnScroll();
  animateBars();
  updateActiveNav();
});

window.addEventListener("load", () => {
  revealOnScroll();
  animateBars();
  updateActiveNav();
});
