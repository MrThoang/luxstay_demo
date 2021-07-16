var search =  document.getElementsByClassName('search-content')
let date =  document.getElementsByClassName('header__search-date')
let guests =  document.getElementsByClassName('header__search-guests')

    search[0].addEventListener('click', function e(prop){
        prop.stopPropagation()
        this.classList.toggle('toggle-css');
    })



