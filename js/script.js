$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".burger,.header__menu").toggleClass("active");
    $(".body").toggleClass("lock");
  });
});

// Картирка дерево
var textElements = document.querySelectorAll(".map-area__text");

// Проходимся по каждому элементу и добавляем обработчики событий
textElements.forEach(function (textElement) {
  var originalColor = textElement.getAttribute("fill");

  textElement.addEventListener("mouseenter", function () {
    textElement.setAttribute("fill", "#E38333"); // Изменение цвета при наведении
  });

  textElement.addEventListener("mouseleave", function () {
    textElement.setAttribute("fill", originalColor); // Возвращение оригинального цвета
  });
});
// Картирка дерево конец

document.addEventListener("DOMContentLoaded", function () {
  var languageArrow = document.querySelector(".language-arrow");
  var languageOptions = document.getElementById("language-options");
  var languageSelected = document.querySelector(".language-selected");
  var languageFlag = document.querySelector(".language-flag");

  languageArrow.addEventListener("click", function () {
    languageOptions.classList.toggle("show");
  });

  var languageOptionItems = document.querySelectorAll(".language-option");
  languageOptionItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var selectedLanguage = item.textContent;
      var selectedLanguageFlag = item.querySelector(".language-flag").innerHTML;

      languageSelected.textContent = selectedLanguage;
      languageFlag.innerHTML = selectedLanguageFlag;

      languageOptions.classList.remove("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const monthNames = [
    "ЯНВАРЬ",
    "ФЕВРАЛЬ",
    "МАРТ",
    "АПРЕЛЬ",
    "МАЙ",
    "ИЮНЬ",
    "ИЮЛЬ",
    "АВГУСТ",
    "СЕНТЯБРЬ",
    "ОКТЯБРЬ",
    "НОЯБРЬ",
    "ДЕКАБРЬ",
  ];

  let currentMonthIndex = 1;
  let currentYear = 2024;

  const currentMonthSpan = document.querySelector(".current-month");
  const prevButton = document.querySelector(".month-btn.prev");
  const nextButton = document.querySelector(".month-btn.next");

  function updateMonthDisplay() {
    currentMonthSpan.textContent = `${monthNames[currentMonthIndex]} ${currentYear}`;
  }

  function changeMonth(direction) {
    if (direction === "prev") {
      currentMonthIndex--;
      if (currentMonthIndex < 0) {
        currentMonthIndex = 11;
        currentYear--;
      }
    } else if (direction === "next") {
      currentMonthIndex++;
      if (currentMonthIndex > 11) {
        currentMonthIndex = 0;
        currentYear++;
      }
    }
    updateMonthDisplay();
  }

  prevButton.addEventListener("click", () => changeMonth("prev"));
  nextButton.addEventListener("click", () => changeMonth("next"));

  updateMonthDisplay();
});
