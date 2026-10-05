// Subtle 3D tilt for elements marked with `data-tilt`, on devices with a
// fine pointer only. Skipped entirely when the user prefers reduced motion.
const MAX_TILT_DEG = 10;

const canTilt =
  window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canTilt) {
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
    card.style.transition = "transform 0.2s ease-out";
    card.style.willChange = "transform";

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateX(${-y * MAX_TILT_DEG}deg) rotateY(${x * MAX_TILT_DEG}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}
