import { constructMetadata } from '@/lib/metadata';
import Image from 'next/image';

export const metadata = constructMetadata({
    title: 'About Unseen Lanka | Experience Architects',
    description: 'We are not just a travel agency. We are logistic experts and storytellers designing the perfect Sri Lankan journey.',
});

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-stone-950 text-editorial-cream selection:bg-editorial-accent selection:text-white">
            {/* Split Hero Section */}
            <section className="relative min-h-[80vh] flex flex-col lg:flex-row">
                {/* Image Side */}
                <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-stone-900 animate-pulse" /> {/* Placeholder while loading */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-80"
                        style={{ backgroundImage: "url('/images/ritigala-editorial.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-transparent lg:bg-gradient-to-l lg:from-stone-950/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent lg:hidden" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-stone-950 relative z-10">
                    <span className="text-editorial-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-7xl font-playfair text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Not an Algorithm. <br /><span className="italic text-white/50">A Team.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-400 font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                        Most travel sites are just search engines. They give you options, but they don&apos;t give you answers. <br className="hidden md:block" />
                        <span className="text-white">Unseen Lanka was built to be the antidote to &quot;Too Much Information&quot;.</span>
                    </p>
                </div>
            </section>

            {/* Manifesto Section */}
            <section className="py-24 md:py-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-invert prose-p:text-stone-400 prose-headings:font-playfair prose-headings:text-white mx-auto">
                        <h2 className="text-4xl md:text-5xl text-center mb-16">Who We Are</h2>
                        <p className="text-xl leading-relaxed mb-8">
                            We are <strong className="text-white">Unseen Lanka</strong>, a registered Destination Management Company (SLTDA Reg No: SLTDA/SQ/2026/001).
                            But to our travelers, we are their local connection.
                        </p>
                        <p className="text-xl leading-relaxed mb-16">
                            We don&apos;t sell &quot;packages&quot;. We design flows. We understand that a 6-hour drive is too long for a toddler.
                            We know which leopard safari has fewer jeeps. We know where to find the best hopper in Jaffna.
                        </p>

                        <div className="my-16 p-12 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group hover:border-editorial-accent/50 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-32 bg-editorial-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-editorial-accent/10 transition-all duration-700" />

                            <h3 className="font-playfair text-3xl md:text-4xl mb-8 relative z-10">The &quot;Unseen&quot; Promise</h3>
                            <ul className="space-y-8 relative z-10">
                                <li className="flex gap-6 items-start">
                                    <span className="text-editorial-accent font-bold text-xl pt-1">01.</span>
                                    <div>
                                        <strong className="text-white block text-xl mb-2">No Kickbacks.</strong>
                                        We don&apos;t stop at spice gardens or gem shops unless you explicitly ask. Your time is sacred.
                                    </div>
                                </li>
                                <li className="flex gap-6 items-start">
                                    <span className="text-editorial-accent font-bold text-xl pt-1">02.</span>
                                    <div>
                                        <strong className="text-white block text-xl mb-2">Fair Wages.</strong>
                                        Our chauffeur-guides are paid above market rates because they are the MVP of your trip.
                                    </div>
                                </li>
                                <li className="flex gap-6 items-start">
                                    <span className="text-editorial-accent font-bold text-xl pt-1">03.</span>
                                    <div>
                                        <strong className="text-white block text-xl mb-2">Precision.</strong>
                                        We plan logistics with military precision so you can have total freedom when you arrive.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
