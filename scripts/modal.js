let modal = document.getElementById('contact-modal')
    openModal = document.getElementById('modal-open'),
    closeModal = document.querySelector('.close-modal');
    body = document.querySelector('body');
    
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    body.style.overflow = 'hidden'; 
});
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
    body.style.overflow = 'auto';    
});
window.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
});