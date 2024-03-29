customElements.define('header-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <header>
                <p>Evhan Blasingame</p>
                <div class="logo-container">
                    <a href="/805-Realty-Co"><img class="logo" src="Images/805 Realty Co logo.svg" alt=""></a>
                </div>
                <div id="toggle-nav" class="btn-toggle-nav">
                    <i class="fas fa-bars"></i>
                </div>
                <nav id="nav-sidebar" class="nav-sidebar">
                    <ul>
                        <li><a href="/805-Realty-Co">HOME</a></li>
                        <li><a href="/805-Realty-Co/about">ABOUT</a></li>
                        <div class="nav-dd-services">
                            <li><a id="toggle-services" class="toggle-nav-sb">SERVICES</a>
                                <div id="myDropdownM" class="dropdown-mc">
                                    <ul>
                                        <li><a href="/805-Realty-Co/services#selling">Selling</a></li>
                                        <li><a href="/805-Realty-Co/services#buying">Buying</a></li>
                                        <li><a href="/805-Realty-Co/services#loan">Home Loan</a></li>
                                    </ul>
                                    <div class="line-bottom"></div>
                                </div>
                            </li> 
                        </div>  
                        <li><a href="/805-Realty-Co/contact">CONTACT</a></li>
                        <li><a href="/805-Realty-Co/faq">FAQ</a></li>
                    </ul>
                </nav>
            </header>
            <nav id="nav" class="nav">
                <div class="nav-inner">
                    <ul class="nav-links">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/805-Realty-Co/about">ABOUT</a></li>
                        <div class="dropdown">
                            <li><a id="dropdown" class="dropbtn">SERVICES</a>
                                <div id="myDropdown" class="dropdown-content">
                                    <ul>
                                        <li><a href="/805-Realty-Co/services#selling">Selling<a></li></a>
                                        <li><a href="/805-Realty-Co/services#buying">Buying</a></li></a>
                                        <li><a href="/805-Realty-Co/services#loan">Home Loan</a></li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                        <li><a href="/805-Realty-Co/contact">CONTACT</a></li>
                        <li><a href="/805-Realty-Co/faq">FAQ</a></li>
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
});