// Scroll animation - sections slide up
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
});
