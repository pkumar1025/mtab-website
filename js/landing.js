const landingImage = document.querySelector('.landing-image');

landingImage.addEventListener('mouseenter', function () {
    landingImage.style.animation = 'shineOnHover 0.5s forwards'; /* Trigger shine effect on hover */
});

landingImage.addEventListener('mouseleave', function () {
    landingImage.style.animation = 'shine 3s infinite alternate'; /* Reset to the original animation on mouse leave */
});