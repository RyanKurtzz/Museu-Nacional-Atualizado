let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    // Atualiza o índice atual
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    
    // Calcula o deslocamento
    const offset = -currentIndex * 100;

    // Atualiza a posição do carrossel
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-images img');
    if (slides.length > 0) {
        // Define a largura do container de imagens para acomodar todos os slides
        document.querySelector('.carousel-images').style.width = `${slides.length * 100}%`;
    }
});
