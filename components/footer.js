class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="top-btn" class="top-btn">
                <i class="fas fa-chevron-up" title="Go to top"></i>
            </div>
            <footer>
                <p>805 Realty Co &copy; 2022 <a class="footer-phone-dt" href="">111-111-1111</a><a class="footer-phone-m" href="">C: 111-111-1111</a><a class="footer-contact" href="contact.html">Contact Us</a><span class="footer-address">Coast & County Brokers 847 Monterey St. #211, San Luis Obispo, CA</span></p>
                <p></p>
                <p>DRE #2198934</p>
                <ul class="footer-images">
                    <li>
                        <div>
                            <img class="footer-img1" src="Images/national-association-of-realtors-logo.png" alt="national association of realtors logo">
                        </div>
                    </li>
                    <li>
                        <div>
                            <img class="footer-img2" src="Images/california-association-of-realtors-logo-vector.png" alt="california association of realtors logo vector">
                        </div>
                    </li>
                    <li>
                        <div>
                            <img class="footer-img4" src="Images/CRMLS.png" alt="California Regional Multiple Listing Service">
                        </div>
                    </li>
                    <li>
                        <div>
                            <img class="footer-img3" src="Images/Give-Back_SLO-Association-of-Realtors.jpg" alt="SLO association of realtors">
                        </div>
                    </li>
                </ul>
            </footer>
        `;

        //top button
        if(document.querySelector('.top-btn')) {
            const topBtn = document.getElementById("top-btn");

            window.addEventListener('scroll', () => {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    topBtn.style.display = "block";
                }else {
                    topBtn.style.display = "none";
                }
            });

            topBtn.addEventListener('click', () => {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            });
        }
    }
}

customElements.define('footer-component', Footer);