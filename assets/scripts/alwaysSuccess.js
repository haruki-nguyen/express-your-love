import displayAndHideEl from './displayAndHideEl.js';
import { popup, success, transitionDuration } from './main.js';

// turn NO into YES, so she will have no choice
// I'm genius 😎, hehe.
export default function alwaysSuccess(noBtn) {
  noBtn.textContent = 'Yes 🥰😛😛';
  noBtn.style.backgroundColor = 'var(--green)';
  noBtn.style.border = '1px solid var(--green)';

  displayAndHideEl(popup, success, transitionDuration);
}
