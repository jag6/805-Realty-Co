let modal = document.getElementById('contact-modal')
    openModal = document.getElementById('modal-open'),
    closeModal = document.querySelector('.close-modal');
    body = document.querySelector('body');
openModal.addEventListener('click', function() {
    modal.style.display = 'block';
    body.style.overflow = 'hidden'; 
})
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; 
    body.style.overflow = 'auto';    
})
window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
})