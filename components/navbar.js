// Navbar Component
class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.mobileMenuOpen = false;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <nav class="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <!-- Logo -->
                    <a href="/" class="flex items-center gap-2 text-xl font-bold text-white hover:text-primary transition">
                        <div class="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold">P</span>
                        </div>
                        <span class="hidden sm:inline">Prodigy Tech</span>
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center gap-8">
                        <a href="/" class="text-gray-300 hover:text-primary transition font-medium">Home</a>
                        <a href="/about/" class="text-gray-300 hover:text-primary transition font-medium">About</a>
                        <a href="/services/" class="text-gray-300 hover:text-primary transition font-medium">Services</a>
                        <a href="/portfolio/" class="text-gray-300 hover:text-primary transition font-medium">Portfolio</a>
                        <a href="/contact/" class="text-gray-300 hover:text-primary transition font-medium">Contact</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobileMenuBtn" class="md:hidden text-gray-300 hover:text-primary transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <!-- Mobile Navigation Menu -->
                <div id="mobileMenu" class="hidden md:hidden bg-gray-900 border-t border-gray-700">
                    <div class="container mx-auto px-4 py-4 space-y-2">
                        <a href="/" class="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded transition">Home</a>
                        <a href="/about/" class="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded transition">About</a>
                        <a href="/services/" class="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded transition">Services</a>
                        <a href="/portfolio/" class="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded transition">Portfolio</a>
                        <a href="/contact/" class="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded transition">Contact</a>
                    </div>
                </div>
            </nav>
        `;
    }

    setupEventListeners() {
        const mobileMenuBtn = this.querySelector('#mobileMenuBtn');
        const mobileMenu = this.querySelector('#mobileMenu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                this.mobileMenuOpen = !this.mobileMenuOpen;
                if (this.mobileMenuOpen) {
                    mobileMenu.classList.remove('hidden');
                } else {
                    mobileMenu.classList.add('hidden');
                }
            });

            // Close menu when a link is clicked
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.mobileMenuOpen = false;
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    }
}

// Register the custom element
customElements.define('custom-navbar', CustomNavbar);