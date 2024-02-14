const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);


// efeito da imagem ao rolar a tela

c('#image').style.opacity = .9
document.addEventListener('scroll', () => {
    if(window.scrollY > 600) {
        c('#image').style.opacity = .8;
    } else {
        c('#image').style.opacity = .9;
    }
});