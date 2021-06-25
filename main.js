// Abre e fecha o menu quando clicar no Icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// mudar o header da pagina quando der scroll

function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        // scroll é maior que a altira do header
        header.classList.add('scroll')
    } else {
        // scroll menor que a altura do header
        header.classList.remove('scroll')
    }
}



// Testimonials SWIPER JS
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

// ScrollReveal JS Mostrar elementos quando der scroll na pagina

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, { interval: 100 }
)


// Botão voltar para o Topo da Pagina

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// Logica unificada do scroll da pagina
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
})

// MENU ATIVO CONFORME A SEÇÃO VISIVEL NA PAGINA
