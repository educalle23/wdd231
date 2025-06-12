export const initHamburgerMenu = () => {
    const button = document.getElementById("ham-button");
    const menu = document.querySelector(".navigator");
    
    if (button && menu) {
        button.addEventListener('click', () => {
            menu.classList.toggle('open');
            button.classList.toggle('open');
        });
    }
};