
// forms
const registrationForm = document.querySelector('.form__body');


//модалки
// const popupDevelopm = document.querySelector(".popup_developm");
// const popupDevelopmMobile = document.querySelector(".popup_dev");
// const popupDevelopmTouch = document.querySelector(".popup_touch");
const popupMenu = document.querySelector(".popup_menu");


// const popupThanks = document.querySelector(".popup_thanks");
// thanksmodal = ..

// Кнопки открытия
// const openDevelpPopupButton = document.querySelector(".header__presa");
// const openDevelpMobilePopupButton = document.querySelector(".popup__presa");
// const burgerMenuButton = document.querySelector(".header__menu-burger");
const openRegistrationButton = document.querySelector(".main__card-butt-reg");
// const openDevelpTouchPopupButton = document.querySelector(".main__details_look-touch");
const openRegistrationTouchButton = document.querySelector(".main__card-butt-reg-touch");



// Кнопки закрытия
// const developPopupCloseButton = document.querySelector(".popup__closedbutt-devel");
// const developPopupMobileCloseButton = document.querySelector(".popup__closedbutt-dev");
const menuPopupClosedButton = document.querySelector(".popup__closedbutt-menu");
const registerPopuplosedButton = document.querySelector(".popup__closed-mar");
const closedContact = document.querySelector(".popup__link-menu-contact");
const closedMone = document.querySelector(".popup__link-menu_mone");
const closedVesna = document.querySelector(".popup__link-menu_vesna");
// const developPopupTouchCloseButton = document.querySelector(".popup__closedbutt-touch");


// подписки открытия
// openDevelpPopupButton.addEventListener("click", function() {
//     togglePopup(popupDevelopm);
//     document.addEventListener("keyup", keyupHandler);
// });

// openDevelpMobilePopupButton.addEventListener("click", function() {
//     togglePopup(popupDevelopmMobile);
//     togglePopup(popupMenu);
//     document.addEventListener("keyup", keyupHandler);
// });

// burgerMenuButton.addEventListener("click", function() {
//     togglePopup(popupMenu);
//     document.addEventListener("keyup", keyupHandler);
// });



// подписки закрытия

// closedContact.addEventListener("click", function () {
//     togglePopup(popupMenu);
// });

// developPopupCloseButton.addEventListener("click", function() {
//     togglePopup(popupDevelopm);
//     // togglePopup(popupMenu);
// });

// developPopupMobileCloseButton.addEventListener("click", function() {
//     togglePopup(popupDevelopmMobile);
//     togglePopup(popupMenu);

// });

// menuPopupClosedButton.addEventListener("click", function() {
//     togglePopup(popupMenu);
// });

// closedMone.addEventListener("click", function() {
//     togglePopup(popupMenu);
// });
 
// closedVesna.addEventListener("click", function() {
//     togglePopup(popupMenu);
// });
// developPopupTouchCloseButton.addEventListener("click", function () {
//     togglePopup(popupDevelopmTouch);
// });

// registerPopupTouchlosedButton.addEventListener("click", function () {
//     togglePopup(popupRegTouch);
// });

// закрытие по оверлэй
// popupDevelopm.addEventListener("click", function(e) {
//     handleOverlayClick(popupDevelopm, e);
// });

// popupMenu.addEventListener("click", function(e) {
//     handleOverlayClick(popupMenu, e);
// });


// popupDevelopmMobile.addEventListener("click", function(e) {
//     handleOverlayClick(popupDevelopmMobile, e);

// });







// валидация
// валидация

const registrationInputs = Array.from(registrationForm.querySelectorAll('.form__input'));
// const registrationSubmitButton = registrationForm.querySelector('.form__button')

function checkForm() {
    // e.preventDefault();
    var valid = registrationForm.checkValidity();
    // console.log(valid);
    registrationInputs.forEach(input => {
        const error = input.closest('.form__item').querySelector('.form__error');
        const border = input.closest('.form__item').querySelector(".form__border");
    
        if(input.id == 'phone') {
            input.addEventListener('keypress', () => {
                // console.log('input', input)
                // console.log('input.validity.valid', input.validity.valid)
                if (input.validity.valid) {
                    error.classList.add('form__error_hidden')
                    border.classList.remove('error-red')
                } else {
                    error.classList.remove('form__error_hidden')
                    border.classList.add('error-red')
                }
            })
        }
    
        input.addEventListener('input', () => {
            // console.log('input', input)
            // console.log('input.validity.valid', input.validity.valid)
            if (input.validity.valid) {
                error.classList.add('form__error_hidden')
                border.classList.remove('error-red')
            } else {
                error.classList.remove('form__error_hidden')
                border.classList.add('error-red')
            }
        })
    
        input.addEventListener('invalid', () => {
            error.classList.remove('form__error_hidden');
            border.classList.add('error-red')
        })
    })

    return valid
}
