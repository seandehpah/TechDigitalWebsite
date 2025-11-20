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
          text-decoration: none;
        }
        
        .logo span {
          background: linear-gradient(to right, #3B82F6, #10B981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-links a {
          color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem 0;
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .nav-links a:hover,
        .nav-links a.active {
          color: #3B82F6;
        }
        
        .dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #1E293B;
          min-width: 240px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
          z-index: 1;
          top: 100%;
          border-radius: 0.5rem;
          padding: 0.5rem 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 0.5rem;
        }
        
        .dropdown-content a {
          color: rgba(255, 255, 255, 0.7);
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          display: block;
          white-space: nowrap;
          transition: all 0.3s;
          gap: 0;
        }
        
        .dropdown-content a:hover {
          background-color: rgba(59, 130, 246, 0.1);
          color: #3B82F6;
          padding-left: 2rem;
        }
        
        .dropdown:hover .dropdown-content {
          display: block;
        }
        
        .dark-mode-toggle,
        .mobile-menu-btn {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s;
        }
        
        .dark-mode-toggle:hover,
        .mobile-menu-btn:hover {
          background-color: rgba(59, 130, 246, 0.1);
          color: #3B82F6;
        }
        
        .mobile-menu-btn {
          display: none;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          nav {
            padding: 1rem 1.5rem;
          }
          
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
            gap: 0;
            align-items: flex-start;
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .nav-links a {
            padding: 0.75rem 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            width: 100%;
            gap: 0;
          }
          
          .mobile-menu-btn {
            display: flex;
          }
          
          .dropdown {
            width: 100%;
            display: block;
            position: static;
          }
          
          .dropdown-content {
            position: static;
            min-width: 100%;
            box-shadow: none;
            padding: 0;
            border: none;
            background-color: #162E4D;
            margin: 0;
            display: none;
          }
          
          .dropdown.active .dropdown-content {
            display: flex;
            flex-direction: column;
          }
          
          .dropdown-content a {
            padding-left: 3rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .dropdown-content a:hover {
            padding-left: 3.5rem;
          }
          
          .dropdown > a::after {
            content: '▼';
            font-size: 0.75rem;
            margin-left: 0.5rem;
            transition: transform 0.3s;
          }
          
          .dropdown.active > a::after {
            transform: rotate(180deg);
          }
          
          .logo {
            font-size: 1.25rem;
          }
          
          .nav-right {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 0.75rem 1rem;
          }
          
          .logo {
            font-size: 1.1rem;
          }
          
          .nav-right {
            gap: 0.5rem;
          }
        }
      </style>
      
      <nav>
        <div class="nav-container">
          <a href="/" class="logo">
            <span>Prodigy Tech</span>
          </a>
          
          <div class="nav-right">
            <div class="nav-links">
              <a href="/">Home</a>
              
              <div class="dropdown">
                <a href="/about/">About</a>
                <div class="dropdown-content">
                  <a href="/about/#about-us">About Us</a>
                  <a href="/about/#our-team">Our Team</a>
                </div>
              </div>

              <div class="dropdown">
                <a href="/services/">Services</a>
                <div class="dropdown-content">
                  <a href="/digital-products/">Digital Products & Development</a>
                  <a href="/digital-marketing/">Digital Marketing & Growth</a>
                  <a href="/creative-publishing/">Creative & Publishing</a>
                  <a href="/business-solutions/">Business Solutions & Infrastructure</a>
                </div>
              </div>
              
              <a href="/portfolio/">Portfolio</a>
              <a href="/contact/">Contact</a>
            </div>
            
            <button class="dark-mode-toggle" id="darkModeToggle" title="Toggle dark mode">
              <i data-feather="sun"></i>
            </button>
            
            <button class="mobile-menu-btn" title="Toggle menu">
              <i data-feather="menu"></i>
            </button>
          </div>
        </div>
      </nav>
    `;

    // Mobile menu toggle
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    const dropdowns = this.shadowRoot.querySelectorAll('.dropdown');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      feather.replace({ parent: this.shadowRoot });
    });

    // Close menu when link is clicked
    const links = this.shadowRoot.querySelectorAll('.nav-links > a:not(.dropdown > a)');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    // Dropdown toggle on mobile
    dropdowns.forEach(dropdown => {
      const dropdownLink = dropdown.querySelector('a:first-child');
      dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
          feather.replace({ parent: this.shadowRoot });
        }
      });
    });

    // Dark mode toggle
    const darkModeToggle = this.shadowRoot.querySelector('#darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
      this.updateDarkModeIcon();
      feather.replace({ parent: this.shadowRoot });
    });

    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'false') {
      document.documentElement.classList.remove('dark');
    }

    this.updateDarkModeIcon();
    feather.replace({ parent: this.shadowRoot });
  }

  updateDarkModeIcon() {
    const toggle = this.shadowRoot.querySelector('#darkModeToggle');
    const isDark = document.documentElement.classList.contains('dark');
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.setAttribute('data-feather', isDark ? 'moon' : 'sun');
      feather.replace({ parent: this.shadowRoot });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);