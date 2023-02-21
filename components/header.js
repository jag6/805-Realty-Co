class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <p>Evhan Blasingame</p>
                <div class="logo-container">
                    <a href="index.html"><img class="logo" src="Images/805 Realty Co logo.svg" alt=""></a>
                </div>
                <div id="toggle-nav" class="btn-toggle-nav">
                    <i class="fas fa-bars"></i>
                </div>
                <nav id="nav-sidebar" class="nav-sidebar">
                    <ul>
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <div class="nav-dd-services">
                            <li><a id="toggle-services" class="toggle-nav-sb">SERVICES</a>
                                <div id="myDropdownM" class="dropdown-mc">
                                    <ul>
                                        <li><a href="services.html#selling">Selling</a></li>
                                        <li><a href="services.html#buying">Buying</a></li>
                                        <li><a href="services.html#loan">Home Loan</a></li>
                                    </ul>
                                    <div class="line-bottom"></div>
                                </div>
                            </li> 
                        </div>  
                        <li><a href="contact.html">CONTACT</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </nav>
            </header>
            <nav id="nav" class="nav">
                <div class="nav-inner">
                    <ul class="nav-links">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <div class="dropdown">
                            <li><a id="dropdown" class="dropbtn">SERVICES</a>
                                <div id="myDropdown" class="dropdown-content">
                                    <ul>
                                        <a href="services.html#selling"><li>Selling</li></a>
                                        <a href="services.html#buying"><li>Buying</li></a>
                                        <a href="services.html#loan"><li>Home Loan</li></a>
                                    </ul>
                                </div>
                            </li>
                        </div>
                        <li><a href="contact.html">CONTACT</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                    <ul class="nav-soc-med">
                        <li>
                            <a href="">
                                <i class="fab fa-instagram"></i>               
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fab fa-facebook-f"></i>                
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fab fa-twitter"></i>             
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;

    
        //NAV

        //get services dropdown menu
        const dropdown = document.getElementById('dropdown');
        dropdown.addEventListener('click', () => {
            document.getElementById('myDropdown').classList.toggle('show');
          });
        
        //click off dropdown to close it
        window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName('dropdown-content');
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }});


        //MOBILE NAV

        //toggle mobile nav menu
        let toggleNavStatus = false;
        let getSidebar = document.querySelector(".nav-sidebar");
        let getSidebarUl = document.querySelector(".nav-sidebar ul");
        let getSidebarA = document.querySelectorAll(".nav-sidebar a");

        document.getElementById('toggle-nav').addEventListener('click', () => {
            if (toggleNavStatus === false) {
                getSidebar.style.visibility = "visible";
                getSidebarUl.style.visibility = "visible";
                let arrayLength = getSidebarA.length;
                for (var i = 0; i < arrayLength; i++) {
                    getSidebarA[i].style.opacity = "1";
                }
                toggleNavStatus = true;
            }
            else if (toggleNavStatus === true) {
                getSidebar.style.visibility = "hidden";
                getSidebarUl.style.visibility = "hidden";
                let arrayLength = getSidebarA.length;
                for (var i = 0; i < arrayLength; i++) {
                    getSidebarA[i].style.opacity = "0";
                }
                toggleNavStatus = false;
            }
        });
        let toggleNavStatusOther = false;

        //get services dropdown menu
        document.getElementById('toggle-services').addEventListener('click', () => {
            const x = document.getElementById("myDropdownM");
            if (x.style.display === "flex") {
                    x.style.display = "none";
            }   else {
                    x.style.display = "flex";
            }
        });
    }
}

customElements.define('header-component', Header); 