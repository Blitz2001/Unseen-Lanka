import { getAllSlugs, getDestination } from '@/lib/mdx';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';

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
        <div className="min-h-screen bg-white py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Destinations</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                        Places that redefine the island experience. Explore Sri Lanka beyond the obvious.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {destinations.map((dest) => (
                        <Link
                            key={dest.slug}
                            href={`/destinations/${dest.slug}`}
                            className="group block bg-stone-900 text-white rounded-xl overflow-hidden hover:bg-stone-800 transition-all p-6 aspect-square flex flex-col justify-end"
                        >
                            <h3 className="text-2xl font-bold mb-2">{dest.title}</h3>
                            <p className="text-stone-400 text-sm">{dest.region || dest.bestFor?.[0] || 'Explore'}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
