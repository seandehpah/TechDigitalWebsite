// Footer Component
class CustomFooter extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
            <footer class="bg-gray-800 border-t border-gray-700 mt-8">
                <div class="container mx-auto px-4 py-12">
                    <!-- Main Footer Content -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <!-- Logo and Social Section -->
                        <div>
                            <div class="mb-4">
                                <a href="/"><img src="/images/logo.png" alt="Prodigy Tech Logo" class="h-[70px] w-auto object-contain mb-3"></a>
                            </div>
                            <p class="text-sm text-white mb-4">We provide innovative digital solutions including web development, marketing, creative branding, and business infrastructure services.</p>
                            
                            <!-- Social Media Handles -->
                            <div class="flex gap-4">
                                <a href="https://facebook.com/prodigytech" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition" title="Facebook">
                                    <i data-feather="facebook" class="w-5 h-5"></i>
                                </a>
                                <a href="https://twitter.com/prodigytech" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition" title="Twitter/X">
                                    <i data-feather="twitter" class="w-5 h-5"></i>
                                </a>
                                <a href="https://linkedin.com/company/prodigytech" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition" title="LinkedIn">
                                    <i data-feather="linkedin" class="w-5 h-5"></i>
                                </a>
                                <a href="https://instagram.com/prodigytech" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary transition" title="Instagram">
                                    <i data-feather="instagram" class="w-5 h-5"></i>
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
                                    <i data-feather="mail" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"></i>
                                    <a href="mailto:hello@prodigytechdigital.com.ng" class="text-white hover:text-primary transition">
                                        hello@prodigytechdigital.com.ng
                                    </a>
                                </li>
                                
                                <!-- Phone -->
                                <li class="flex gap-3 items-start">
                                    <i data-feather="phone-call" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"></i>
                                    <a href="tel:+2348109881237" class="text-white hover:text-primary transition">
                                        +234 810 988 1237
                                    </a>
                                </li>
                                
                                <!-- WhatsApp -->
                                <li class="flex gap-3 items-start">
                                    <i data-feather="message-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"></i>
                                    <a href="https://wa.me/2348109881237" class="text-white hover:text-primary transition" target="_blank" rel="noopener noreferrer">
                                        +234 810 988 1237 (WhatsApp)
                                    </a>
                                </li>
                                
                                <!-- Location -->
                                <li class="flex gap-3 items-start">
                                    <i data-feather="map-pin" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"></i>
                                    <span class="text-white">Lagos, Nigeria</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="border-t border-gray-700 py-1"></div>

                    <!-- Bottom Footer -->
                    <div class="flex justify-center items-center text-sm text-white">
                        <p>&copy; ${currentYear} Prodigy Tech & Digital Services. All rights reserved.</p>
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