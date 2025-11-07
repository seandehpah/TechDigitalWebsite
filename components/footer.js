class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: rgba(15, 23, 42, 0.95);
          padding: 3rem 2rem;
          color: white;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          /* Updated to a cleaner 4-column layout */
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .footer-logo span {
          background: linear-gradient(to right, #3B82F6, #10B981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .footer-links h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: white;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: #3B82F6;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
        
        /* === CLEAN CONTACT STYLES === */
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1.25rem; /* Increased spacing for readability */
            padding-top: 0.5rem;
        }
        .contact-item {
            display: flex;
            align-items: flex-start; /* Align icon to top of text block */
            gap: 0.75rem; 
        }
        .contact-item i {
            /* Use secondary color for clear differentiation */
            color: #10B981; 
            width: 20px; 
            height: 20px;
            flex-shrink: 0; /* Ensures the icon doesn't shrink */
        }
        .contact-item a, .contact-item span {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
            line-height: 1.4;
        }

        @media (max-width: 768px) {
            .footer-container {
                grid-template-columns: 1fr;
            }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <a href="/" class="footer-logo"><span>Prodigy Tech</span></a>
            <p>Empowering businesses through innovative digital solutions.</p>
          </div>
          <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about.html">About</a></li>
              <li><a href="/services.html">Services</a></li>
              <li><a href="/portfolio.html">Portfolio</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="/services.html">Web Development</a></li>
              <li><a href="/services.html">Digital Marketing</a></li>
              <li><a href="/services.html">Branding</a></li>
              <li><a href="/services.html">Business Solutions</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3>Contact Us</h3>
            <div class="contact-info">
              
              <div class="contact-item">
                  <i data-feather="mail"></i>
                  <a href="mailto:hello@prodigytechdigital.com.ng">hello@prodigytechdigital.com.ng</a>
              </div>
              
              <div class="contact-item">
                <i data-feather="phone"></i>
                <a href="tel:+2348109881237">+234 810 988 1237</a>
              </div>
              
              <div class="contact-item">
                <i data-feather="message-square"></i>
                <a href="https://wa.me/2348109881237">WhatsApp Messaging</a>
              </div>
              
              <div class="contact-item">
                <i data-feather="map-pin"></i>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          
          </div>
        
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Prodigy Tech & Digital Services. All rights reserved.
        </div>
      </footer>
    `;
    // CRITICAL FIX: Initializes feather icons within the Shadow DOM
    feather.replace({ parent: this.shadowRoot }); 
  }
}

customElements.define('custom-footer', CustomFooter);