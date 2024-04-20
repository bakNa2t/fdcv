const allSections = document.querySelector(".main-content");
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");

//transition between pages using control buttons of navigation panel / переход между страницами с помощью кнопок навигации
function pageTransitions() {
  // Button click active class / Замена active-btn на '' в блоке controls
  for (i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  // Section active class after clicking / Добавление класса active на элемент section
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove class active from the other buttons / удаляем класс active из sectBtn
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide class active from other sections / скрываем класс active во всех остальных sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // show section / показываем нужную section
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
pageTransitions();

// display control button description when hovering / отображение описания кнопок навигации при навидении курсора на кнопку
function displayControlDesc() {
  if (screen.width > 800) {
    sectBtn.forEach((sectBtn) => {
      sectBtn.addEventListener("mouseover", () => {
        if (!sectBtn.contains(document.querySelector(".active-btn"))) {
          sectBtn.children[1].classList.replace(
            "control__desc_hidden",
            "control__desc_visible"
          );
        }
      });
      sectBtn.addEventListener("mouseout", () => {
        sectBtn.children[1].classList.replace(
          "control__desc_visible",
          "control__desc_hidden"
        );
      });
    });
  }
}
displayControlDesc();

// toggle dark/light theme / переключение темы светлая/тёмная
const themeBtn = document.querySelector(".theme__container");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-theme");
});

// Automatically set dark/light mode
function autoSetThemeMode() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  if (currentHour >= 6 || currentHour < 18) {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }
}
autoSetThemeMode();

// Display current year / отображение текущего года
function fullYear() {
  const date = new Date();
  const year = date.getFullYear();
  document.getElementById("full__year").innerHTML = year;
}
fullYear();
