import { getJourney, getAllSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/metadata';
// Image import removed for custom div implementation
import SnapSection from '@/components/ui/SnapSection';
import JourneyRequestModal from '@/components/JourneyRequestModal';

export async function generateStaticParams() {
    const slugs = getAllSlugs('journeys');
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const { frontmatter } = await getJourney(slug);
        return constructMetadata({
            title: frontmatter.seoTitle || frontmatter.title,
            description: frontmatter.description,
            image: frontmatter.images?.[0],
        });
    } catch {
        return constructMetadata({ title: 'Journey Not Found' });
    }
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    try {
        const { content, frontmatter } = await getJourney(slug);

        return (
            <main id="root-scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                {/* Cinematic Hero - Snap Section */}
                <SnapSection className="relative h-screen bg-stone-900 text-editorial-cream snap-start">
                    <div className="absolute inset-0 z-0">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        {/* Background Image */}
                        {frontmatter.images?.[0] && (
                            <div
                                className="absolute inset-0 bg-cover bg-center animate-in fade-in duration-1000"
                                style={{ backgroundImage: `url('${frontmatter.images[0]}')` }}
                            />
                        )}
                    </div>

                    <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
                        <span className="block text-white/80 font-medium tracking-[0.25em] uppercase mb-6 text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Signature Journey
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            {frontmatter.title}
                        </h1>

                        {frontmatter.duration && (
                            <div className="inline-flex items-center gap-2 border border-white/30 px-4 py-2 rounded-full text-white/90 text-sm tracking-wider uppercase animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                                <span>⏱ {frontmatter.duration}</span>
                            </div>
                        )}
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase animate-bounce z-20">
                        Scroll for Itinerary
                    </div>
                </SnapSection>

                {/* Content Section - Snap Start for easy access */}
                <section className="min-h-screen bg-editorial-cream text-stone-800 py-20 md:py-32 snap-start">
                    <div className="container mx-auto px-6 grid md:grid-cols-[1fr_400px] gap-16 lg:gap-24">

                        {/* Main Content (Left) */}
                        <div className="prose prose-lg prose-stone prose-headings:font-playfair prose-headings:font-normal max-w-none">
                            <p className="lead text-2xl md:text-3xl font-playfair italic text-stone-600 mb-12 leading-relaxed">
                                {frontmatter.description}
                            </p>
                            {content}
                        </div>

                        {/* Sticky Sidebar (Right) */}
                        <div className="relative h-fit">
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-white p-8 md:p-10 shadow-sm border border-stone-100">
                                    <h3 className="text-2xl font-playfair mb-8 text-stone-900 border-b border-stone-100 pb-4">
                                        Your Investment
                                    </h3>

                                    <div className="space-y-6 mb-10">
                                        {frontmatter.price_explorer && (
                                            <div className="flex justify-between items-baseline group">
                                                <span className="text-stone-500 uppercase tracking-wider text-xs font-semibold group-hover:text-stone-800 transition-colors">Explorer</span>
                                                <span className="font-playfair text-2xl text-stone-800">${frontmatter.price_explorer}</span>
                                            </div>
                                        )}
                                        {frontmatter.price_signature && (
                                            <div className="flex justify-between items-baseline group">
                                                <span className="text-editorial-accent uppercase tracking-wider text-xs font-bold">Signature</span>
                                                <span className="font-playfair text-3xl text-editorial-accent">${frontmatter.price_signature}</span>
                                            </div>
                                        )}
                                        {frontmatter.price_luxe && (
                                            <div className="flex justify-between items-baseline group">
                                                <span className="text-gold-600 uppercase tracking-wider text-xs font-semibold group-hover:text-gold-700 transition-colors">Luxe</span>
                                                <span className="font-playfair text-2xl text-stone-600 group-hover:text-gold-700 transition-colors">${frontmatter.price_luxe}</span>
                                            </div>
                                        )}
                                        <p className="text-[10px] uppercase tracking-wider text-stone-400 text-right mt-2">*Per person, based on 2 pax</p>
                                    </div>

                                    <div className="space-y-4">
                                        <JourneyRequestModal
                                            journeyTitle={frontmatter.title}
                                            journeySlug={slug}
                                        />
                                        <p className="text-center text-stone-400 text-xs italic font-serif">
                                            100% Customizable to your preferences
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 bg-stone-900 text-editorial-cream text-center">
                                    <h4 className="font-playfair text-xl mb-2">Need advice?</h4>
                                    <p className="text-white/60 text-sm mb-4">Our travel designers are here to help.</p>
                                    <a href="mailto:hello@unseenlanka.com" className="text-sm underline decoration-white/30 hover:decoration-white transition-all">Get in touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    } catch (error) {
        notFound();
    }
}
