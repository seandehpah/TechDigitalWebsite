// Navbar Component
class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.mobileMenuOpen = false;
        this.servicesDropdownOpen = false;
        this.servicesClickCount = 0;
        this.servicesClickTimeout = null;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        this.loadFeatherIcons();
    }

    render() {
        this.innerHTML = `
            <nav class="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
                <div class="container mx-auto px-4 py-3 flex justify-between items-center">
                    <!-- Logo -->
                    <a href="/" class="flex items-center gap-2 text-xl font-bold text-white hover:text-primary transition">
                        <img src="/images/logo.png" alt="Prodigy Tech Logo" class="h-[65px] w-auto object-contain">
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center gap-8">
                        <a href="/" class="text-white hover:text-primary transition font-medium">Home</a>
                        <a href="/about/" class="text-white hover:text-primary transition font-medium">About</a>
                        
                        <!-- Services Dropdown -->
                        <div class="relative group">
                            <a href="/services/" class="text-white hover:text-primary transition font-medium flex items-center gap-1">
                                Services
                                <svg class="w-4 h-4 group-hover:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </a>
                            <div class="absolute left-0 mt-0 w-56 bg-gray-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-gray-700">
                                <a href="/digital-products/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-800 transition">Digital Products & Development</a>
                                <a href="/digital-marketing/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-800 transition">Digital Marketing & Growth</a>
                                <a href="/creative-publishing/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-800 transition">Creative & Publishing</a>
                                <a href="/business-solutions/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-800 transition">Business Solutions</a>
                            </div>
                        </div>

                        <a href="/portfolio/" class="text-white hover:text-primary transition font-medium">Portfolio</a>
                        <a href="/contact/" class="text-white hover:text-primary transition font-medium">Contact</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobileMenuBtn" class="md:hidden text-white hover:text-primary transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <!-- Mobile Navigation Menu -->
                <div id="mobileMenu" class="hidden md:hidden bg-gray-900 border-t border-gray-700">
                    <div class="container mx-auto px-4 py-4 space-y-2">
                        <a href="/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-800 rounded transition">Home</a>
                        <a href="/about/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-800 rounded transition">About</a>
                        
                        <!-- Mobile Services Dropdown -->
                        <button id="mobileServicesBtn" class="w-full text-left px-4 py-2 text-white hover:text-primary hover:bg-gray-800 rounded transition font-medium flex justify-between items-center">
                            Services
                            <svg id="mobileServicesArrow" class="w-4 h-4 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </button>
                        <div id="mobileServicesDropdown" class="hidden bg-gray-800 rounded space-y-1 ml-4">
                            <a href="/digital-products/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-700 rounded transition text-sm">Digital Products</a>
                            <a href="/digital-marketing/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-700 rounded transition text-sm">Digital Marketing</a>
                            <a href="/creative-publishing/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-700 rounded transition text-sm">Creative & Publishing</a>
                            <a href="/business-solutions/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-700 rounded transition text-sm">Business Solutions</a>
                        </div>

                        <a href="/portfolio/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-800 rounded transition">Portfolio</a>
                        <a href="/contact/" class="block px-4 py-2 text-white hover:text-primary hover:bg-gray-800 rounded transition">Contact</a>
                    </div>
                </div>
            </nav>
        `;
    }

    setupEventListeners() {
        const mobileMenuBtn = this.querySelector('#mobileMenuBtn');
        const mobileMenu = this.querySelector('#mobileMenu');
        const mobileServicesBtn = this.querySelector('#mobileServicesBtn');
        const mobileServicesDropdown = this.querySelector('#mobileServicesDropdown');
        const mobileServicesArrow = this.querySelector('#mobileServicesArrow');

        // Mobile menu toggle
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                this.mobileMenuOpen = !this.mobileMenuOpen;
                if (this.mobileMenuOpen) {
                    mobileMenu.classList.remove('hidden');
                } else {
                    mobileMenu.classList.add('hidden');
                    mobileServicesDropdown.classList.add('hidden');
                    mobileServicesArrow.style.transform = 'rotate(0deg)';
                    this.servicesClickCount = 0;
                }
            });

            // Close menu when a link is clicked
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.mobileMenuOpen = false;
                    mobileMenu.classList.add('hidden');
                    mobileServicesDropdown.classList.add('hidden');
                    mobileServicesArrow.style.transform = 'rotate(0deg)';
                    this.servicesClickCount = 0;
                });
            });
        }

        // Mobile services button - first tap opens dropdown, second tap navigates
        if (mobileServicesBtn && mobileServicesDropdown) {
            mobileServicesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.servicesClickCount++;

                if (this.servicesClickCount === 1) {
                    // First tap - toggle dropdown
                    this.servicesDropdownOpen = !this.servicesDropdownOpen;
                    if (this.servicesDropdownOpen) {
                        mobileServicesDropdown.classList.remove('hidden');
                        mobileServicesArrow.style.transform = 'rotate(180deg)';
                    } else {
                        mobileServicesDropdown.classList.add('hidden');
                        mobileServicesArrow.style.transform = 'rotate(0deg)';
                    }

                    // Reset click count after 1.5 seconds
                    clearTimeout(this.servicesClickTimeout);
                    this.servicesClickTimeout = setTimeout(() => {
                        this.servicesClickCount = 0;
                    }, 1500);
                } else if (this.servicesClickCount === 2) {
                    // Second tap - navigate to services page
                    window.location.href = '/services/';
                    this.servicesClickCount = 0;
                }
            });
        }
    }

    loadFeatherIcons() {
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

// Register the custom element
customElements.define('custom-navbar', CustomNavbar);