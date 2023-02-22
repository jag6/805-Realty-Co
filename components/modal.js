class Modal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="contact-modal" class="modal">
                <div id="modal-content">
                    <div id="modal-header">
                        <span class="close-modal">&times;</span>
                        <h2>805 Realty Co &copy;</h2>
                    </div>
                    <div id="modal-body">
                        <h3>Send Us a Message</h3>
                        <form action="contactform.php" method="POST">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="Name">  
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="Email">  
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" name="Phone">
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea name="Message"></textarea>
                            </div>
                            <input type="submit" name="submit" value="Thank You">
                        </form>
                    </div>
                    <div id="modal-footer">
                        <h3>805 Realty Co &copy; 2021</h3>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('modal-component', Modal);