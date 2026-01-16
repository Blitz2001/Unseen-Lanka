import { getAllSlugs, getDestination } from '@/lib/mdx';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = constructMetadata({
    title: 'Destinations',
    description: 'Places that redefine the island experience. Explore Sri Lanka beyond the obvious.',
});

export default async function DestinationsPage() {
    const slugs = getAllSlugs('destinations');

    const destinations = await Promise.all(
        slugs.map(async (slug) => {
            const { frontmatter } = await getDestination(slug);
            return { slug, ...frontmatter };
        })
    );

    return (
        <main className="min-h-screen bg-stone-950 text-editorial-cream selection:bg-editorial-accent selection:text-white">
            {/* Editorial Hero */}
            <section className="relative px-6 pt-48 pb-24 md:pt-64 md:pb-32 border-b border-white/10">
                <div className="container mx-auto max-w-6xl text-center z-10 relative">
                    <span className="block text-editorial-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Island Gems
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Curated Destinations
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Places that redefine the island experience. Explore Sri Lanka beyond the obvious.
                    </p>
                </div>

                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-stone-900/50 to-transparent pointer-events-none" />
            </section>

            {/* Destinations Grid */}
            <section className="px-6 py-24 md:py-32">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {destinations.map((dest) => (
                            <Link
                                key={dest.slug}
                                href={`/destinations/${dest.slug}`}
                                className="group relative block aspect-[3/4] overflow-hidden bg-stone-900 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 border border-white/5"
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {dest.images?.[0] && (
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                            style={{ backgroundImage: `url('${dest.images[0]}')` }}
                                        />
                                    )}
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-left">
                                    <span className="text-editorial-accent text-[10px] font-bold uppercase tracking-widest mb-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {dest.region || 'Explore'}
                                    </span>

                                    <h3 className="text-2xl font-playfair text-white mb-2 leading-none drop-shadow-lg group-hover:translate-x-1 transition-transform duration-500">
                                        {dest.title}
                                    </h3>

                                    <div className="w-8 h-[1px] bg-white/30 group-hover:w-full group-hover:bg-editorial-accent transition-all duration-500 delay-100" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
