import { initHamburgerMenu } from './navigation.js';

initHamburgerMenu();

document.addEventListener('DOMContentLoaded', () => {
    const bookBtns = document.querySelectorAll('.book-but');
    
    if (bookBtns.length > 0) {
        bookBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                window.location.href = 'booking.html';
            });
        });
    }
});
