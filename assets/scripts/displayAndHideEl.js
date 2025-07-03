const displayAndHideEl = (hide, show, duration) => {
  // make hidding element smoothly disappear
  hide.style.opacity = 0;

  // wait for the transition duration to compelte
  setTimeout(() => {
    hide.style.display = "none";

    // the show element should have fadeIn animation (using opacity from 0 to 1)
    // to archive smoothest animation
    show.style.display = "block";
  }, duration);
};
export default displayAndHideEl;
