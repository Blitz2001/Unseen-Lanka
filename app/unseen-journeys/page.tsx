import { getAllSlugs, getJourney } from '@/lib/mdx';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';

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
        <div className="min-h-screen bg-white py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Signature Journeys</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                        Hand-crafted itineraries that blend logistics precision with the freedom of discovery.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {journeys.map((journey) => (
                        <Link
                            key={journey.slug}
                            href={`/unseen-journeys/${journey.slug}`}
                            className="group block bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                        >
                            {journey.images?.[0] && (
                                <div className="aspect-[4/3] bg-stone-200 overflow-hidden">
                                    <img
                                        src={journey.images[0]}
                                        alt={journey.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-stone-600 transition">{journey.title}</h3>
                                <p className="text-stone-600 mb-4">{journey.description}</p>
                                {journey.duration && (
                                    <p className="text-sm text-stone-500">{journey.duration}</p>
                                )}
                                {journey.price_explorer && (
                                    <p className="text-sm font-bold text-stone-900 mt-2">From ${journey.price_explorer}/person</p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
