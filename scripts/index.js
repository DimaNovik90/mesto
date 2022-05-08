// Доступ к форма редактирования
const popupWrraper = document.querySelector('.popup_edit');
const btnClose = popupWrraper.querySelector('.popup__container-close');
const form = popupWrraper.querySelector('.popup__form');
const namePopupinput = popupWrraper.querySelector('.popup__form-input_type_name');
const namePopupDiscription = popupWrraper.querySelector('.popup__form-input_type_discription');
const btnEdit = document.querySelector('.profile__info-button');
const userNamepage = document.querySelector('.profile__info-title');
const discriptionNamepage = document.querySelector('.profile__discription');
const profileBtnAddCard = document.querySelector('.profile__button-add');
const cardLike = document.querySelector('.card__name-heart');
// Доступ к форме добавления карточек
const popupEditCard = document.querySelector('.popup_add');
const popupContainerCloseBtn = popupEditCard.querySelector('.popup__container-close');
const popupFormContainer = popupEditCard.querySelector('.popup__container');
const popupEditInputText = popupEditCard.querySelector('.popup__form-input_type_text');
const popupEditInputLink = popupEditCard.querySelector('.popup__form-input_type_link');
const popupFormBtnEdit = popupEditCard.querySelector('.popup__form-save-btn');
const popupFormAdd = popupEditCard.querySelector('.popup__wrapper-form');
const ContainerCard = document.querySelector('.items-foto');


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
function popupOverleyclick(evt) {
  if (evt.target === evt.currentTarget) {
    popupCloseToggle()
  }
}
popupWrraper.addEventListener('click', popupOverleyclick);


// Функция открытия popup add card
profileBtnAddCard.addEventListener('click', function(evt) {
  popupEditCard.classList.add('popup_opened');
})
popupContainerCloseBtn.addEventListener('click', function(evt) {
  popupEditCard.classList.remove('popup_opened');
});



