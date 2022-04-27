const btnClose = document.querySelector('.popup__container-close');
const btnEdit = document.querySelector('.container__name-button');
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



// доступ к форме
const namePopupinput = document.querySelector('.popup-form__name');
const namePopupDiscription = document.querySelector('.popup-form__discription');
const btnSave = document.querySelector('.popup-form__save-btn');
const form = document.querySelector('.popup-form');

// доступ к HTML
const userNamepage = document.querySelector('.container__name-title');
const discriptionNamepage = document.querySelector('.info-user__discription');


function formSubmitHandler (evt) {
  evt.preventDefault();
  userNamepage.textContent = namePopupinput.value
  discriptionNamepage.textContent = namePopupDiscription.value;
  popupOpenToggle()
}
form.addEventListener('submit', formSubmitHandler);
