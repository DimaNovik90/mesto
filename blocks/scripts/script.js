// доступ к кнопкам
const btnClose = document.querySelector('.popup__container-close');
const btnEdit = document.querySelector('.container-name__button');
const bodyWindow = document.querySelector('.page');
const popupWrraper = document.querySelector('.popup');
// доступ к форме
const namePopupinput = document.querySelector('.popup-form__name');
const namePopupDiscription = document.querySelector('.popup-form__discription');
const btnSave = document.querySelector('.popup-form__save-btn');
const form = document.querySelector('.popup-form');
// доступ к HTML
const userNamepage = document.querySelector('.container-name__title');
const discriptionNamepage = document.querySelector('.info-user__discription');


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
btnEdit.addEventListener('click', popupOpenToggle);
btnClose.addEventListener('click', popupCloseToggle);


// Функция которая ловит клик по любой области экрана для закрытия окна при клике на любой другой области экрана пользователя
function popupOverleyclick(evt) {
  if (evt.target === evt.currentTarget) {
    popupCloseToggle()
  }
}
popupWrraper.addEventListener('click', popupOverleyclick);


// Событие которое меняет описание и имя из popup
function formSubmitHandler (evt) {
  evt.preventDefault();
  userNamepage.textContent = namePopupinput.value
  discriptionNamepage.textContent = namePopupDiscription.value;
  popupCloseToggle()
}
form.addEventListener('submit', formSubmitHandler);



