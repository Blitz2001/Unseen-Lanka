import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center snap-start bg-stone-900 border-b-8 border-editorial-cream overflow-hidden">
            {/* Background Image / Video - Update this with your actual asset */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-60 scale-105 animate-in fade-in zoom-in duration-1000"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1586523171822-7203cb78413b?q=80&w=2070&auto=format&fit=crop')", // Galle / Sri Lanka coast
                }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-stone-900/30" />

            <div className="relative z-20 max-w-5xl px-6 flex flex-col items-center">
                <span className="text-white/80 tracking-[0.2em] uppercase text-sm md:text-base mb-6 animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-300">
                    Curated. Private. Unseen.
                </span>

                <h1 className="text-6xl md:text-[8rem] leading-none mb-8 text-editorial-cream font-playfair mix-blend-overlay animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-500">
                    UNSEEN LANKA
                </h1>

                <p className="max-w-xl text-stone-300 text-lg md:text-xl font-light mb-12 leading-relaxed animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-700">
                    We architect journeys not just through places, but through time, culture, and self.
                </p>

                <div className="flex gap-6 animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-1000">
                    <Link
                        href="/unseen-journeys"
                        className="px-8 py-4 bg-editorial-cream text-stone-900 font-bold tracking-wide uppercase hover:bg-white hover:scale-105 transition-all text-sm md:text-base"
                    >
                        Explore Journeys
                    </Link>
                    <Link
                        href="/plan-your-trip"
                        className="px-8 py-4 border border-white/30 text-white font-bold tracking-wide uppercase hover:bg-white/10 transition-all text-sm md:text-base backdrop-blur-sm"
                    >
                        Plan Your Trip
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 z-20 animate-bounce delay-1000 text-white/50">
                <span className="text-xs uppercase tracking-widest mb-2 block">Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </section>
    );
}
