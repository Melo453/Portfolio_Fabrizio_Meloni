const list = document.querySelectorAll('.navigation__list');

function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

// list.forEach((item) => item.addEventListener('click', function(event){
//     event.preventDefault();
// }));

list.forEach((item) => item.addEventListener('click', activeLink));

document.querySelector(".menu--mobile").addEventListener("click", animateBars);

var line1 = document.querySelector(".menu__bars1");
var line2 = document.querySelector(".menu__bars2");
var line3 = document.querySelector(".menu__bars3");
var menu =  document.querySelector(".navigation--mobile__nav");

function animateBars() {
    line1.classList.toggle("activemenu__bars1");
    line2.classList.toggle("activemenu__bars2");
    line3.classList.toggle("activemenu__bars3");

    menu.classList.toggle("active__menu")
};

const menuLinks = document.querySelectorAll('.navigation--mobile__list a[href^="#"]');

menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener("click", function(){

        line1.classList.remove("activemenu__bars1");
    line2.classList.remove("activemenu__bars2");
    line3.classList.remove("activemenu__bars3");

        menu.classList.remove("active__menu");
    });

});

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navigation__nav ul li');

window.addEventListener('scroll', () =>{
    let current = '';
    
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3.5) {
            current = section.getAttribute('id');
            
        }
    })
    navLi.forEach(li => {
        
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            
            li.classList.add('active')
        }
    })
}); 