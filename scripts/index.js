// кнопка редактирования данных
const btnInfoUser = document.querySelector(".profile__info-button");
// ------------------
// форма пользователя
const popapUser = document.querySelector(".popup_edit");
const btnCloseFormUser = popapUser.querySelector(".popup__container-close");
const formUserInfo = popapUser.querySelector(".popup__form");
const nameUser = popapUser.querySelector(".popup__form-input_type_name");
const discriptionUser = popapUser.querySelector(".popup__form-input_type_discription");
const btnSaveFormUser = popapUser.querySelector(".popup__form-save-btn");
// ------------------
// доступы к попап открытия картинки
const popupOpenImag = document.querySelector(".popup_scale-foto");
const btnClosePopupImg = popupOpenImag.querySelector(".popup__btn-close");
const imgPopup = popupOpenImag.querySelector(".popup__figure-img");
const figcaptionImg = popupOpenImag.querySelector(".popup__figire-title");
// ------------------
// форма и кнопка добавления новых карточек на страницу
const btnEditCart = document.querySelector(".profile__button-add");
const popUpEditCart = document.querySelector(".popup_add");
const btnCloseEditCard = popUpEditCart.querySelector(".popup__container-close");
const formAddingNewPlace = popUpEditCart.querySelector(".popup__wrapper-form");
const nameNewCard = popUpEditCart.querySelector(".popup__form-input_type_text");
const linkNewCard = popUpEditCart.querySelector(".popup__form-input_type_link");
const btnSavePopup = popUpEditCart.querySelector(".popup__form-save-btn");
// ------------------
const templates = document.querySelector(".template").content;
// данные пользователя на странице html
const nameTitle = document.querySelector(".profile__info-title");
const profileDescription = document.querySelector(".profile__discription");
const containerCardItems = document.querySelector(".items-foto");
const popupAll = document.querySelector('.popup');
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },

  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },

  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },

  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },

  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },

  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach((item) => {
  const card = createCard(item);
  renderCard(card);
});
// ------------------
// Универсальная функции для откр/закр popup
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener('keydown', handlerClosePopupEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener('keydown', handlerClosePopupEsc);
}

function openPropfilePopup() {
  settingNameDescription();
  openPopup(popapUser);
}
// ------------------
// отображение имени и описания
function settingNameDescription() {
  nameUser.value = nameTitle.textContent;
  discriptionUser.value = profileDescription.textContent;
}
// ------------------
// Изменения данных имени пользователя из формы
function changeNameForm(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameUser.value;
  profileDescription.textContent = discriptionUser.value;
  closePopup(popapUser);
}
// ------------------
// ------------------
function buttonAddingLike(evt) {
  evt.target.classList.toggle("card__like");
}

function btnDeletHandler(evt) {
  evt.target.closest(".card").remove();
}
// Функция создания карточек
function createCard(item) {
  const templateCard = templates.querySelector(".card").cloneNode(true);
  const nameCard = templateCard.querySelector(".card__name-title");
  const imgCard = templateCard.querySelector(".card__imag");
  const btnDeletCard = templateCard.querySelector(".card__button-remove");
  const btnLikeCard = templateCard.querySelector(".card__name-heart");
  const name = item.name;
  const link = item.link;
  btnLikeCard.addEventListener("click", buttonAddingLike);
  btnDeletCard.addEventListener("click", btnDeletHandler);
  imgCard.addEventListener("click", btnOpenPopupImg);
  nameCard.textContent = name;
  imgCard.src = link;
  imgCard.alt = name;
  return templateCard;
}
// ------------------
function renderCard(card) {
  containerCardItems.prepend(card);
}
// Функция создания карточек
function formCardHandler(evt) {
  evt.preventDefault();
  const newCard = createCard({link: linkNewCard.value, name: nameNewCard.value,});
  renderCard(newCard);
  btnNoActiv();
  closePopup(popUpEditCart);
  evt.target.reset();
}
function btnNoActiv () {
  btnSavePopup.disabled = true;
  btnSavePopup.classList.add('popup__form-save-btn_disabled');
}
// ------------------
function btnOpenPopupImg(evt) {
  imgPopup.src = evt.target.src;
  figcaptionImg.textContent = evt.target.alt;
  imgPopup.alt = evt.target.alt;
  openPopup(popupOpenImag);
}

// закрытие модального окна по Esc
function handlerClosePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// закрытие окна при клике на оверлей
function closePopupClickOverlay(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}


formAddingNewPlace.addEventListener("submit", formCardHandler);

btnClosePopupImg.addEventListener("click", () => {
  closePopup(popupOpenImag);
});
// Слушатели событий для открытия формы редактирования данных
btnInfoUser.addEventListener('click', openPropfilePopup);

btnCloseFormUser.addEventListener("click", function (evt) {
  closePopup(popapUser);
});
// слушатели событий удаления. лайка. открытия попап с картинкой.

formUserInfo.addEventListener("submit", changeNameForm);
// ------------------
// сдушатели событий открытия формы для добавления карточек
btnEditCart.addEventListener("click", () => {
    openPopup(popUpEditCart);
});

btnCloseEditCard.addEventListener("click", () => {
  closePopup(popUpEditCart);
});
// слушателя закрытия окна при клике на оверлей
popUpEditCart.addEventListener("mousedown", closePopupClickOverlay);
popupOpenImag.addEventListener("mousedown", closePopupClickOverlay);
popapUser.addEventListener("mousedown", closePopupClickOverlay);

