// Span com atualização automática do ano para o rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const progressBar = document.querySelector('.progress-bar');
    const hideThreshold = 50;
    let isUpdating = false;

    // Função para atualizar a barra de progresso
    const updateProgressBar = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    };

    // Função para atualizar a barra de progresso (com requestAnimationFrame)
    const onScroll = () => {
        if (!isUpdating) {
            window.requestAnimationFrame(() => {
                updateProgressBar();
                isUpdating = false;
            });
            isUpdating = true;
        }
    };

    // Evento de rolagem para esconder/mostrar a navbar e atualizar a barra de progresso
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Controle da exibição da navbar (subir/descer)
        if (Math.abs(currentScroll - lastScrollTop) > hideThreshold) {
            if (currentScroll > lastScrollTop) {
                // Rolagem para baixo: esconder navbar e barra de progresso
                navbar.classList.add('hide');
                navbar.classList.remove('show');
                progressBar.classList.add('hide');
            } else {
                // Rolagem para cima: mostrar navbar e barra de progresso
                navbar.classList.add('show');
                navbar.classList.remove('hide');
                progressBar.classList.add('show');
                progressBar.classList.remove('hide');
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }

        // Atualiza a barra de progresso
        onScroll();
    });
});

// Seleciona os botões da modal dos vídeos embed do Youtube
const openModalButton1 = document.getElementById("openModalButton1");
const openModalButton2 = document.getElementById("openModalButton2");
const closeModalButton = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

// Função para alternar a visibilidade da modal
function alternateModal(){
    modal.classList.toggle("open");
}

// Função para abrir a modal com o vídeo correspondente ao botão clicado
function openModalWithVideo(videoLink) {
    alternateModal();
    video.setAttribute("src", videoLink);
}

// Event listener para o botão do vídeo 1
openModalButton1.addEventListener("click", () => {
    const videoLink = openModalButton1.dataset.videoLink;
    openModalWithVideo(videoLink);
});

// Event listener para o botão do vídeo 2
openModalButton2.addEventListener("click", () => {
    const videoLink = openModalButton2.dataset.videoLink;
    openModalWithVideo(videoLink);
});

// Event listener para o botão de fechar a modal
closeModalButton.addEventListener("click", () => {
    alternateModal();
    video.setAttribute("src", "");
});

// Seleciona o botão "back-to-top" pelo ID
const backToTopButton = document.getElementById('back-to-top');

// Adiciona um evento de scroll à janela
window.addEventListener('scroll', () => {
    // Verifica se o usuário rolou mais de 100 pixels para baixo
    if (window.scrollY > 100) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Adiciona um evento de clique ao botão
backToTopButton.addEventListener('click', () => {
    // Quando clicado, faz a página rolar suavemente de volta ao topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
