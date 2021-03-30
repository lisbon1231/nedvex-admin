// const initilData = [
//     {
//         title: "Менеджер по продажам",
//         type: "Продажи",
//         descr: 'Мы обеспечиваем собственным офисом продаж и потоком клиентов на объект, вам предстоит проводить презентацию комплекса и доводить клиентов до сделки.',
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/manager"

//     },
//     {
//         title: "HR менеджер",
//         type: "Управление персоналом",
//         descr: " Ищем искателя. Вашей задачей будет поддерживать боевой дух нашей команды, а также искать новые таланты и публиковать вакансии на всевозможных площадках, например, прямо на этой странице :)",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/hrmanager"

//     },
//     {
//         title: "SMM-менеджер",
//         type: "Маркетинг",
//         descr: "Человек, который будет представлять и продвигать нас в социальных сетях. Вас ждут как творческие, так и стратегические задачи, в которых не обойтись без креативного мышления и владения современными инструментами маркетинга.",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/smmmanager"
//     },
//     {
//         title: "Руководитель строительного проекта",
//         type: "Девелопмент",
//         descr: "Вы возглавите проекты по реконструкции и строительству различных комплексов в Сочи, а также будете участвовать в разработке концепции, ведении отчетности и переговорах с представителями власти.",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/headofdevelopment"
//     },
//     {
//         title: "Заместитель финансового директора",
//         type: "Финансы",
//         descr: "Тут не обойтись без диплома по экономике или финансам. Вам предстоит работа с бюджетированием, банками по привлечению финансировании, прохождение банковского мониторинга и др.",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/deputycfo"
//     },
//     {
//         title: "Аналитик",
//         type: "Маркетинг",
//         descr: "Эксперт в CRM, магистр Excel, Google Analytics и других инструментов для сбора данных и ответа на вопросы вроде \"а где мы вообще находимся на рынке\" для формирования предложений по улучшению результатов деятельности компании.",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/analyst"
//     },
//     {
//         title: "Специалист отдела кадров",
//         type: "Управление персоналом",
//         descr: "Вам предстоит сопровождать процессы трудоустройства, отпусков и других активностей сотрудников в компании, работать с документами и отчетами по кадрам.",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/hrspecialist"
//     },
//     {
//         title: "Лид-менеджер",
//         type: "Продажи",
//         descr: "Мы обеспечим качественное обучение и поток клиентов, который вам предстоит обрабатывать, проводить презентации и доводить до сделки.",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/leadmanager"
//     },
//     {
//         title: "Руководитель отдела снабжения",
//         type: "Снабжение",
//         descr: "Продукт, который мы от вас ожидаем, — это организация работы отдела так, чтобы наши объекты были укомплектованы в срок и по оптимальной цене всеми необходимыми ТМЦ.",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/headofsupplydepartment/"
//     },   
//     {
//         title: "Специалист отдела снабжения",
//         type: "Снабжение",
//         descr: "Ищем крутого специалиста, который будет обеспечивать предприятие всеми требуемыми для его производственной деятельности материальными ресурсами и работать над эффективным использованием этих ресурсов.",
//         cardButton: "Подробнее",
//         link: "https://nedvex.ru/job/supplyspecialist/"
//     }    
// ]

// заменить на норм
const initilData = [...document.querySelectorAll('.card')].map((card) => {
    const type = card.querySelector('.card__type').textContent
    const title = card.querySelector('.card__title').textContent
    const descr = card.querySelector('.card__descr').textContent
    const cardButton = card.querySelector('.card__button')
    const cardButtonText = card.querySelector('.card__button').textContent
    const link = cardButton.href
    return {
        title,
        type,
        descr,
        cardButton: cardButtonText,
        link
    }   
})

const isModile = window.innerWidth < 500;
const AMOUT_PER_BLOCK = isModile ? 6 : 12;
let renderRounds = 0;
let dataToRender = initilData;
let selectedType = 'all';
let showExistingItems = false;
const initialDataLength = initilData.length;

const list = document.querySelector('.cards')
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
// const loadMoreButton = document.querySelector('.main__button');
const burger = document.querySelector('.alert-menu__button');
const submenu = document.querySelector('.alert-menu__submenu');
const phone = document.querySelector('.alert-menu__icon');
const phoneOth = document.querySelector(".alert-menu__phone");
const phoneBox = document.querySelector(".popup__box-hidden_oth");




// loadMoreButton.addEventListener('click', renderCardRange)

function renderCardRange() {
    dataToRender
        .slice(AMOUT_PER_BLOCK * renderRounds, AMOUT_PER_BLOCK * (++renderRounds))
        .forEach(cardData => {
            const card = cardTemplate.cloneNode(true);
            const title = card.querySelector('.card__title')
            const type = card.querySelector('.card__type')
            const descr = card.querySelector(".card__descr")
            const cardButton = card.querySelector(".card__button")

            title.textContent = cardData.title;
            type.textContent = cardData.type;
            descr.textContent = cardData.descr;
            cardButton.textContent = cardData.cardButton;
            cardButton.href = cardData.link
            list.append(card)
        })
    // if (dataToRender.length <= AMOUT_PER_BLOCK * (renderRounds) && dataToRender.length > AMOUT_PER_BLOCK * (renderRounds - 1)) {
        // loadMoreButton.classList.add('main__button_hidden')
    // }


}

// document.querySelector('.form-menu__checkbox').addEventListener('change', (e) => {
//     e.stopPropagation()
//     showExistingItems = e.target.checked;
//     showFilteredCards()
// })


// document.querySelector('.form-menu__checkbox2').addEventListener('change', (e) => {
//     e.stopPropagation()
//     showExistingItems = e.target.checked;
//     showFilteredCards()
// })

const form1 = document.querySelector('.form-menu_large');
let currentLable = form1.querySelector('.form-menu__label_checked')

form1.addEventListener('change', (e) => {
    selectedType = e.target.value;

    currentLable.classList.remove('form-menu__label_checked')
    currentLable = e.target.closest('.form-menu__label');
    currentLable.classList.add('form-menu__label_checked')

    showFilteredCards();
})

const form2 = document.querySelector('.form-menu_small');
// let currentLable2 = form2.querySelector('.form-menu__label_checked')

// document.querySelector('.form-menu_small').addEventListener('change', (e) => {
//     selectedType = e.target.value;

//     console.log(currentLable2)
//     currentLable2.classList.remove('form-menu__label_checked')
//     currentLable2 = e.target.closest('.form-menu__label');
//     currentLable2.classList.add('form-menu__label_checked')

//     showFilteredCards();
// })

function showFilteredCards() {
    // loadMoreButton.classList.remove('main__button_hidden')
    renderRounds = 0;
    dataToRender = initilData.filter(cardData => {
        const cardPrice = cardData.price;
        const cardType = cardData.type;
        let shouldItemStay = true;

        shouldItemStay = (cardType == selectedType) || (selectedType == 'all');

        // if (showExistingItems && (cardPrice == 'Продажи приостановлены' || cardPrice == 'Проект реализован')) {
        //     shouldItemStay = false;
        // }

        return shouldItemStay;
    })

    list.innerHTML = '';
    renderCardRange()
}

// $.fn.isOnScreen = function() {
//     var win = $(window);

//     var viewport = {
//       top: win.scrollTop(),
//       left: win.scrollLeft()
//     };
//     viewport.right = viewport.left + win.width();
//     viewport.bottom = viewport.top + win.height();

//     var bounds = this.offset();
//     bounds.right = bounds.left + this.outerWidth();
//     bounds.bottom = bounds.top + this.outerHeight();

//     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

//   };

