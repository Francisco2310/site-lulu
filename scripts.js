document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "url(lulu1.jpg)",
    "url(lulu2.jpg)",
    "url(lulu3.jpg)",
    "url(lulu4.jpg)",
    // Adicione mais URLs conforme necessário
  ];
  const background = document.querySelector('.background-images');
  let currentIndex = 0;

  function changeBackground() {
    background.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(() => {
      background.classList.toggle('active');
    }, 50); // Ajuste conforme necessário
  }

  function startSlideshow() {
    setInterval(changeBackground, 3000); // Troca de imagem a cada 3 segundos (3000 milissegundos)
  }

  startSlideshow(); // Inicia o slideshow automaticamente
});