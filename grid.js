document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const img = box.querySelector('img');
        const newSrc = box.getAttribute('data-image');
        img.src = newSrc;
    });
});
function changeImage(element) {
    const newSrc = element.parentElement.getAttribute('data-image');
    element.src = newSrc;
}

