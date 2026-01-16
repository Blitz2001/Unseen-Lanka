import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = constructMetadata({
    title: 'Travel Styles',
    description: 'Find the perfect Sri Lanka experience tailored to your travel style.',
});

export default function TravelStylesPage() {
    const styles = [
        {
            title: 'Families',
            description: 'Decision-free itineraries designed for parents who need a real break. We handle logistics, you make memories.',
            icon: '👨‍👩‍👧‍👦',
            link: '/unseen-journeys/decision-free-family',
            image: '/images/signature-hill-country.png'
        },
        {
            title: 'Honeymoon',
            description: 'Romantic escapes to untouched beaches and private villas. No crowds, just connection.',
            icon: '💑',
            link: '/unseen-journeys/southern-soul',
            image: '/images/signature-south-galle.png'
        },
        {
            title: 'Solo Travelers',
            description: 'Safe, curated experiences for independent explorers. Local guides who become friends.',
            icon: '🎒',
            link: '/unseen-journeys/northern-frontiers',
            image: '/images/signature-north-jaffna.png'
        },
        {
            title: 'Digital Nomads',
            description: 'Work-friendly stays in Ahangama and Galle with reliable WiFi and inspiring views.',
            icon: '💻',
            link: '/destinations/ahangama',
            image: '/images/ahangama-editorial.png'
        },
    ];

    return (
        <main className="min-h-screen bg-stone-950 text-editorial-cream selection:bg-editorial-accent selection:text-white">
            {/* Editorial Hero */}
            <section className="relative px-6 pt-48 pb-24 md:pt-64 md:pb-32 border-b border-white/10">
                <div className="container mx-auto max-w-6xl text-center z-10 relative">
                    <span className="block text-editorial-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Tailored Experiences
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        How Do You Travel?
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Every traveler is different. Find the perfect Sri Lanka experience tailored to your style.
                    </p>
                </div>

                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-stone-900/50 to-transparent pointer-events-none" />
            </section>

            {/* Travel Styles Grid */}
            <section className="px-6 py-24 md:py-32">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {styles.map((style, index) => (
                            <Link
                                key={style.title}
                                href={style.link}
                                className="group relative block aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-stone-900 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 border border-white/5"
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {style.image && (
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                            style={{ backgroundImage: `url('${style.image}')` }}
                                        />
                                    )}
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start text-left max-w-lg">
                                    <div className="text-4xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500 origin-left filter grayscale group-hover:grayscale-0">
                                        {style.icon}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-playfair text-white mb-4 leading-none group-hover:translate-x-1 transition-transform duration-500">
                                        {style.title}
                                    </h3>

                                    <p className="text-stone-300 font-light text-lg mb-6 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                        {style.description}
                                    </p>

                                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-editorial-accent opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        Explore {style.title} &rarr;
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
