const buddaParallax = document.querySelector('.budda-parallax');
const buddaLayers = buddaParallax.children;

function moveLayersDependsOnScroll(layers, wScroll) {
  Array.from(layers).forEach((layer) => {
    const divider = layer.dataset.speed;
    const offset = -wScroll / divider;
    layer.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}

window.addEventListener('scroll', () => {
  if (window.innerWidth < 768) {
    return;
  }
  const wScroll = window.pageYOffset;  

  const { top } = buddaParallax.getBoundingClientRect();
  const buddaParallaxOffset = window.innerHeight - top;
  if (buddaParallaxOffset > 0) {
    moveLayersDependsOnScroll(buddaLayers, buddaParallaxOffset);
    return;
  }
});