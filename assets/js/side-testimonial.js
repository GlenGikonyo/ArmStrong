class SideTestimonial extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <section
      class="float-left w-100 position-relative testimonials-con padding-top padding-bottom main-box"
    >
      <div class="main-container">
        <div class="row align-items-center">
          <div
            class="col-lg-3 col-md-3 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.05s"
          >
            <div class="testimonial-badge">
              <figure>
                <img
                  src="assets/images/testimonial-imgbg.svg"
                  alt="testimonial icon"
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div
            class="col-lg-8 col-md-8 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.05s"
          >
            <div
              id="testimonialCarousel"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <!-- SLIDE 1 -->
                <div class="carousel-item">
                  <div class="stars text-red mb-3">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h2 class="text-size-26">
                    "Armstrong made our house move from Kilimani to Karen so
                    seamless! Their team handled our fragile glass cabinets and
                    heavy furniture with utmost care. Everything was packed,
                    transported, and set up right on schedule without a single
                    scratch."
                  </h2>
                  <div
                    class="d-flex align-items-center review-content-con mt-4"
                  >
                    <!-- User Icon Circle -->
                    <div
                      class="testimonial-user-icon d-flex align-items-center justify-content-center mr-3"
                    >
                      <i class="fas fa-user text-red"></i>
                    </div>
                    <div class="review-text">
                      <h3 class="text-size-20 mb-1 fw-bold">Wanjiku Mwangi</h3>
                      <span class="d-block text-muted"
                        >Residential Moving Client, Nairobi</span
                      >
                    </div>
                  </div>
                </div>

                <!-- SLIDE 2 -->
                <div class="carousel-item active">
                  <div class="stars text-red mb-3">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h2 class="text-size-26">
                    "Relocating our entire corporate office in Westlands over a
                    single weekend seemed impossible until Armstrong stepped in.
                    They labeled, packed, and unpacked every workstation
                    systematically. Our operations resumed Monday morning
                    without downtime!"
                  </h2>
                  <div
                    class="d-flex align-items-center review-content-con mt-4"
                  >
                    <!-- User Icon Circle -->
                    <div
                      class="testimonial-user-icon d-flex align-items-center justify-content-center mr-3"
                    >
                      <i class="fas fa-user text-red"></i>
                    </div>
                    <div class="review-text">
                      <h3 class="text-size-20 mb-1 fw-bold">Emmanuel Otieno</h3>
                      <span class="d-block text-muted"
                        >Operations Director, Tech Hub East Africa</span
                      >
                    </div>
                  </div>
                </div>

                <!-- SLIDE 3 -->
                <div class="carousel-item">
                  <div class="stars text-red mb-3">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h2 class="text-size-26">
                    "I stored my household items with Armstrong for six months
                    while transitioning between homes. Their storage facility is
                    super secure, clean, and well-maintained. When my goods were
                    delivered back, everything was in pristine condition."
                  </h2>
                  <div
                    class="d-flex align-items-center review-content-con mt-4"
                  >
                    <!-- User Icon Circle -->
                    <div
                      class="testimonial-user-icon d-flex align-items-center justify-content-center mr-3"
                    >
                      <i class="fas fa-user text-red"></i>
                    </div>
                    <div class="review-text">
                      <h3 class="text-size-20 mb-1 fw-bold">Aminata Kamara</h3>
                      <span class="d-block text-muted"
                        >Long-Term Storage Client</span
                      >
                    </div>
                  </div>
                </div>

                <!-- SLIDE 4 -->
                <div class="carousel-item">
                  <div class="stars text-red mb-3">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h2 class="text-size-26">
                    "Moving intercounty from Nairobi to Mombasa can be
                    stressful, but Armstrong handled it effortlessly. They
                    arrived promptly, packed everything in sturdy boxes, and
                    delivered right on time. Highly professional movers!"
                  </h2>
                  <div
                    class="d-flex align-items-center review-content-con mt-4"
                  >
                    <!-- User Icon Circle -->
                    <div
                      class="testimonial-user-icon d-flex align-items-center justify-content-center mr-3"
                    >
                      <i class="fas fa-user text-red"></i>
                    </div>
                    <div class="review-text">
                      <h3 class="text-size-20 mb-1 fw-bold">Juma Omondi</h3>
                      <span class="d-block text-muted"
                        >Intercounty Relocation Client</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <ol class="carousel-indicators custom-indicators">
                <li data-target="#testimonialCarousel" data-slide-to="0"></li>
                <li
                  data-target="#testimonialCarousel"
                  data-slide-to="1"
                  class="active"
                ></li>
                <li data-target="#testimonialCarousel" data-slide-to="2"></li>
                <li data-target="#testimonialCarousel" data-slide-to="3"></li>
              </ol>
            </div>
          </div>
        </div>
        <!-- main container -->
      </div>
      <!-- testimonials-con -->
    </section> 
    `;
  }
}

customElements.define("side-testimonial", SideTestimonial);
