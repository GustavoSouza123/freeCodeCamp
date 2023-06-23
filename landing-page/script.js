const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

window.onscroll = () => {
    if(window.scrollY > 50) {
        c('#header').classList.add('header-scroll');
    } else {
        c('#header').classList.remove('header-scroll');
    }
}