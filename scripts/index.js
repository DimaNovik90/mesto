// доступ к кнопкам
const btnClose = document.querySelector('.popup__container-close');
const btnEdit = document.querySelector('.profile__info-button');
const popupWrraper = document.querySelector('.popup');
// доступ к форме
const namePopupinput = document.querySelector('.popup__form-input_name');
const namePopupDiscription = document.querySelector('.popup__form-input_discription');
const form = document.querySelector('.popup__form');
// доступ к HTML
const userNamepage = document.querySelector('.profile__info-title');
const discriptionNamepage = document.querySelector('.profile__discription');
// Функция которая открывает окно и присваивает значения имени и описания
function popupOpenToggle() {
 popupWrraper.classList.add('popup_opened');
 namePopupinput.value =  userNamepage.textContent;
 namePopupDiscription.value = discriptionNamepage.textContent;
}
// функция на закрытие окна, которая добавляет класс к popup
function popupCloseToggle() {
  popupWrraper.classList.remove('popup_opened');
}
// Событие которое меняет описание и имя из popup
function formSubmitHandler (evt) {
  evt.preventDefault();
  userNamepage.textContent = namePopupinput.value
  discriptionNamepage.textContent = namePopupDiscription.value;
  popupCloseToggle()
}
btnEdit.addEventListener('click', popupOpenToggle);
btnClose.addEventListener('click', popupCloseToggle);
form.addEventListener('submit', formSubmitHandler);

// Функция которая ловит клик по любой области экрана для закрытия окна при клике на любой другой области экрана пользователя
// function popupOverleyclick(evt) {
//   if (evt.target === evt.currentTarget) {
//     popupCloseToggle()
//   }
// }
// popupWrraper.addEventListener('click', popupOverleyclick);






