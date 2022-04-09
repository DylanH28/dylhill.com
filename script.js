let mouseCursor = document.querySelector('.cursor');
let buttons = document.querySelectorAll('.buttons');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
}

buttons.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('linkGrow');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('linkGrow');
    });
});