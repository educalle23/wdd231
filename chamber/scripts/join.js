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
