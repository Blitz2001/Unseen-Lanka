import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-400 py-16 text-sm">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-white text-lg font-bold font-heading mb-4">UNSEEN LANKA</h3>
                    <p className="mb-6 leading-relaxed text-stone-500">
                        Curated journeys beyond the obvious. Experience Sri Lanka without the crowds, guided by experts.
                    </p>
                    <div className="flex gap-4">
                        {/* Socials Placeholders */}
                        <div className="w-8 h-8 rounded-full bg-stone-800" />
                        <div className="w-8 h-8 rounded-full bg-stone-800" />
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Discover</h4>
                    <ul className="space-y-2">
                        <li><Link href="/unseen-journeys" className="hover:text-white transition-colors">Signature Journeys</Link></li>
                        <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                        <li><Link href="/travel-styles/family" className="hover:text-white transition-colors">Family</Link></li>
                        <li><Link href="/transfers/private-driver" className="hover:text-white transition-colors">Private Drivers</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about-unseen-lanka" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Contact</h4>
                    <p className="mb-2">Colombo, Sri Lanka</p>
                    <p className="mb-2"><a href="mailto:hello@unseenlanka.com" className="hover:text-white">hello@unseenlanka.com</a></p>
                    <p className="mb-6"><a href="tel:+94770000000" className="hover:text-white">+94 77 000 0000</a></p>

                    <div className="border border-stone-800 rounded p-4 inline-block">
                        <p className="text-xs text-stone-600 uppercase tracking-widest mb-1">SLTDA Registered</p>
                        <p className="text-white font-mono">SLTDA/SQ/2026/001</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Avawia Tours (Pvt) Ltd. All rights reserved.</p>
                <p>Operating as Unseen Lanka.</p>
            </div>
        </footer>
    );
}
