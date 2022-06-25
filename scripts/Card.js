class Card {
  constructor(data, cardSelector, openHandler) {
    const {name, link} = data;
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._openHandler = openHandler;
  }
  // клонирование шаблона template
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _buttonAddingLike = (evt) => {
    evt.target.classList.toggle("card__like");
  }

  _btnDeletHandler = () => {
    this._element.remove();
  }

  // функция откр попап картинки
  _handleImgClick = () => {
    this._openHandler({link: this._link, name: this._name});
  }


  // заполнение карточек
  generateCard() {
    this._element = this._getTemplate();
    // нашел все элементы карточки
    this._card = this._element.querySelector('.card');
    this._imagCard = this._element.querySelector('.card__imag');
    this._buttonRemove = this._element.querySelector('.card__button-remove');
    this._nameCard = this._element.querySelector('.card__name-title');
    this._btnLike = this._element.querySelector('.card__name-heart');
    // наполнение карточки значениями
    this._imagCard.src = this._link;
    this._imagCard.alt = this._name;
    this._nameCard.textContent = this._name;
    // слушатель события
    this._setEventListeners()
    return this._element;
  }

  // слушатель событий
  _setEventListeners() {
    // лайк карточки
    this._btnLike.addEventListener("click", this._buttonAddingLike)
    // удаление карточек
    this._buttonRemove.addEventListener('click', this._btnDeletHandler)
    // откр попап картинки
    this._imagCard.addEventListener('click', this._handleImgClick)
  }
}
export default Card;


