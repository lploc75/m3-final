// Function to add tabindex attribute to images
function addTabIndex() {
    let images = document.querySelectorAll('.gallery img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

// Function to update large image on focus
function handleFocus(event) {
    let largeImage = document.getElementById('largeImage');
    largeImage.src = event.target.src;
    largeImage.alt = event.target.alt;
    console.log('Image focused!');
}

// Function to update large image on blur
function handleBlur() {
    let largeImage = document.getElementById('largeImage');
    largeImage.src = '';
    largeImage.alt = '';
    console.log('Image blurred!');
}

window.onload = function () {
    addTabIndex();

    let images = document.querySelectorAll('.gallery img');
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('focus', handleFocus);
        images[i].addEventListener('blur', handleBlur);
    }
}

// lightbox
function openLightbox(imageSrc, imageAlt) {
    const lightboxContainer = document.getElementById("lightboxContainer");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightboxContainer.classList.add("active");
}

function closeLightbox() {
    const lightboxContainer = document.getElementById("lightboxContainer");
    lightboxContainer.classList.remove("active");
}

