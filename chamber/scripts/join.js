document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('.more-info');
    const closeButtons = document.querySelectorAll('.close-button');
    const modals = document.querySelectorAll('dialog');

    modalButtons.forEach(button => {
        button.addEventListener('click', event => {
        // event.preventDefault();
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal && typeof modal.showModal === 'function') {
            modal.showModal();
        }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
        const dialog = button.closest('dialog');
        if (dialog) {
            dialog.close();
        }
        });
    });


    modals.forEach(modal => {
        modal.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            modal.close();
        }
        });
    });
    });



const button = document.getElementById("navigation-button");
const menu = document.querySelector(".navigator");

button.addEventListener('click', () => {
    menu.classList.toggle('open');
    button.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', function() {
    const timestampField = document.getElementById('timestamp');
    
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });
    
    timestampField.value = timestamp;
});