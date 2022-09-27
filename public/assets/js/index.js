const list = document.querySelectorAll('.navigation__list');

function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

// list.forEach((item) => item.addEventListener('click', function(event){
//     event.preventDefault();
// }));

list.forEach((item) => item.addEventListener('click', activeLink));


const text = document.querySelector(".inicio__move");
const textLoad = () =>{
    setTimeout(() =>{
        text.textContent = "Web developer";
    },0);
    setTimeout(() =>{
        text.textContent = "Freelancer";
    },4000);
    setTimeout(() =>{
        text.textContent = "Certified tech developer";
    },8000);
};


textLoad();
setInterval(textLoad,12000);

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



