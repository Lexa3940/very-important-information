const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "the test was passed successfully 😈";
  gif.src =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Detect touch devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

  // Move the button to the side for touch devices
  if (isTouchDevice) {
    // Move to the right if there is space, otherwise to the left
    const randomSide = Math.random() < 0.5 ? 'right' : 'left';
    if (randomSide === 'right' && maxX - noBtnRect.x > 0) {
      noBtn.style.left = maxX + "px";
    } else {
      noBtn.style.left = "0px";
    }
  } else {
    // Random position for non-touch devices
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }
});

