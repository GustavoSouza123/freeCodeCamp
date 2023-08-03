const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

window.onscroll = () => {
    if(window.scrollY > 50) {
        c('#header').classList.add('header-scroll');
        c('.menu-mobile').classList.add('header-scroll');
    } else {
        c('#header').classList.remove('header-scroll');
        c('.menu-mobile').classList.remove('header-scroll');
    }
}

c('.menu-toggle').onclick = () => {
    if(c('.menu-mobile').style.display == 'flex') {
        c('.menu-mobile').style.display = 'none';
    } else {
        c('.menu-mobile').style.display = 'flex';
    }
    c('.menu-toggle').classList.toggle('active');
}

c('#footer .btn').onclick = () => {
    if(c('.hidden').style.display == 'flex') {
        c('.hidden').style.display = 'none';
    } else {
        c('.hidden').style.display = 'flex';
    }
}