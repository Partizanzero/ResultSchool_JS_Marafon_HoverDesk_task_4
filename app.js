/* Мини-игра с динамической генерацией контента. 

Изучим: 
- псевдоклассы в CSS, научимся работать с одним из них, а именно с hover. 
- принцип работы функции Math.random(), научимся динамически создавать элементы в JS.
Динамическая генерация контента
*/

//получаем ноду нашей доски
const board = document.querySelector("#board");
//массив цветов, которые могут быть назначены квадратикам
const colors = [
  "#FF8100",
  "#FFAA00",
  "#FF3D00",
  "#02C6FE",
  "#FFBC78",
  "#FFF2D8",
  "#FF9878",
  "#79E1FF",
];
//задаем общее кол-во квадратиков
const SQUARE_NUMBER = 500;

//будем динамически генерировать квадратики
for (let i = 0; i < SQUARE_NUMBER; i++) {
  //создаем отдельный div для каждого квадратика
  const square = document.createElement("div");
  //добавляем квадратику класс для стилизации
  square.classList.add("square");
  //добавляем квадратик на нашу доску
  board.append(square);

  //для каждого квадратика обработчик события mousover (элемент, на который курсор перешёл)
  square.addEventListener("mouseover", () => setColor(square));
  //для каждого квадратика обработчик события mouseleave (элемент, который курсор покинул)
  square.addEventListener("mouseleave", () => removeColor(square));
}

/* Ф-я установки цвета квадратику */
function setColor(element) {
  //получаем случайный цвет для квадратика
  const color = getRandomColor();
  //назначаем этот случайный цвет в квадратику через стиль.
  //cв-во «backgroundColor» используется для возврата цвета указанного элемента.
  element.style.backgroundColor = color;
  //назначаем тень квадратику с цветом самого квадратика и небольшое размытие для эффекта свечения
  //cв-во boxShadow устанавливает или возвращает тени элемента
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

/* Ф-я возвращения изначального цвета квадратику */
function removeColor(element) {
  //возвращаем квадратику изначальный цвет
  element.style.backgroundColor = "#1d1d1d";
  //возвращаем тени квадратика изначальный цвет
  element.style.boxShadow = "0 0 2px #000";
}

//Ф-я выбора случайного цвета для квадратика
function getRandomColor() {
  //получаем случайный индекс для элемента из массива цветов
  //Math.random() - генерирует псевдослучайное число от 0 до 1 (не включительно).
  //округляем, чтобы получить целое число (случайный индекс для элемента): floor() — округление в меньшую сторону
  //возвращаем элемент со сгенерированным динамически индексом (случайный цвет)
  return colors[Math.floor(Math.random() * colors.length)];
}
