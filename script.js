// Номер варіанта
const n = 6;

// Обчислюємо елемент для першого кліку за формулою (n mod 10) + 1
const elementIndex = (n % 10) + 1;

// Лічильники кліків
let clickCount1 = 0;
let clickCount2 = 0;

// Отримуємо всі елементи на сторінці
const allElements = document.querySelectorAll('body *');

// Функція для зміни класів
function changeClass(element, clickCount) {
  if (clickCount === 1) {
    element.classList.add("first-click");
    element.classList.remove("second-click");
  } else if (clickCount === 2) {
    element.classList.add("second-click");
    element.classList.remove("first-click");
  }
}

// Перший елемент - пошук по індексу (n mod 10) + 1
allElements[elementIndex - 1].addEventListener('click', function () {
    clickCount1++;
    if (clickCount1 > 2) clickCount1 = 1; // Повертаємо лічильник до 1 після другого кліку
    changeClass(this, clickCount1);
});
  
// Наступний елемент - наступний за порядком елемент
allElements[elementIndex].addEventListener('click', function () {
    clickCount2++;
    if (clickCount2 > 2) clickCount2 = 1; // Повертаємо лічильник до 1 після другого кліку
    changeClass(this, clickCount2);
});

const imageContainer = document.getElementById('image-container');
const addBtn = document.getElementById('add-btn');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const removeBtn = document.getElementById('remove-btn');

let currentImage = document.getElementById('city-image'); // Вказуємо на первинне зображення
const maxImageWidth = 1000; // Максимальна ширина зображення
const minImageWidth = 100;  // Мінімальна ширина зображення

// Додати зображення
addBtn.addEventListener('click', () => {
    const newImage = document.createElement('img');
    newImage.src = 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT7ShI3vENXx1R-6X_GsIGR0wv_nL5cv-Ec9cyKbgdr_vmzN72OsW5eW4W6_QDPdN3oWdZnJB40ND6_Ldaklqj0u2fINuksdvpwXB7V6A'; // Нове зображення
    newImage.alt = 'Нюнбернг';
    newImage.style.width = '600px';
    newImage.style.maxWidth = '100%';

    imageContainer.appendChild(newImage);
    currentImage = newImage; // Оновлюємо поточне зображення
});

// Збільшити зображення
increaseBtn.addEventListener('click', () => {
    if (currentImage) {
        let currentWidth = currentImage.clientWidth;
        if (currentWidth < maxImageWidth) {
            currentImage.style.width = (currentWidth + 50) + 'px';
        }
    }
});

// Зменшити зображення
decreaseBtn.addEventListener('click', () => {
    if (currentImage) {
        let currentWidth = currentImage.clientWidth;
        if (currentWidth > minImageWidth) {
            currentImage.style.width = (currentWidth - 50) + 'px';
        }
    }
});

// Видалити зображення
removeBtn.addEventListener('click', () => {
    if (currentImage) {
        currentImage.remove();
        currentImage = null; // Очищаємо поточне зображення
    }
});