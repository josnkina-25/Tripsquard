// Scroll animation for the about page sections
document
  .querySelectorAll(
    ".about-heading, .about-para, .about, .about-join, .about-footer",
  )
  .forEach((el) => {
    new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0 },
    ).observe(el);
  });
