// общая функция 
 function togglePopupPrivacy(modal) {
    modal.classList.toggle("popup_open");
    if (!modal.classList.contains("popup_open")) {
        document.removeEventListener("keyup", keyupHandlerPrivacy);
    }
}


// функция закр по еск
 const keyupHandlerPrivacy = function (e) {
    console.log(123);
    if (e.keyCode == 27) {
        const openModal = document.querySelector(".popup_open");
        togglePopupPrivacy(openModal);
    }
};

 function handleOverlayClickPrivacy(popup, e) {
    if (!e.target.closest(".popup__container")) {
        togglePopupPrivacy(popup);
    }
    document.removeEventListener("keyup", keyupHandlerPrivacy);
  }

  //модалки
const popupMenuPrivacy = document.querySelector(".popup_menu-privacy");
const popupDevelopmPrivacy = document.querySelector(".popup_developm_privacy");
const popupDevPrivacy = document.querySelector(".popup_dev_privacy");

// Кнопки открытия
const openmenuPrivacyPopupButton = document.querySelector(".header__menu-burger-privacy");
const openDevelopmPrivacyPopupButton = document.querySelector(".header__presa_privacy");
const openDevPrivacyPopupButton = document.querySelector(".popup__presa_privacy");


// Кнопки закрытия
const menuPrivacyPopupCloseButton = document.querySelector(".popup__closedbutt-privacy");
const DevelopmPrivacyPopupCloseButton = document.querySelector(".popup__closedbutt-devel_privacy");
const DevPrivacyPopupCloseButton = document.querySelector(".popup__closedbutt-dev_privacy");


// подписки открытия
openmenuPrivacyPopupButton.addEventListener("click", function () {
    togglePopupPrivacy(popupMenuPrivacy);
    document.addEventListener("keyup", keyupHandlerPrivacy);
});

openDevelopmPrivacyPopupButton.addEventListener("click", function () {
    togglePopupPrivacy(popupDevelopmPrivacy);
    document.addEventListener("keyup", keyupHandlerPrivacy);
});

openDevPrivacyPopupButton.addEventListener("click", function () {
    togglePopupPrivacy(popupDevPrivacy);
    document.addEventListener("keyup", keyupHandlerPrivacy);
});

// подписки закрытия
menuPrivacyPopupCloseButton.addEventListener("click", function () {
    togglePopupPrivacy(popupMenuPrivacy);
});

DevelopmPrivacyPopupCloseButton.addEventListener("click", function () {
    togglePopupPrivacy(popupDevelopmPrivacy);
});

DevPrivacyPopupCloseButton.addEventListener("click", function () {
    togglePopupPrivacy(popupDevPrivacy);
});


// закрытие по оверлэй
popupMenuPrivacy.addEventListener("click", function (e) {
    handleOverlayClickPrivacy(popupMenuPrivacy, e);
});

popupDevelopmPrivacy.addEventListener("click", function (e) {
    handleOverlayClickPrivacy(popupDevelopmPrivacy, e);
});

popupDevPrivacy.addEventListener("click", function (e) {
    handleOverlayClickPrivacy(popupDevPrivacy, e);
});

