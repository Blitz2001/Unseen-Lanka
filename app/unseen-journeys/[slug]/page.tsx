import { getJourney, getAllSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';

export async function generateStaticParams() {
    const slugs = getAllSlugs('journeys');
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const { frontmatter } = await getJourney(params.slug);
        return constructMetadata({
            title: frontmatter.seoTitle || frontmatter.title,
            description: frontmatter.description,
            image: frontmatter.images?.[0],
        });
    } catch {
        return constructMetadata({ title: 'Journey Not Found' });
    }
}

export default async function JourneyPage({ params }: { params: { slug: string } }) {
    try {
        const { content, frontmatter } = await getJourney(params.slug);

        return (
            <article className="min-h-screen">
                {/* Hero */}
                <div className="relative h-[60vh] bg-stone-900 flex items-center justify-center">
                    {frontmatter.images?.[0] && (
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-60"
                            style={{ backgroundImage: `url('${frontmatter.images[0]}')` }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />

                    <div className="relative z-10 text-center px-4 max-w-4xl">
                        <span className="block text-stone-300 font-medium tracking-widest uppercase mb-4">Signature Journey</span>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">{frontmatter.title}</h1>
                        <div className="flex justify-center gap-6 text-stone-200">
                            {frontmatter.duration && <span>⏱ {frontmatter.duration}</span>}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 grid md:grid-cols-[1fr_350px] gap-12">
                    {/* Main Content */}
                    <div className="prose prose-lg prose-stone max-w-none">
                        {content}
                    </div>

                    {/* Sidebar / Book */}
                    <div className="space-y-8">
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 font-heading">Estimated Investment</h3>

                            <div className="space-y-4 mb-8">
                                {frontmatter.price_explorer && (
                                    <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                                        <span className="text-stone-600">Explorer</span>
                                        <span className="font-bold text-lg">${frontmatter.price_explorer}</span>
                                    </div>
                                )}
                                {frontmatter.price_signature && (
                                    <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                                        <span className="text-stone-900 font-medium">Signature</span>
                                        <span className="font-bold text-lg text-stone-900">${frontmatter.price_signature}</span>
                                    </div>
                                )}
                                {frontmatter.price_luxe && (
                                    <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                                        <span className="text-gold-600">Luxe</span>
                                        <span className="font-bold text-lg">${frontmatter.price_luxe}</span>
                                    </div>
                                )}
                                <p className="text-xs text-stone-500 mt-2">*Per person, based on 2 pax</p>
                            </div>

                            <Link
                                href={`/plan-your-trip?journey=${params.slug}`}
                                className="block w-full bg-stone-900 text-white text-center py-4 rounded-lg font-medium hover:bg-black transition-colors"
                            >
                                Request This Journey
                            </Link>
                            <p className="text-center text-xs text-stone-500 mt-3">100% Customizable</p>
                        </div>
                    </div>
                </div>
            </article>
        );
    } catch (error) {
        notFound();
    }
}
