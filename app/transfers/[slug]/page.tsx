import { getTransfer, getAllSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';

export async function generateStaticParams() {
    const slugs = getAllSlugs('transfers');
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const { frontmatter } = await getTransfer(params.slug);
        return constructMetadata({
            title: frontmatter.seoTitle || frontmatter.title,
            description: frontmatter.description,
            image: frontmatter.images?.[0],
        });
    } catch {
        return constructMetadata({ title: 'Transfer Service Not Found' });
    }
}

export default async function TransferPage({ params }: { params: { slug: string } }) {
    try {
        const { content, frontmatter } = await getTransfer(params.slug);

        return (
            <article className="min-h-screen">
                <div className="relative h-[40vh] bg-stone-900 flex items-center justify-center">
                    {frontmatter.images?.[0] && (
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-50"
                            style={{ backgroundImage: `url('${frontmatter.images[0]}')` }}
                        />
                    )}
                    <div className="relative z-10 text-center px-4">
                        <span className="block text-stone-300 font-medium tracking-widest uppercase mb-4">Transfer Service</span>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">{frontmatter.title}</h1>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 grid md:grid-cols-[1fr_350px] gap-12">
                    <div className="prose prose-lg prose-stone max-w-none">
                        {content}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-4 font-heading">Book This Transfer</h3>
                            {frontmatter.price && (
                                <div className="mb-6 pb-6 border-b border-stone-200">
                                    <p className="text-sm text-stone-500 mb-1">Starting from</p>
                                    <p className="text-3xl font-bold text-stone-900">{frontmatter.price}</p>
                                </div>
                            )}

                            <ul className="space-y-3 mb-8">
                                {frontmatter.features?.map((feature) => (
                                    <li key={feature} className="flex items-start text-sm text-stone-700">
                                        <span className="mr-2 text-green-600">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`/plan-your-trip?service=${params.slug}`}
                                className="block w-full bg-stone-900 text-white text-center py-4 rounded-lg font-medium hover:bg-black transition-colors"
                            >
                                Request Quote
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
