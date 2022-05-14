// кнопка редактирования данных
const btnInfoUser = document.querySelector('.profile__info-button');
// ------------------
// форма пользователя
const formPopapUser = document.querySelector('.popup_edit');
const btnCloseFormUser = formPopapUser.querySelector('.popup__container-close');
const formUserInfo = formPopapUser.querySelector('.popup__form');
const nameUser = formPopapUser.querySelector('.popup__form-input_type_name');
const discriptionUser = formPopapUser.querySelector('.popup__form-input_type_discription');
const btnSaveFormUser = formPopapUser.querySelector('.popup__form-save-btn');
// ------------------
// доступы к попап открытия картинки
const popupOpenImag = document.querySelector('.popup_scale-foto')
const btnClosePopupImg = popupOpenImag.querySelector('.popup__btn-close');
const imgPopup = popupOpenImag.querySelector('.popup__figure-img');
const figcaptionImg = popupOpenImag.querySelector('.popup__figire-title');
// ------------------
// форма и кнопка добавления новых карточек на страницу
const btnEditCart = document.querySelector('.profile__button-add');
const formEditCart = document.querySelector('.popup_add');
const btnCloseEditCard = formEditCart.querySelector('.popup__container-close');
const formHandlerAddCard = formEditCart.querySelector('.popup__wrapper-form');
const nameNewCard = formEditCart.querySelector('.popup__form-input_type_text');
const linkNewCard = formEditCart.querySelector('.popup__form-input_type_link');
// ------------------
// данные пользователя на странице html
const nameTitle = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__discription')
const containerCardItems = document.querySelector('.items-foto');
// ------------------
// Универсальная функции для откр/закр popup
function openPopup (popupElement) {
  popupElement.classList.add('popup_opened')
  nameDescriptionSite();
}
function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened')
}
// ------------------

// Слушатели событий для открытия формы редактирования данных
btnInfoUser.addEventListener('click', function(evt) {
 openPopup(formPopapUser);
})

btnCloseFormUser.addEventListener('click', function(evt) {
  closePopup(formPopapUser);
})
// ------------------
// отображение имени и описания
function nameDescriptionSite() {
  nameUser.value = nameTitle.textContent;
  discriptionUser.value = profileDescription.textContent;
}
// ------------------
// Изменения данных имени пользователя из формы
function handlerFormUserSubmit(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameUser.value;
  profileDescription.textContent = discriptionUser.value;
  closePopup(formPopapUser);
}
formUserInfo.addEventListener('submit', handlerFormUserSubmit)
// ------------------
// сдушатели событий открытия формы для добавления карточек
btnEditCart.addEventListener('click', () =>{
  openPopup(formEditCart);
})
btnCloseEditCard.addEventListener('click', () => {
  closePopup(formEditCart);
})
// ------------------
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(createCard);


// слушатели событий удаления. лайка. открытия попап с картинкой.
function btnLikeHandler(evt) {
  evt.target.classList.toggle('card__like');
}
function btnDeletHandler(evt) {
  evt.target.closest(".card").remove();
}
function btnOpenPopupImg (evt) {
  imgPopup.src = evt.target.src;
  figcaptionImg.textContent = evt.target.alt;
  imgPopup.alt = evt.target.alt;
  openPopup(popupOpenImag);
}
btnClosePopupImg.addEventListener('click', () => {
  closePopup(popupOpenImag);
})

// ------------------
// Функция вывода карточек на страницу
function createCard (item) {
  const name = item.name;
  const link = item.link;
  const templates = document.querySelector('.template').content.querySelector('.card').cloneNode(true);
  const nameCard = templates.querySelector('.card__name-title');
  const imgCard = templates.querySelector('.card__imag');
  const btnDeletCard = templates.querySelector('.card__button-remove');
  const btnLikeCard = templates.querySelector('.card__name-heart');
  btnLikeCard.addEventListener('click', btnLikeHandler);
  btnDeletCard.addEventListener('click', btnDeletHandler);
  imgCard.addEventListener('click', btnOpenPopupImg);
  nameCard.textContent = name;
  imgCard.src = link;
  imgCard.alt = name;
  containerCardItems.append(templates);
}
// ------------------
// Функция создания карточек
function AddCardHandler(evt) {
  evt.preventDefault();
  createCard({link: linkNewCard.value, name: nameNewCard.value});
  closePopup(formEditCart);
  evt.target.reset();
}
// ------------------
formHandlerAddCard.addEventListener("submit", AddCardHandler);

// const templates = document.querySelector('.template').content.querySelector('.card').cloneNode(true);
// ----
  // const item = {link: linkNewCard.value, name: nameNewCard.value};
  // createCard(item);
  // ----
