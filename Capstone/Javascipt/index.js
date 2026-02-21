// Fade in animation for the home page text lines
const lines = [
  {
    el: document.querySelector(".line1"),
    fadeClass: "fade1",
  },
  {
    el: document.querySelector(".line2"),
    fadeClass: "fade2",
  },
  {
    el: document.querySelector(".line3"),
    fadeClass: "fade3",
  },
  {
    el: document.querySelector(".line4"),
    fadeClass: "fade4",
  },
];

lines.forEach((line, i) => {
  setTimeout(() => {
    line.el.classList.add(line.fadeClass);
  }, i * 600); // each line fades in 600ms after the previous
});

// Page Fade In
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page--loading");
});

window.addEventListener("load", () => {
  document.body.classList.remove("page--loading");
  document.body.classList.add("page--loaded");
});
