function openLightbox(img) {
    var lightbox = document.getElementById('lightbox')
    var lightboxImg = lightbox.querySelector('.lightbox-img')
    lightboxImg.src = img.src
    lightbox.style.display = 'flex'
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox')
    lightbox.style.display = 'none'
}

window.addEventListener('click', function (event) {
    var lightbox = document.getElementById('lightbox')
    if (event.target === lightbox) {
        closeLightbox()
    }
})
