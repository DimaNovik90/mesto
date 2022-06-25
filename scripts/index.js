import { initialCards, validationConfig } from "./constans.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
// кнопка редактирования данных
const btnInfoUser = document.querySelector(".profile__info-button");
const templateSelector = ".template";
// ------------------
const popupEditFormProfile = document.querySelector(".popup__form-profile");
// форма пользователя
const popapUser = document.querySelector(".popup_edit");
const btnCloseFormUser = popapUser.querySelector(".popup__container-close");
const formUserInfo = popapUser.querySelector(".popup__form");
const nameUser = popapUser.querySelector(".popup__form-input_type_name");
const discriptionUser = popapUser.querySelector(
  ".popup__form-input_type_discription"
);
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

// Универсальная функции для откр/закр popup
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", handlerClosePopupEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", handlerClosePopupEsc);
}

// отображение имени и описания
function settingNameDescription() {
  nameUser.value = nameTitle.textContent;
  discriptionUser.value = profileDescription.textContent;
}

// Изменения данных имени пользователя из формы
function submitEditProfileForm(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameUser.value;
  profileDescription.textContent = discriptionUser.value;
  closePopup(popapUser);
}

function openImagePopup(data) {
  const { name, link } = data;
  imgPopup.src = link;
  figcaptionImg.textContent = name;
  imgPopup.alt = name;
  openPopup(popupOpenImag);
}

// Функция создания карточек
function createCard(data) {
  const card = new Card(data, templateSelector, openImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

// ------------------
function renderCard(cardElement) {
  containerCardItems.prepend(cardElement);
}

// добавление карточек в index
initialCards.forEach((item) => {
  renderCard(createCard(item));
});

// Функция создания карточек из формы
function submitAddCardForm(evt) {
  evt.preventDefault();
  const card = createCard({ name: nameNewCard.value, link: linkNewCard.value });
  renderCard(card);
  closePopup(popUpEditCart);
}

// ------------------

// закрытие модального окна по Esc
function handlerClosePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

// закрытие окна при клике на оверлей
function closePopupClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

// поиск форм для валидации
const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(
    validationConfig,
    formElement
  );
  formValidators[formElement.name].enableValidation();
});

function openPropfilePopup() {
  settingNameDescription();
  formValidators[popupEditFormProfile.name].cleanUpForm();
  openPopup(popapUser);
}

formAddingNewPlace.addEventListener("submit", submitAddCardForm);

btnClosePopupImg.addEventListener("click", () => {
  closePopup(popupOpenImag);
});

// Слушатели событий для открытия формы редактирования данных
btnInfoUser.addEventListener("click", openPropfilePopup);
btnCloseFormUser.addEventListener("click", function (evt) {
  closePopup(popapUser);
});

// слушатели событий удаления. лайка. открытия попап с картинкой.

formUserInfo.addEventListener("submit", submitEditProfileForm);
// ------------------

// сдушатели событий открытия формы для добавления карточек

btnEditCart.addEventListener("click", () => {
  formAddingNewPlace.reset();
  formValidators[formAddingNewPlace.name].cleanUpForm();
  openPopup(popUpEditCart);
});

btnCloseEditCard.addEventListener("click", () => {
  closePopup(popUpEditCart);
});

// слушателя закрытия окна при клике на оверлей
popUpEditCart.addEventListener("mousedown", closePopupClickOverlay);
popupOpenImag.addEventListener("mousedown", closePopupClickOverlay);
popapUser.addEventListener("mousedown", closePopupClickOverlay);
