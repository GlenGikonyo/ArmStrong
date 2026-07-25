class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="padding-rl float-left w-100">
          <section class="float-left w-100 footer-con position-relative br-30 padding-rl-responsive bg-accent">
            <div class="main-container position-relative">
              <div class="cta-con">
                <div class="row align-items-center">
                  <div class="col-lg-6 col-md-6">
                    <h2 class="sub-heading2 text-white mb-0">
                      Efficient Moving & <br>
                      Secure Storage Solutions
                    </h2>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="cta-content-con">
                      <p class="">
                        We provide reliable moving and storage services designed to make your<br>
                        relocation stress-free and your belongings safe. From local moves to long-term
                        storage, we ensure a seamless experience tailored to your needs.
                      </p>
                      <a href="contact.html" class="text-decoration-none primary_btn d-inline-block">
                        Get a Quote <i class="fa-solid fa-angle-right ml-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="middle_portion">
                <div class="row">
                  <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="logo-content">
                      <a href="index.html" class="footer-logo">
                        <figure class="mb-0"><img src="assets/images/army.png" alt="footer-logo"></figure>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="links">
                      <ul class="list-unstyled mb-0">
                        <li><i class="fa-solid fa-angle-right"></i><a href="about.html" class="text-decoration-none">About</a></li>
                        <li><i class="fa-solid fa-angle-right"></i><a href="services.html" class="text-decoration-none">Services</a></li>
                        <li><i class="fa-solid fa-angle-right"></i><a href="blog.html" class="text-decoration-none">Our Clients</a></li>
                        <li><i class="fa-solid fa-angle-right"></i><a href="contact.html" class="text-decoration-none">Contact</a></li>
                        <li><i class="fa-solid fa-angle-right"></i><a href="faq.html" class="text-decoration-none">FAQs</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="contact">
                      <ul class="list-unstyled mb-0 p-0">
                        <li class="text">
                          <span class="footer-info-text">Office Hours:</span>
                          <a href="mailto:Info@velotrax.com" class="text-decoration-none">Mon - Fri 08:00AM - 05:00PM</a>
                        </li>
                        <li class="text">
                          <span class="footer-info-text">Phone:</span>
                          <a href="tel:+254 720 322 873" class="text-decoration-none">+254 720 322 873</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="icon">
                      <ul class="list-unstyled p-0 mb-0">
                        <li class="text">
                          <span class="footer-info-text d-block">Head Office:</span>
                          <a class="address mb-0" href="https://maps.app.goo.gl/4914bKV6VTJbfvPd7">
                            Reliance Industries, Warehouse 7,<br>
                            Mombasa Road
                          </a>
                        </li>
                      </ul>
                      <ul class="list-unstyled mb-0 social-icons">
                        <li><a href="https://www.facebook.com/" class="text-decoration-none"><i class="fa-brands fa-facebook-f social-networks"></i></a></li>
                        <li><a href="https://instagram.com/" class="text-decoration-none"><i class="fa-brands fa-instagram social-networks" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/" class="text-decoration-none"><i class="fa-brands fa-linkedin social-networks"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="copyright-con float-left w-100 position-relative text-center">
                <p class="mb-0">Copyright &copy; <span id="year"></span> Armstrong Movers. All rights reserved.</p>
              </div>
            </div>
          </section>
        </div>
      `;
  
      // Set the copyright year once the footer markup exists
      const yearEl = this.querySelector('#year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    }
  }
  
  customElements.define('site-footer', SiteFooter);