const config = {
  formSelector: "popup__form", // форма
  inputSelector: "popup__form-input", // инпуты
  submitButtonSelector: "popup__form-save-btn", //нашел кнопку
  inactiveButtonClass: "popup__form-save-btn_disabled",
  inputErrorClass: "popup__input-error", //  меняет бордер у инпут
  errorClass: "popup__text-error", // текст ошибки
};

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputList) => {
    return !inputList.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, inactiveButtonClass); // вызываю здесь и убираю частичное дублирование функции !
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};
//Функция которая делает кнопку добавления новой карточки при повторном открытии не активной! И убирает частичное дублирование функции
function disableSubmitButton(buttonElement, inactiveButtonClass) {
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(inactiveButtonClass);
};


const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
  const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = ({
  formSelector,inputSelector,submitButtonSelector,inactiveButtonClass,inputErrorClass,errorClass,}) => {
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.target.reset();
    });
    setEventListeners(formElement,inputSelector,submitButtonSelector,inactiveButtonClass,inputErrorClass,errorClass);
  });
};
enableValidation(config);
