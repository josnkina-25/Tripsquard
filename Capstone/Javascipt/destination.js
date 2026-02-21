document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page--loading");
});

window.addEventListener("load", () => {
  document.body.classList.remove("page--loading");
  document.body.classList.add("page--loaded");

  // Stagger cards in after the page fades in
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(
      () => {
        card.classList.add("card--visible");
      },
      300 + i * 120,
    ); // starts after page fade, each card staggers
  });
});
