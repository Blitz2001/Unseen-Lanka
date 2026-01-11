import { getDestination, getAllSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';

export async function generateStaticParams() {
    const slugs = getAllSlugs('destinations');
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const { frontmatter } = await getDestination(slug);
        return constructMetadata({
            title: frontmatter.seoTitle || frontmatter.title,
            description: frontmatter.description,
            image: frontmatter.images?.[0],
        });
    } catch {
        return constructMetadata({ title: 'Destination Not Found' });
    }
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const { content, frontmatter } = await getDestination(slug);

        return (
            <article className="min-h-screen">
                <div className="relative h-[50vh] bg-stone-900 flex items-center justify-center">
                    {frontmatter.images?.[0] && (
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-60"
                            style={{ backgroundImage: `url('${frontmatter.images[0]}')` }}
                        />
                    )}
                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative z-10 text-center px-4">
                        <span className="block text-stone-300 font-medium tracking-widest uppercase mb-4">{frontmatter.region}</span>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-white">{frontmatter.title}</h1>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 grid md:grid-cols-[1fr_300px] gap-12">
                    <div className="prose prose-lg prose-stone max-w-none">
                        {content}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                            <h3 className="font-bold mb-4">Start Planning</h3>
                            <p className="text-sm text-stone-600 mb-6">Want to include {frontmatter.title} in your itinerary?</p>
                            <Link
                                href="/plan-your-trip"
                                className="block w-full bg-stone-900 text-white text-center py-3 rounded-lg text-sm font-medium hover:bg-black transition-colors"
                            >
                                Design My Trip
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        );
    } catch (error) {
        notFound();
    }
}
