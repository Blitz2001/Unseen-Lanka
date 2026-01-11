import { getGuide, getAllSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
    const slugs = getAllSlugs('guides');
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const { frontmatter } = await getGuide(params.slug);
        return constructMetadata({
            title: frontmatter.seoTitle || frontmatter.title,
            description: frontmatter.description,
            image: frontmatter.images?.[0],
        });
    } catch {
        return constructMetadata({ title: 'Guide Not Found' });
    }
}

export default async function GuidePage({ params }: { params: { slug: string } }) {
    try {
        const { content, frontmatter } = await getGuide(params.slug);

        return (
            <article className="min-h-screen bg-white">
                {/* Header */}
                <div className="bg-stone-50 py-16 md:py-24 border-b border-stone-200 text-center px-4">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-stone-500 text-sm font-bold uppercase tracking-widest mb-4 block">
                            {frontmatter.category} — {new Date(frontmatter.publishedAt).getFullYear()}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-stone-900">
                            {frontmatter.title}
                        </h1>
                        <p className="text-xl text-stone-600 leading-relaxed">
                            {frontmatter.description}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16 max-w-4xl grid md:grid-cols-[1fr_250px] gap-12">
                    <div className="prose prose-lg prose-stone max-w-none">
                        {/* Featured Image if available */}
                        {frontmatter.images?.[0] && (
                            <figure className="mb-10">
                                {/* Using img for raw markdown feel, in prod use Next Image with width/height known */}
                                <img
                                    src={frontmatter.images[0]}
                                    alt={frontmatter.title}
                                    className="w-full rounded-xl shadow-sm"
                                />
                            </figure>
                        )}
                        {content}
                    </div>

                    {/* Sidebar CTA */}
                    <div className="space-y-8 h-fit sticky top-24">
                        <div className="bg-stone-900 text-stone-100 p-6 rounded-xl text-center">
                            <h3 className="text-lg font-bold mb-3 text-white">Need a Driver?</h3>
                            <p className="text-sm text-stone-400 mb-6">
                                Don't risk public transport. Hire a vetted chauffeur-guide.
                            </p>
                            <Link
                                href="/transfers/private-driver-sri-lanka"
                                className="block w-full bg-white text-stone-900 font-bold py-3 rounded-lg hover:bg-stone-200 transition"
                            >
                                Check Rates
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
