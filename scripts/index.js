document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('menu-btn');
    const nav = document.getElementById('navigator');

    button.addEventListener('click', function() {
        button.classList.toggle('open');
        nav.classList.toggle('open');
        console.log('klk');
    });
});