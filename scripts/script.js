// Abrir e fechar menu hamburger.
let abrirMenu = document.querySelector('.abrir-menu');
let navItems = document.querySelector('.nav-items');
let voltarTopo = document.querySelector('.voltar-topo');

abrirMenu.addEventListener('click', () => {
    navItems.classList.toggle('active');
    voltarTopo.classList.toggle('topoInativo');

      event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-items') && !event.target.closest('.abrir-menu')){
            navItems.classList.remove('active');
            voltarTopo.classList.remove('topoInativo');
    }
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
const botoes = document.querySelectorAll('.btn-conteudo');
const conteudo = document.getElementById('conteudoHabilidades');
const textoPadrao = '/* Toque sobre um ícone para ver a sua descrição. */';

let ativo = null;

// Detecta se é um dispositivo com toque
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

botoes.forEach(btn => {
    const texto = btn.dataset.conteudo;

    if (!isTouch) {
        // Desktop
        btn.addEventListener('mouseenter', () => conteudo.innerHTML = texto);
        btn.addEventListener('mouseleave', () => conteudo.innerHTML = textoPadrao);
    } else {
        // Mobile
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            conteudo.innerHTML = texto;
            ativo = btn;
        });
    }
});

// Clique fora das habilidades, apenas no mobile
if (isTouch) {
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.btn-conteudo')) {
            conteudo.innerHTML = textoPadrao;
            ativo = null;
        }
    });
}

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
interface;
const sections = document.querySelectorAll('section');
const linksMenu = document.querySelectorAll('.nav-link');

interface.addEventListener('scroll', () => {
    let rolagemY = interface.scrollTop;

    sections.forEach(section => {
        let sectionTop = section.offsetTop; // Distância do topo da seção em relação ao topo da página.
        let sectionAltura = section.offsetHeight; // Altura da seção.
        let sectionId = section.getAttribute('id');

        if (rolagemY >= sectionTop - 150 && rolagemY < sectionTop + sectionAltura - 150) {
            linksMenu.forEach(link => link.classList.remove('ativo'));

            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add('ativo');
        }
    });
});

// Carrossel de imagens na seção de realizações.
document.querySelectorAll('.area-carrossel').forEach(area => {
  const imagens = area.querySelectorAll('.imagem');
  let indexAtual = 0;

  function mostrarImagem() {
    imagens.forEach(img => img.classList.remove('visivel'));
    imagens[indexAtual].classList.add('visivel');
    indexAtual = (indexAtual + 1) % imagens.length;
  }

  // Inicia o carrossel com intervalo de 3 segundos para cada card
  setInterval(mostrarImagem, 3000);
});

// Exibir informações da linha do tempo.
let time = document.querySelectorAll('.item');
let timeContent = document.getElementById('time-content');
let itemAtivo = document.querySelector('.item.time-ativo');

if (itemAtivo){ 
    timeContent.innerHTML = itemAtivo.querySelector('span').dataset.time;
}

time.forEach(timeBtn => {
    timeBtn.addEventListener('click', () => {
        time.forEach(item => item.classList.remove('time-ativo'));
        timeBtn.classList.add('time-ativo');
        timeContent.innerHTML = timeBtn.querySelector('span').dataset.time; 
    });
});