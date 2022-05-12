// const itemsContainer = document.querySelector('.items-foto');
// const templateContent = document.querySelector('.template').content;

// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

// const clickHandlerLike = (evt) => {
//   evt.target.classList.toggle('card__like');
// };

// const deletHandlerBtn = (evt) => {
//   evt.target.closest('.card').remove( );
// };

// initialCards.forEach(({name, link}) => {
//   const initialElementCard = templateContent.cloneNode(true);
//   const cardImag = initialElementCard.querySelector('.card__imag');
//   const likeBtn = initialElementCard.querySelector('.card__name-heart');
//   const deletBtn = initialElementCard.querySelector('.card__button-remove');
//   likeBtn.addEventListener('click', clickHandlerLike);
//   deletBtn.addEventListener('click', deletHandlerBtn);
//   cardImag.src = link;
//   cardImag.alt = name;
//   initialElementCard.querySelector('.card__name-title').textContent = name;
//   itemsContainer.append(initialElementCard);
// })



