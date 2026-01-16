import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-stone-950 text-editorial-cream selection:bg-editorial-accent selection:text-white flex items-center justify-center p-6">
            <div className="max-w-xl w-full text-center">
                <div className="w-20 h-20 border border-editorial-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-in fade-in zoom-in duration-700">
                    <span className="text-3xl text-editorial-accent">✦</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    Received.
                </h1>

                <p className="text-xl text-stone-400 font-light mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Thank you for trusting Unseen Lanka.
                    <span className="block mt-4 text-lg">
                        We have sent a confirmation email with payment details to secure your journey.
                    </span>
                </p>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <Link
                        href="/"
                        className="inline-block px-10 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-stone-950 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
