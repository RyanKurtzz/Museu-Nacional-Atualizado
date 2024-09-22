const botaoVideo = document.querySelector('.botao-video');

botaoVideo.addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=RGUYb-hivrc', '_blank');
});

document.getElementById('leia-mais').addEventListener('click', function(event) {
  event.preventDefault();
  const historiaDetalle = document.getElementById('historia-detalle');
  if (historiaDetalle) {
    historiaDetalle.style.display = 'block';
  } else {
    console.error('Elemento #historia-detalle não encontrado');
  }
});


