<script>
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(8px);
          padding: 3rem 2rem 1.5rem;
          color: white;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 4rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-logo span {
          background: linear-gradient(to right, #3B82F6, #10B981);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .footer-about p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s;
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          color: #3B82F6;
          padding-left: 4px;
        }

        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .contact-item i {
          color: #10B981;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          stroke-width: 2;
          display: inline-block;
        }

        .contact-item a,
        .contact-item span {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.4;
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-item a:hover {
          color: #3B82F6;
        }

        /* Social Media Icons */
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(59, 130, 246, 0.15);
          border-radius: 50%;
          transition: all 0.3s;
          text-decoration: none;
        }

        .social-links a:hover {
          background-color: #3B82F6;
          transform: translateY(-3px);
        }

        .social-links i {
          width: 20px;
          height: 20px;
          color: white;
          stroke-width: 2;
          display: inline-block;
        }

        /* Bottom Section */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin: 0;
        }

        .footer-links-bottom {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .footer-links-bottom a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s;
        }

        .footer-links-bottom a:hover {
          color: #3B82F6;
        }

        /* Responsive */
        @media (max-width: 768px) {
          footer {
            padding: 2rem 1.5rem 1rem;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-section h3 {
            font-size: 0.95rem;
          }

          .footer-links-bottom {
            gap: 1rem;
            font-size: 0.85rem;
          }
        }
      </style>

      <footer>
        <div class="footer-container">
          <!-- About Section -->
          <div class="footer-about">
            <div class="footer-logo">
              <span>Prodigy Tech</span>
            </div>
            <p>Empowering businesses with innovative digital solutions and transformative technology services.</p>
            
            <div class="social-links">
              <a href="https://facebook.com/prodigytech" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i data-feather="facebook"></i>
              </a>
              <a href="https://twitter.com/prodigytech" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i data-feather="twitter"></i>
              </a>
              <a href="https://linkedin.com/company/prodigytech" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i data-feather="linkedin"></i>
              </a>
              <a href="https://instagram.com/prodigytech" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i data-feather="instagram"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about/">About Us</a></li>
              <li><a href="/services/">Services</a></li>
              <li><a href="/portfolio/">Portfolio</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-section footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="/digital-products/">Digital Products & Development</a></li>
              <li><a href="/digital-marketing/">Digital Marketing & Growth</a></li>
              <li><a href="/creative-publishing/">Creative & Publishing</a></li>
              <li><a href="/business-solutions/">Business Solutions</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-section">
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
                <i data-feather="message-circle"></i>
                <a href="https://wa.me/2348109881237" target="_blank" rel="noopener noreferrer">WhatsApp Messaging</a>
              </div>
              
              <div class="contact-item">
                <i data-feather="map-pin"></i>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="footer-bottom">
          <p class="copyright">
            &copy; ${new Date().getFullYear()} Prodigy Tech & Digital Services. All rights reserved.
          </p>
          <div class="footer-links-bottom">
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms-of-service/">Terms of Service</a>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
      </footer>
    `;

    feather.replace({ parent: this.shadowRoot });
  }
}

customElements.define('custom-footer', CustomFooter);
</script>