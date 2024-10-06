const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Изменяем текст и GIF при нажатии на кнопку "Yes"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "the test was passed successfully 😈";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Функция для перемещения кнопки "No"
const moveNoButton = () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Расчет максимальных позиций, чтобы кнопка оставалась в рамках контейнера
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
};

// Перемещение кнопки "No" при наведении и касании
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение касания
    moveNoButton();
});

