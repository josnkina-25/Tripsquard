// Fade in animation for the register page text lines
const registerContainer = [
  {
    element: document.querySelector(".input-box"),
    fadeClass: "fade1",
  },
  {
    element: document.querySelector(".register-container"),
    fadeClass: "fade2",
  },
  {
    element: document.querySelector(".about-footer"),
    fadeClass: "fade3",
  },
];
// each line fades in 600ms after the previous
registerContainer.forEach((registerContainer, i) => {
  setTimeout(() => {
    registerContainer.element.classList.add(registerContainer.fadeClass);
  }, i * 600);
});

// Page Fade In
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page--loading");
});

window.addEventListener("load", () => {
  document.body.classList.remove("page--loading");
  document.body.classList.add("page--loaded");
});
