import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
    title: 'Contact Us',
    description: 'Reach our team in Colombo. WhatsApp, Email, or Visit.',
});

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-stone-950 text-editorial-cream selection:bg-editorial-accent selection:text-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-editorial-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Get in Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-playfair text-white mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Talk to a Human
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Fast Answers */}
                    <div className="bg-stone-900/50 p-10 rounded-xl border border-white/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        <h3 className="text-2xl font-playfair text-white mb-6">Fast Answers</h3>
                        <p className="text-stone-400 font-light text-lg mb-8 leading-relaxed">
                            The fastest way to reach us is WhatsApp. We reply within 15 minutes during waking hours (LK time).
                        </p>
                        <a
                            href="https://wa.me/94770000000"
                            className="inline-flex items-center justify-center w-full px-8 py-4 bg-editorial-accent/10 border border-editorial-accent text-editorial-accent hover:bg-editorial-accent hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Office Info */}
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        <div>
                            <h3 className="text-2xl font-playfair text-white mb-6">Visit Us</h3>
                            <address className="text-stone-400 font-light text-lg not-italic leading-relaxed">
                                <strong className="text-white block mb-2">Unseen Lanka</strong>
                                123, Galle Road,<br />
                                Colombo 03, Sri Lanka.
                            </address>
                        </div>

                        <div>
                            <h3 className="text-2xl font-playfair text-white mb-6">Direct Lines</h3>
                            <div className="space-y-4 text-stone-400 font-light text-lg">
                                <p>
                                    <span className="block text-sm uppercase tracking-widest text-white/40 mb-1">Email</span>
                                    <a href="mailto:hello@unseenlanka.com" className="text-white hover:text-editorial-accent transition-colors">
                                        hello@unseenlanka.com
                                    </a>
                                </p>
                                <p>
                                    <span className="block text-sm uppercase tracking-widest text-white/40 mb-1">Emergency 24/7</span>
                                    <span className="text-white">+94 77 000 0001</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
