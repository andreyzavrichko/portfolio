const paralax = document.querySelector('.parallax');
const layers = paralax.children;

function moveLayersDependOnScroll(wScroll) {
    Array.from(layers).forEach(layer => {
        let divider = layer.dataset.speed;
        
      

        const strafe = wScroll * divider / 37;              

        
            layer.style.transform = `translateY(-${strafe}%)`;
               
    });    
}

window.addEventListener('scroll', e=> {    
    const wScroll = window.pageYOffset; 
    moveLayersDependOnScroll(wScroll);
});