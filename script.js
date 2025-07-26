const card = document.getElementById("card");
let isDragging = false;
let lastX, lastY;
let rotX = 0, rotY = 0;

// MOUSE
card.addEventListener("mousedown", (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  rotateCard(e.clientX, e.clientY);
});

// TOUCH
card.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  lastX = touch.clientX;
  lastY = touch.clientY;
});

window.addEventListener("touchend", () => {
  isDragging = false;
});

window.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  rotateCard(touch.clientX, touch.clientY);
});

function rotateCard(currentX, currentY) {
  const deltaX = currentX - lastX;
  const deltaY = currentY - lastY;

  rotY += deltaX * 0.4;
  rotX -= deltaY * 0.4;

  card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

  lastX = currentX;
  lastY = currentY;
}

// ✅ Touch hint logic
const hint = document.getElementById("touch-hint");

function hideHint() {
  if (hint) {
    hint.classList.add("fade-out");
    setTimeout(() => {
      hint.remove();
    }, 600);
  }
}

["touchstart", "mousedown"].forEach(event => {
  window.addEventListener(event, hideHint, { once: true });
});
