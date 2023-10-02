customElements.define('modal-component', class extends HTMLElement {
    constructor() {
        super();
        
        this.innerHTML = `
            <div id="contact-modal" class="modal">
                <div id="modal-content">
                    <div id="modal-header">
                        <span class="close-modal">&times;</span>
                        <h2>805 REALTY CO &copy;</h2>
                    </div>
                    <div id="modal-body">
                        <h3>Send Us a Message</h3>
                        <form action="contactform.php" method="POST">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name">  
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email">  
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" name="phone" id="phone">
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea name="Message" id="message"></textarea>
                            </div>
                            <input type="submit" name="submit" value="Thank You">
                        </form>
                    </div>
                    <div id="modal-footer">
                        <h3>805 REALTY CO &copy; 2021</h3>
                    </div>
                </div>
            </div>
        `;

        const modal = document.getElementById('contact-modal');
        const openModal = document.getElementById('modal-open');
        const closeModal = document.querySelector('.close-modal');
        const input = document.getElementById('name');
        const body = document.querySelector('body');
        
        openModal.addEventListener('click', () => {
            modal.style.display = 'block';
            body.style.overflow = 'hidden'; 
            input.focus();
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
    }
});