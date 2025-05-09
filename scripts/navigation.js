const button = document.getElementById("nav-button");
const menu = document.querySelector(".navigator");


button.addEventListener('click', () => {
    console.log("aver");
    menu.classList.toggle('open');
    button.classList.toggle('open');
});


