// Abrir e fechar menu hamburger.
let abrirMenu = document.querySelector('.abrir-menu');
let navItems = document.querySelector('.nav-items');

abrirMenu.addEventListener('click', ()=>{
    navItems.classList.toggle('active');
})

// Itens ativos no menu
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("ativo"));
        link.classList.add("ativo");
    })
})

// Mostrar e esconder descrição das habilidades.
let btnConteudo = document.querySelectorAll('.btn-conteudo');
let conteudoHabilidades = document.getElementById('conteudoHabilidades');

btnConteudo.forEach(btn => {
    btn.addEventListener('mouseover', ()=>{
        conteudoHabilidades.innerHTML = btn.dataset.conteudo;
    })
    btn.addEventListener('mouseout', ()=>{
        conteudoHabilidades.innerHTML = ' /* Passe o mouse sobre um ícone para ver a sua descrição. */';
    })
})

// Recalcula a posição da página ao adicionar ou remover as abas de habilidades.
const sectionHabilidades = document.getElementById("habilidades");
const observer = new MutationObserver(() => {
    sectionHabilidades.scrollIntoView({ behavior: "smooth", block: "start" });
});
observer.observe(conteudoHabilidades, { childList: true, subtree: true });

// Exibir informações da linha do tempo.
let time = document.querySelectorAll('.item');
let timeContent = document.getElementById('time-content');

time.forEach(timeBtn => {
    timeBtn.addEventListener('click', () => {
        timeContent.innerHTML = timeBtn.querySelector('span').dataset.time; 
    });
});

// Botão voltar ao topo da página.
const interface = document.querySelector('.interface');
const sectionAventureiro = document.querySelector('#aventureiro');
const botao = document.querySelector('.voltar-topo');

interface.addEventListener('scroll', () => {
    const rolagemY = interface.scrollTop;
    const distaciaTopo = sectionAventureiro.offsetTop;

    if (rolagemY > distaciaTopo) {
        botao.classList.add('ativo');
    } else {
        botao.classList.remove('ativo');
    }
});

// Efeito Scrollspy de rolagem no menu de navegação.
const sections = document.querySelectorAll('section');
const linksMenu = document.querySelectorAll('.nav-link');

interface.addEventListener('scroll', () => {
    let scrollY = interface.scrollTop;

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop - 150 && scrollY < sectionTop + sectionHeight - 150) {
            linksMenu.forEach(link => link.classList.remove('ativo'));

            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add('ativo');
        }
    });
});