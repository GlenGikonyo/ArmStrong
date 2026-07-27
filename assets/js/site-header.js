class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="w-100 float-left header-con position-relative main-box br-20">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="index.html">
              <figure class="mb-0">
                <img src="assets/images/army.png" alt="logo-icon">
              </figure>
            </a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item mr-0">
                  <a class="nav-link p-0 active" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0" href="about.html">About</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown5" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown5" role="menu">
                    <a class="dropdown-item" href="houseMoving.html">House Moving Services | Intercounty Relocation Services</a>
                    <a class="dropdown-item" href="officeMoving.html">Office Moving | Relocation</a>
                    <a class="dropdown-item" href="internationalMoving.html">International Moving and Relocation</a>
                    <a class="dropdown-item" href="recordsManagement.html">Records Management</a>
                    <a class="dropdown-item" href="secureStorage.html">Affordable Storage Service | Self Storage Nairobi</a>
                    <a class="dropdown-item" href="staffRelocation.html">Staff Relocation Services</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0" href="services.html">Our clients</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0" href="services.html">FAQs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div class="header-contact">
              <ul class="list-unstyled mb-0 d-flex align-items-center">
                <li class="d-flex align-items-center">
                  <figure class="header-phone mb-0">
                    <img src="assets/images/call-icon.png" alt="call-icon" class="img-fluid d-inline-block">
                  </figure>
                  <div>
                    <a href="tel:+568925896325" class="text-decoration-none cell-no">
                      <span class="number d-inline-block urbanist-font">+254 720 322 873</span>
                    </a>
                  </div>
                </li>
                <li class="d-inline-block">
                  <a href="tracking.html" class="contact-btn d-inline-block">
                    Get a Quote <i class="fa-solid fa-angle-right ml-2"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('site-header', SiteHeader);