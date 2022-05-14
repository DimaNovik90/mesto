// // Доступ к форма редактирования
// const popupWrraper = document.querySelector(".popup_edit");
// const btnClose = popupWrraper.querySelector(".popup__container-close");
// const form = popupWrraper.querySelector(".popup__form");
// const namePopupinput = popupWrraper.querySelector(".popup__form-input_type_name");
// const namePopupDiscription = popupWrraper.querySelector(".popup__form-input_type_discription");
// const btnEdit = document.querySelector(".profile__info-button");
// const userNamepage = document.querySelector(".profile__info-title");
// const discriptionNamepage = document.querySelector(".profile__discription");
// const profileBtnAddCard = document.querySelector(".profile__button-add");
// const cardLike = document.querySelector(".card__name-heart");
// // Доступ к форме добавления карточек
// const popupEditCard = document.querySelector(".popup_add");
// const popupContainerCloseBtn = popupEditCard.querySelector(".popup__container-close");
// const popupFormContainer = popupEditCard.querySelector(".popup__container");
// const popupEditInputText = popupEditCard.querySelector(".popup__form-input_type_text");
// const popupEditInputLink = popupEditCard.querySelector(".popup__form-input_type_link");
// // доступы к popup откр. картинки
// const popupScaleFoto = document.querySelector(".popup_scale-foto");
// const popupCloseScaleFotoBtn =
//   popupScaleFoto.querySelector(".popup__btn-close");
// const imagPopup = popupScaleFoto.querySelector(".popup__figure-img");
// let titleImagPopup = popupScaleFoto.querySelector(".popup__figire-title");
// // доступы к форме
// const popupFormBtnEdit = popupEditCard.querySelector(".popup__form-save-btn");
// const popupFormAdd = popupEditCard.querySelector(".popup__wrapper-form");
// const ContainerCard = document.querySelector(".items-foto");
// const itemsContainer = document.querySelector(".items-foto");
// const templateContent = document.querySelector(".template").content;

// function openPopup (popup) {
//   popup.classList.add('.popup_opened')
// }

// function closePopup (popup) {
//   popup.classList.remove('.popup_opened')
// }


// // Функция которая открывает окно и присваивает значения имени и описания
// function popupOpenToggle() {
//   popupWrraper.classList.add("popup_opened");
//   namePopupinput.value = userNamepage.textContent;
//   namePopupDiscription.value = discriptionNamepage.textContent;
// }

// // функция на закрытие окна, которая добавляет класс к popup
// function popupCloseToggle() {
//   popupWrraper.classList.remove("popup_opened");
// }
// btnEdit.addEventListener("click", popupOpenToggle);
// // Событие которое меняет описание и имя из popup
// function formSubmitHandler(evt) {
//   evt.preventDefault();
//   userNamepage.textContent = namePopupinput.value;
//   discriptionNamepage.textContent = namePopupDiscription.value;
//   popupCloseToggle();
// }
// btnClose.addEventListener("click", popupCloseToggle);
// form.addEventListener("submit", formSubmitHandler);

// // Функция которая ловит клик по любой области экрана для закрытия окна при клике на любой другой области экрана пользователя
// function popupOverleyclick(evt) {
//   if (evt.target === evt.currentTarget) {
//     popupCloseToggle();
//   }
// }
// popupWrraper.addEventListener("click", popupOverleyclick);

// // Функция открытия popup add card
// profileBtnAddCard.addEventListener("click", function (evt) {
//   popupEditCard.classList.add("popup_opened");
// });
// popupContainerCloseBtn.addEventListener("click", function (evt) {
//   popupEditCard.classList.remove("popup_opened");
// });

// function handlerClosePopup(evt) {
//   popupEditCard.classList.remove("popup_opened");
// }

// const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

// const clickHandlerLike = (evt) => {
//   evt.target.classList.toggle("card__like");
// };

// const deletHandlerBtn = (evt) => {
//   evt.target.closest(".card").remove();
// };

// function titlePopupImg(evt) {
//   popupScaleFoto.classList.add("popup_opened");
//   imagPopup.src = evt.target.src;
//   titleImagPopup.textContent = evt.target.alt;
// }

// popupCloseScaleFotoBtn.addEventListener("click", function (evt) {
//   popupScaleFoto.classList.remove("popup_opened");
// });

// initialCards.forEach(({ name, link }) => {
//   const initialElementCard = templateContent.cloneNode(true);
//   const cardImag = initialElementCard.querySelector(".card__imag");
//   const likeBtn = initialElementCard.querySelector(".card__name-heart");
//   const deletBtn = initialElementCard.querySelector(".card__button-remove");
//   likeBtn.addEventListener("click", clickHandlerLike);
//   deletBtn.addEventListener("click", deletHandlerBtn);
//   cardImag.src = link;
//   cardImag.alt = name;
//   initialElementCard.querySelector(".card__name-title").textContent = name;
//   itemsContainer.append(initialElementCard);
//   cardImag.addEventListener("click", titlePopupImg);
// });






// function popupHandlerAddCard(evt) {
//   evt.preventDefault();
//   const initialElementCard = templateContent.cloneNode(true);
//   const cardTitle = initialElementCard.querySelector(".card__name-title");
//   const cardLink = initialElementCard.querySelector(".card__imag");
//   const likeBtn = initialElementCard.querySelector(".card__name-heart");
//   const deletBtn = initialElementCard.querySelector(".card__button-remove");
//   const cardImag = initialElementCard.querySelector(".card__imag");
//   cardTitle.textContent = popupEditInputText.value;
//   cardLink.src = popupEditInputLink.value;
//   cardLink.alt = cardTitle.textContent;
//   itemsContainer.prepend(initialElementCard);
//   evt.target.reset();
//   handlerClosePopup();
//   likeBtn.addEventListener("click", clickHandlerLike);
//   deletBtn.addEventListener("click", deletHandlerBtn);
//   cardImag.addEventListener("click", titlePopupImg);
// }

// popupFormAdd.addEventListener("submit", popupHandlerAddCard);
