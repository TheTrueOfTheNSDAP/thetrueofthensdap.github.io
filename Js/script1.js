const overlay = document.querySelector('.overlay');

window.addEventListener('load', () => {
    const footerImg = document.querySelector('.footer-img-container');
    footerImg.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});