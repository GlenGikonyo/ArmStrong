class SideClients extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <div class="padding-rl float-left w-100">
      <section
        class="float-left w-100 position-relative clients-con padding-top padding-bottom main-box"
      >
        <div class="main-container">
          <div class="heading-title-con text-center">
            <span
              class="special-text d-block wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
              >Our Clients</span
            >
            <h2
              class="text-size-66 mb-0 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              Trusted by Leading <br />
              Organizations
            </h2>
          </div>
          <div
            class="owl-carousel owl-theme clients-carousel wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.05s"
          >
            <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/deloitte-logo.png"
                  alt="Client logo 1"
                  class="img-fluid"
                />
              </div>
            </div>
            <!-- <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/Path-International.jpg"
                  alt="Client logo 2"
                  class="img-fluid"
                />
              </div>
            </div> -->
            <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/gulf-african-bank.png"
                  alt="Client logo 3"
                  class="img-fluid"
                />
              </div>
            </div>
            <!-- <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/nestle-logo.jpg"
                  alt="Client logo 4"
                  class="img-fluid"
                />
              </div>
            </div> -->
            <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/swissport-logo.png"
                  alt="Client logo 5"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/ibm-ea-logo.png"
                  alt="Client logo 6"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/centum-investment-vector-logo.png"
                  alt="Client logo 6"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/who-logo-world-health-organization-logo.png"
                  alt="Client logo 6"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="item">
              <div class="client-logo-box">
                <img
                  src="assets/images/co-op-bank.jpg"
                  alt="Client logo 6"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>`;
    }
}

customElements.define("side-clients", SideClients);