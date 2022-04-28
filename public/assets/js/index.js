addEventListener('DOMContentLoaded', ()=>{
    const header__btn = document.querySelector('.header__btn');
    const header__quit = document.querySelector('.header__quit')
    if (header__btn) {
        header__btn.addEventListener('click', () =>{
            const header__ul = document.querySelector('.header__ul');
            header__ul.classList.toggle('show');
            header__btn.classList.toggle('header__hidden');
            header__btn.classList.remove('header__nohidden');
            header__quit.classList.toggle('header__nohidden')
            header__quit.classList.remove('header__hidden')
        });
    }
    if(header__quit){
        header__quit.addEventListener('click', () =>{
            const header__ul = document.querySelector('.header__ul');
            header__ul.classList.remove('show');
            header__quit.classList.toggle('header__hidden')
            header__quit.classList.remove('header__nohidden')
            header__btn.classList.toggle('header__nohidden')
            header__btn.classList.remove('header__hidden')
        });
    }
});

