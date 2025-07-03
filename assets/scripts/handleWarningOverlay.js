export default function handleWarningOverlay(e, transitionDuration) {
  const overlayEl = e.target.closest('.overlay');
  overlayEl.style.opacity = 0;

  setTimeout(() => {
    overlayEl.style.display = 'none';
  }, transitionDuration);
}
