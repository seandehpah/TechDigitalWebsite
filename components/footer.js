// Footer Component
class CustomFooter extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
            <footer class="bg-gray-800 border-t border-gray-700 mt-20">
                <div class="container mx-auto px-4 py-12">
                    <!-- Main Footer Content -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <!-- Logo and Social Section -->
                        <div>
                            <div class="mb-4">
                                <img src="/images/logo.png" alt="Prodigy Tech Logo" class="w-12 h-12 object-contain mb-3">
                            </div>
                            <p class="text-sm text-white mb-4">We provide innovative digital solutions including web development, marketing, creative branding, and business infrastructure services.</p>
                            
                            <!-- Social Media Handles -->
                            <div class="flex gap-4">
                                <a href="https://facebook.com/prodigytech" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition" title="Facebook">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="https://twitter.com/prodigytech" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition" title="Twitter/X">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 002.856-3.915 10.009 10.009 0 01-2.8.856 4.958 4.958 0 002.165-2.573c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/company/prodigytech" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition" title="LinkedIn">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                                    </svg>
                                </a>
                                <a href="https://instagram.com/prodigytech" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition" title="Instagram">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m4.441 7.313h-1.012c-.062-1.266-.75-2.469-1.969-2.469h-3.92c-1.219 0-1.907 1.203-1.969 2.469H7.559v-.031c0-.022 0-.089 0-.111 0-1.754 1.279-3.179 2.953-3.179h3.937c1.674 0 2.953 1.425 2.953 3.179 0 .022 0 .089 0 .111v.031zm0 1.151H7.559V18h8.882V8.464zm-7.231 9.536H8.11c-1.265 0-2.301-1.036-2.301-2.301v-5.471h1.151v5.471c0 .634.519 1.15 1.15 1.15h1.15v1.151zm3.091 0h-1.15V12.234h1.15v5.471zm1.151 0v-5.471h1.15V18h-1.15zm2.302-1.15c.631 0 1.15-.519 1.15-1.15v-4.321h1.151v4.321c0 1.265-1.036 2.301-2.301 2.301h-1.15v-1.151h1.15zm1.151-5.471v-1.151h1.15v1.151h-1.15z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Services Links -->
                        <div>
                            <h3 class="font-bold text-lg mb-4 text-white">Services</h3>
                            <ul class="space-y-2 text-sm">
                                <li><a href="/digital-products/" class="text-white hover:text-primary transition">Digital Products</a></li>
                                <li><a href="/digital-marketing/" class="text-white hover:text-primary transition">Digital Marketing</a></li>
                                <li><a href="/creative-publishing/" class="text-white hover:text-primary transition">Creative & Publishing</a></li>
                                <li><a href="/business-solutions/" class="text-white hover:text-primary transition">Business Solutions</a></li>
                            </ul>
                        </div>

                        <!-- Company Links -->
                        <div>
                            <h3 class="font-bold text-lg mb-4 text-white">Company</h3>
                            <ul class="space-y-2 text-sm">
                                <li><a href="/about/" class="text-white hover:text-primary transition">About Us</a></li>
                                <li><a href="/portfolio/" class="text-white hover:text-primary transition">Portfolio</a></li>
                                <li><a href="/services/" class="text-white hover:text-primary transition">All Services</a></li>
                                <li><a href="/contact/" class="text-white hover:text-primary transition">Contact</a></li>
                            </ul>
                        </div>

                        <!-- Get In Touch with Icons -->
                        <div>
                            <h3 class="font-bold text-lg mb-4 text-white">Get In Touch</h3>
                            <ul class="space-y-3 text-sm">
                                <!-- Email -->
                                <li class="flex gap-3 items-start">
                                    <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <a href="mailto:hello@prodigytechdigital.com.ng" class="text-white hover:text-primary transition">
                                        hello@prodigytechdigital.com.ng
                                    </a>
                                </li>
                                
                                <!-- Phone -->
                                <li class="flex gap-3 items-start">
                                    <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <a href="tel:+2348109881237" class="text-white hover:text-primary transition">
                                        +234 810 988 1237
                                    </a>
                                </li>
                                
                                <!-- WhatsApp -->
                                <li class="flex gap-3 items-start">
                                    <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.603.898 5.04 2.562 6.994L2.846 22.52l2.409-1.362 1.356.673a9.848 9.848 0 003.891.771 9.872 9.872 0 009.796-9.78c0-2.603-.898-5.041-2.562-6.993 1.655 1.945 2.662 4.39 2.662 6.993 0 5.431-4.365 9.796-9.796 9.796-1.534 0-2.976-.373-4.238-1.027l-.958-.482-1.356.673 2.409-1.362c-1.625-1.946-2.562-4.383-2.562-6.993 0-5.432 4.365-9.796 9.796-9.796z"/>
                                    </svg>
                                    <a href="https://wa.me/2348109881237" class="text-white hover:text-primary transition" target="_blank" rel="noopener noreferrer">
                                        +234 810 988 1237 (WhatsApp)
                                    </a>
                                </li>
                                
                                <!-- Location -->
                                <li class="flex gap-3 items-start">
                                    <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span class="text-white">Lagos, Nigeria</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="border-t border-gray-700 py-8"></div>

                    <!-- Bottom Footer -->
                    <div class="flex flex-col md:flex-row justify-between items-center text-sm text-white">
                        <p>&copy; ${currentYear} Prodigy Tech & Digital Services. All rights reserved.</p>
                        <div class="flex gap-4 mt-4 md:mt-0">
                            <a href="/" class="text-white hover:text-primary transition">Home</a>
                            <span>•</span>
                            <a href="/about/" class="text-white hover:text-primary transition">About</a>
                            <span>•</span>
                            <a href="/contact/" class="text-white hover:text-primary transition">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
        this.loadFeatherIcons();
    }

    loadFeatherIcons() {
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

// Register the custom element
customElements.define('custom-footer', CustomFooter);