import { initHamburgerMenu } from './navigation.js';

initHamburgerMenu();

document.addEventListener('DOMContentLoaded', () => {

    const modals = document.querySelectorAll('dialog');
    

    const confirmModal = document.getElementById('confirmModal');
    const successModal = document.getElementById('successModal');
    

    const editBtn = document.getElementById('editBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    const closeSuccessBtn = document.getElementById('closeSuccess');
    
    function showConfirmModal(formData) {
        const confirmDetails = document.getElementById('confirmationDetails');
        confirmDetails.innerHTML = `
            <div class="confirmation-info">
                <p><strong>Name:</strong> ${formData.fname} ${formData.lname}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Date & Time:</strong> ${new Date(formData.date).toLocaleString()}</p>
                ${formData.extra ? `<p><strong>Extra Info:</strong> ${formData.extra}</p>` : ''}
            </div>
        `;
        
        if (confirmModal && typeof confirmModal.showModal === 'function') {
            confirmModal.showModal();
        }
    }
    
    function showSuccessModal() {
        if (successModal && typeof successModal.showModal === 'function') {
            successModal.showModal();
        }
    }

    if (editBtn) {
        editBtn.addEventListener('click', () => {
            confirmModal.close();
        });
    }
    
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            confirmModal.close();
            
            setTimeout(() => {
                showSuccessModal();
            }, 300); 
        });
    }
    
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            successModal.close();
            window.location.href= 'index.html'; 
        });
    }
    
    modals.forEach(modal => {
        modal.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                modal.close();
            }
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.close();
            }
        });
    });
    
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = {
                fname: formData.get('fname'),
                lname: formData.get('lname'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                date: formData.get('date'),
                extra: formData.get('extra') || ''
            };
            

            showConfirmModal(data);
        });
    }
    

});