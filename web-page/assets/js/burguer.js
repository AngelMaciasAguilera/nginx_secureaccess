const navBar = document.querySelector('.nav-bar');
const menuOn = document.querySelector('.menu-on');


if(navBar){
    navBar.addEventListener('click', (e) => {
        navBar.classList.toggle('open');
        menuOn.classList.toggle('menu-mobile');
    });
}
