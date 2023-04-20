const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);


// efeito da imagem ao rolar a tela

/*c('#image').style.opacity = '1';
let lastY = window.scrollY;
document.addEventListener('scroll', () => {
    if(window.scrollY > lastY) {
        console.log('descendo')
        c('#image').style.opacity -= 0.00016 * window.scrollY;
    } else {
        console.log('subindo')
        c('#image').style.opacity += 0.00016 * window.scrollY;
    }

    lastY = window.scrollY;
});*/