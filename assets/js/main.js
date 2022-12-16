// get nescessary element
const mainBtn = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const yesBtn = document.querySelector(".popup-btn.yes");
const nontBtn = document.querySelector(".popup-btn.nont");
const noBtn = document.querySelector(".popup-btn.no");
const success = document.querySelector(".success");

// This transition will be use multiple time so the transition duration should be the
// same in many place in your styles.css.
// You can upgrade this app to make the transition auto update depend on your
// transition duration in your styles.css.
const transitionDuration = 500;

function displayAndHideElement(hide, show, transitionDuration) {
  // make hidding element smoothly disappear
  hide.style.opacity = 0;

  // wait for the transition duration to compelte
  setTimeout(() => {
    hide.style.display = "none";

    // the show element should have fadeIn animation (using opacity from 0 to 1)
    // to archive smoothest animation
    show.style.display = "block";
  }, transitionDuration);
}

// turn NO into YES, so she will have no choice
// I'm genius 😎, hehe.
function alwaysSuccess() {
  noBtn.textContent = "Yes 🥰😛😛";
  noBtn.style.backgroundColor = "var(--green)";
  noBtn.style.border = "1px solid var(--green)";

  displayAndHideElement(popup, success, transitionDuration);
}

// handle when click mainBtn
mainBtn.addEventListener("click", () => {
  displayAndHideElement(mainBtn, popup, transitionDuration);
  // Use setTimeout to wait for the popup display property to be 'block'
  // so the original Width won't be 0.
  setTimeout(() => {
    // we will find the width of the element right here so we will always have
    // the original width of the element regardless how many times he/she
    // hover over it.
    const origWidth = noBtn.offsetWidth;

    // this counter is used for count how many time does your crush hover
    // the noBtn, and if it doens't >= 20 times, we will continue make the
    // button to jump
    let counter = 0;
    let jumpTimes = 20;

    // handle when click NO
    noBtn.addEventListener("mouseover", () => {
      counter++;
      if (counter <= jumpTimes) {
        const height = noBtn.offsetHeight;

        const viewportWidth = document.documentElement.clientWidth;
        const viewportHeight = document.documentElement.clientHeight;

        const percentWidth = (origWidth / viewportWidth) * 100;
        const percentHeight = (height / viewportHeight) * 100;

        noBtn.style.position = "fixed";
        // reset noBtn width after change position to fixed
        noBtn.style.width = `${origWidth}px`;

        // set left and top for the fixed position using percent
        let left = Math.round(Math.random() * 100);
        let top = Math.round(Math.random() * 100);

        // here I check if the left/top is making the noBtn overflow outside of <body>
        // if yes I will subtract to get the suitable position offset
        if (top && left) {
          left = left >= 100 - percentWidth ? left - percentWidth : left;
          top = top >= 100 - percentHeight ? top - percentHeight : top;
        }
        console.log(left, top);

        noBtn.style.left = left + "%";
        noBtn.style.top = top + "%";

        // change style to make it more contrast
        noBtn.style.backgroundColor = "var(--red)";
        noBtn.style.border = "1px solid var(--red)";

        // handle when user click before the 20th times;
        // sometimes the button only jump a very small distance,
        // so your crush will have oppotunity to click before we
        // have a change to handle

        // Test it many times to see the effect, about > 20 times.
        noBtn.addEventListener("click", alwaysSuccess);
      } else {
        noBtn.addEventListener("click", alwaysSuccess);
      }
    });
  }, transitionDuration);
});

// handle when click Yes and Non't
yesBtn.addEventListener("click", () =>
  displayAndHideElement(popup, success, transitionDuration)
);
nontBtn.addEventListener("click", () =>
  displayAndHideElement(popup, success, transitionDuration)
);
