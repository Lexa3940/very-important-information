const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const wrapper = document.querySelector(".wrapper");

// Функция для создания сердечек на весь экран
function createHearts() {
  const heartsContainer = document.createElement("div");
  heartsContainer.className = "hearts";
  document.body.appendChild(heartsContainer);

  // Создаем больше сердечек для полного покрытия
  const heartCount = 100;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart");

    // Случайные параметры для каждого сердца
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 20 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    heart.style.filter = `hue-rotate(${Math.random() * 60}deg)`;
    heart.style.width = `${20 + Math.random() * 30}px`;
    heart.style.height = heart.style.width;

    heartsContainer.appendChild(heart);
  }
}

// Обработчик для кнопки "Yes"
yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "😈the test was passed successfully - U're the best boy in the entire galactic system, my sweety! ";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bTZ2dWppNWp5ejNzemtrOHB0c3ZlYTAzbjl2cGRuODV4MnNqeDQwMyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/7jOnwF6D1ftHdCKXCL/giphy.gif";

  // Анимация кнопки "Yes"
  yesBtn.style.transform = "scale(1.1)";
  setTimeout(() => {
    yesBtn.style.transform = "scale(1)";
  }, 200);

  // Создаем сердечки на весь экран
  createHearts();
});

// Функция для "убегания" кнопки "No"
function moveNoButton() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Максимальные координаты для кнопки
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  // Случайные координаты с отступом от краев
  const randomX = Math.max(20, Math.random() * maxX - 20);
  const randomY = Math.max(20, Math.random() * maxY - 20);

  // Резкое перемещение
  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.transition = "all 0.2s ease-out";

  // Возвращаем на место через 300ms
  setTimeout(() => {
    noBtn.style.position = "absolute";
    noBtn.style.left = "50%";
    noBtn.style.top = "auto";
    noBtn.style.transform = "translateX(-50%)";
  }, 300);
}

// Обработчики событий для кнопки "No"
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

