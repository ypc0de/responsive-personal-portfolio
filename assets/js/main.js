const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});
navClose.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 60,
      sectionId = section.getAttribute("id"),
      navClass = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navClass.classList.add("active");
    } else {
      navClass.classList.remove("active");
    }
  });
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
});
