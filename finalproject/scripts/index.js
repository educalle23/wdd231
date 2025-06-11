const button = document.getElementById("ham-button");
const menu = document.querySelector(".navigator");

console.log(button)

button.addEventListener('click', () => {
    menu.classList.toggle('open');
    button.classList.toggle('open');
});

