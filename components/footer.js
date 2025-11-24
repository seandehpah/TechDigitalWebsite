// Footer Component
class CustomFooter extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
            <footer class="bg-gray-800 border-t border-gray-700 text-gray-300 mt-20">
                <div class="container mx-auto px-4 py-12">
                    <!-- Main Footer Content -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <!-- About Section -->
                        <div>
                            <h3 class="font-bold text-lg mb-4 text-white">About Prodigy Tech</h3>
                            <p class="text-sm text-gray-400">We provide innovative digital solutions including web development, marketing, creative branding, and business infrastructure services.</p>
                        </div>

                        <!-- Services Links -->
                        <div>
                            <h3 class="font-bold text-lg mb-4 text-white">Services</h3>
                            <ul class="space-y-2 text-sm">
                                <li><a href="/digital-products/" class="text-gray-400 hover:text-primary transition">Digital Products</a></li>
                                <li><a href="/digital-marketing/" class="text-gray-400 hover:text-primary transition">Digital Marketing</a></li>
                                <li><a href="/creative-publishing/" class="text-gray-400 hover:text-primary transition">Creative & Publishing</a></li>
                                <li><a href="/business-solutions/" class="text-gray-400 hover:text-primary transition">Business Solutions</a></li>
                            </ul>
                        </div>

                        <!-- Company Links -->
                        <div>
                            <h3 class="font-bold text-lg mb-4 text-white">Company</h3>
                            <ul class="space-y-2 text-sm">
                                <li><a href="/about/" class="text-gray-400 hover:text-primary transition">About Us</a></li>
                                <li><a href="/portfolio/" class="text-gray-400 hover:text-primary transition">Portfolio</a></li>
                                <li><a href="/services/" class="text-gray-400 hover:text-primary transition">All Services</a></li>
                                <li><a href="/contact/" class="text-gray-400 hover:text-primary transition">Contact</a></li>
                            </ul>
                        </div>

                        <!-- Contact Info -->
                        <div>
                            <h3 class="font-bold text-lg mb-4 text-white">Get In Touch</h3>
                            <ul class="space-y-3 text-sm">
                                <li>
                                    <a href="mailto:hello@prodigytechdigital.com.ng" class="text-gray-400 hover:text-primary transition">
                                        hello@prodigytechdigital.com.ng
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+2348109881237" class="text-gray-400 hover:text-primary transition">
                                        +234 810 988 1237
                                    </a>
                                </li>
                                <li class="text-gray-400">Lagos, Nigeria</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="border-t border-gray-700 py-8"></div>

                    <!-- Bottom Footer -->
                    <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>&copy; ${currentYear} Prodigy Tech & Digital Services. All rights reserved.</p>
                        <div class="flex gap-4 mt-4 md:mt-0">
                            <a href="/" class="hover:text-primary transition">Home</a>
                            <span>•</span>
                            <a href="/about/" class="hover:text-primary transition">About</a>
                            <span>•</span>
                            <a href="/contact/" class="hover:text-primary transition">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Register the custom element
customElements.define('custom-footer', CustomFooter);