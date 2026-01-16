import { getAllSlugs, getJourney } from '@/lib/mdx';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = constructMetadata({
    title: 'Signature Journeys',
    description: 'Hand-crafted itineraries that blend logistics precision with the freedom of discovery.',
});

export default async function JourneysPage() {
    const slugs = getAllSlugs('journeys');

    // Load all journeys to display
    const journeys = await Promise.all(
        slugs.map(async (slug) => {
            const { frontmatter } = await getJourney(slug);
            return { slug, ...frontmatter };
        })
    );

    return (
        <main className="min-h-screen bg-stone-950 text-editorial-cream selection:bg-editorial-accent selection:text-white">
            {/* Editorial Hero */}
            <section className="relative px-6 pt-48 pb-24 md:pt-64 md:pb-32 border-b border-white/10">
                <div className="container mx-auto max-w-6xl text-center z-10 relative">
                    <span className="block text-editorial-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Curated Collections
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Signature Journeys
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Hand-crafted itineraries that blend logistics precision with the freedom of discovery.
                    </p>
                </div>

                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-stone-900/50 to-transparent pointer-events-none" />
            </section>

            {/* Journey Grid */}
            <section className="px-6 py-24 md:py-32">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {journeys.map((journey, index) => (
                            <Link
                                key={journey.slug}
                                href={`/unseen-journeys/${journey.slug}`}
                                className="group relative block aspect-[3/4] overflow-hidden bg-stone-900 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 border border-white/5"
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {journey.images?.[0] && (
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            style={{ backgroundImage: `url('${journey.images[0]}')` }}
                                        />
                                    )}
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                                    {/* Tag/Themes */}
                                    <div className="mb-auto opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {journey.themes?.slice(0, 1).map(theme => (
                                            <span key={theme} className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white mb-2">
                                                {theme}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-playfair text-white mb-3 leading-none drop-shadow-lg group-hover:translate-x-2 transition-transform duration-500">
                                        {journey.title}
                                    </h3>

                                    <div className="w-full h-[1px] bg-white/20 mb-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />

                                    <div className="flex justify-between items-center w-full text-xs font-bold uppercase tracking-widest text-white/80">
                                        <span>{journey.duration}</span>
                                        <span className="group-hover:text-editorial-accent transition-colors duration-300">
                                            {journey.price_explorer ? `From $${journey.price_explorer}` : 'View Details'} &rarr;
                                        </span>
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
