/* Modal-date */
const Date = document.querySelector('.js-date-btn')
const containerDate = document.querySelector('.datepicker-wrapper')


function showDate() {
    containerDate.classList.add('open')
}

Date.addEventListener('click', showDate)