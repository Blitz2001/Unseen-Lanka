import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-stone-900 text-white overflow-hidden">
            {/* Background Image Placeholder - In production, use next/image with priority */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586610052988-dc784746d8de?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80" />

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
                    Discover the Sri Lanka <br className="hidden md:block" />
                    you won’t find on Instagram
                </h1>
                <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light">
                    Experience Architect • Private Chauffeur-Guides • 24/7 Human Support
                </p>
                <Link
                    href="/plan-your-trip"
                    className="inline-block bg-white text-stone-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-stone-100 transition-transform transform active:scale-95"
                >
                    Plan Your Journey
                </Link>
            </div>
        </section>
    );
}
