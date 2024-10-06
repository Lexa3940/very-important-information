const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Изменить текст и gif при нажатии кнопки "Да"
yesBtn.addEventListener("click", () => {
    question.innerHTML = "тест пройден успешно 😈💗";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
    gif.style.display = "block"; // Показываем gif
    yesBtn.style.display = "none"; // Скрываем кнопку "Да"
    noBtn.style.display = "none"; // Скрываем кнопку "Нет"
});

// Заставить кнопку "Нет" случайно перемещаться при наведении
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Рассчитать максимальные позиции, чтобы кнопка оставалась в пределах оболочки
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

