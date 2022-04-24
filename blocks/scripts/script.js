const btnClose = document.querySelector('.popup__container-close');
const btnEdit = document.querySelector('.info-user__name-button');
const bodyWindow = document.querySelector('.page');
const popupWrraper = document.querySelector('.popup');

// Функция переключатель класса для открытия и закрытия окна
 function popupOpenToggle() {
   popupWrraper.classList.toggle('popup_opened');
 }
 btnEdit.addEventListener('click', popupOpenToggle);
 btnClose.addEventListener('click', popupOpenToggle);


// Функция которая ловит клик по любой области экрана для закрытия окна при клике на любой другой области экрана пользователя
function popupOverleyclick(evt) {
  if (evt.target === evt.currentTarget) {
    popupOpenToggle()
  }
}
popupWrraper.addEventListener('click', popupOverleyclick);

