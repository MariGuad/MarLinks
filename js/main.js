// Subtle polish – respects reduced motion
document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Soft parallax on mouse for the avatar ring (desktop only)
  const avatar = document.querySelector(".avatar-wrapper");
  if (!avatar || window.matchMedia("(pointer: coarse)").matches) return;

  document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    const { innerWidth: w, innerHeight: h } = window;
    const moveX = (x / w - 0.5) * 8;
    const moveY = (y / h - 0.5) * 8;
    avatar.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
