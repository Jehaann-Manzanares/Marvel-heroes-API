const $overlay = document.getElementById('overlay')
const $modal = document.getElementById('modal')

function modal(){
    
    
    $overlay.classList.add('active')
    // $modal.classList.add('active')
    $modal.style.animation = 'fadeInBottom 1s forwards'
    
    
}


$overlay.addEventListener('click', () => {
    
    $modal.style.animation = 'fadeOutBottom 1s forwards'
    $overlay.style.transitionDelay = '1s';
    $overlay.classList.remove('active')
})