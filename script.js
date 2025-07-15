
window.onload = () => {
  const dino = document.getElementById("dino");
  const popup = document.getElementById("popup");

  // Step 1: Dino di spalle
  dino.src = "dino_back.png";

  // Step 2: Dopo 1s gira di profilo
  setTimeout(() => {
    dino.src = "dino_side.png";
  }, 1000);

  // Step 3: Dopo 2s gira frontale
  setTimeout(() => {
    dino.src = "dino_front.png";
  }, 2000);

  // Step 4: Dopo 3s appare il popup
  setTimeout(() => {
    popup.style.display = "block";
    gsap.from(popup, { scale: 0.6, opacity: 0, duration: 1 });
  }, 3000);
};
