const wrapper = [
  {
    element: document.querySelector(".wrapper"),
    fadeClass: "fade1",
  },
  {
    element: document.querySelector(".about-footer"),
    fadeClass: "fade2",
  },
];

wrapper.forEach((wrapper, i) => {
  setTimeout(() => {
    wrapper.element.classList.add(wrapper.fadeClass);
  }, i * 700); // each line fades in 600ms after the previous
});

// Page Fade In
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page--loading");
});

window.addEventListener("load", () => {
  document.body.classList.remove("page--loading");
  document.body.classList.add("page--loaded");
});
