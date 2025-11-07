class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(8px);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo span {
          background: linear-gradient(to right, #3B82F6, #10B981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          /* FIX: Ensures vertical alignment for all items */
          align-items: center;
        }
        .nav-links a {
          color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem 0;
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 500;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: #3B82F6; /* Primary color */
        }
        
        .dropdown {
          position: relative;
          display: inline-block;
          /* Ensures the dropdown container cooperates with the alignment */
          display: flex; 
          align-items: center;
        }
        
        /* Dropdown content styling and behavior */
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #1E293B;
          min-width: 220px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
          z-index: 1;
          top: 100%;
          border-radius: 0.5rem;
          padding: 0.5rem 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .dropdown-content a {
          color: rgba(255, 255, 255, 0.7);
          padding: 0.75rem 1rem;
          text-decoration: none;
          display: block;
          white-space: nowrap;
          transition: background-color 0.3s;
        }
        
        .dropdown-content a:hover {
          background-color: rgba(59, 130, 246, 0.1); /* Light primary background */
          color: #3B82F6;
        }
        
        /* Hover effect to show content */
        .dropdown:hover .dropdown-content {
          display: block;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #1E293B;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            align-items: flex-start; /* Reset alignment for vertical menu */
          }
          .nav-links.active {
            display: flex;
          }
          .nav-links a {
            padding: 0.75rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .mobile-menu-btn {
            display: block;
          }
          .dropdown-content {
            position: static;
            min-width: 100%;
            box-shadow: none;
            padding: 0;
            border: none;
            background-color: #1E293B;
          }
          .dropdown-content a {
            padding-left: 3rem; 
          }
          .dropdown {
              height: auto;
              width: 100%;
              display: block;
          }
        }
      </style>
      <nav>
        <div class="nav-container">
          <a href="/" class="logo">
            <span>Prodigy Tech</span>
          </a>
          <div class="nav-links">
            <a href="/">Home</a>
            
            <div class="dropdown">
              <a href="/about.html">About <i data-feather="chevron-down" class="w-4 h-4 inline-block ml-1"></i></a>
              <div class="dropdown-content">
                <a href="/about.html#about-us">About Us</a>
                <a href="/about.html#our-team">Our Team</a>
              </div>
            </div>

            <div class="dropdown">
              <a href="/services.html">Services <i data-feather="chevron-down" class="w-4 h-4 inline-block ml-1"></i></a>
              <div class="dropdown-content">
                <a href="/web-development.html">Web & App Development</a>
                <a href="/digital-marketing.html">Digital Marketing</a>
                <a href="/creative-projects.html">Branding & Publishing</a>
                <a href="/business-solutions.html">Business Solutions</a>
              </div>
            </div>
            
            <a href="/contact.html">Contact</a>
          </div>
          <button class="mobile-menu-btn">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>
    `;

    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      feather.replace();
    });

    feather.replace();
  }
}
customElements.define('custom-navbar', CustomNavbar);