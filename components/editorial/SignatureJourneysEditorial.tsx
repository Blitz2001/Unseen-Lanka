'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const JOURNEYS = [
    {
        title: "The Northern Frontiers",
        subtitle: "Jaffna to Trincomalee",
        desc: "Explore Sri Lanka's least-visited cultural region with expert guides. A journey through resilience, vibrant kovils, and untouched islands.",
        image: "/images/signature-north-jaffna.png",
        link: "/unseen-journeys/northern-frontiers",
        tag: "Signature"
    },
    {
        title: "Southern Soul",
        subtitle: "Galle to Tangalle",
        desc: "Surf culture, hidden colonial cafes, and slow travel along the iconic southern belt. The perfect blend of relaxation and discovery.",
        image: "/images/signature-south-galle.png",
        link: "/unseen-journeys/southern-soul",
        tag: "Best Seller"
    },
    {
        title: "Decision-Free Family",
        subtitle: "Hill Country & Coast",
        desc: "A logistics-perfected itinerary designed for parents who need a real break. Kids engaged, parents relaxed.",
        image: "/images/signature-hill-country.png",
        link: "/unseen-journeys/decision-free-family",
        tag: "Family Focus"
    }
];

export default function SignatureJourneysEditorial() {
    const targetRef = useRef<HTMLDivElement>(null);
    const [containerRef, setContainerRef] = useState<{ current: HTMLElement | null } | undefined>(undefined);

    useEffect(() => {
        const scrollContainer = document.getElementById('root-scroll-container') || document.body;
        setContainerRef({ current: scrollContainer });
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        container: containerRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[200vh] bg-stone-900 border-t border-white/5 snap-start">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="flex flex-col md:flex-row w-full h-full">
                    {/* Left Column: Sticky Title */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 relative z-20 bg-stone-900/95 backdrop-blur-sm md:bg-stone-900">
                        <span className="text-editorial-accent tracking-[0.3em] uppercase text-xs font-bold mb-4 block animate-in slide-in-from-left-4 fade-in duration-700">
                            Curated Experiences
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-editorial-cream mb-8 leading-[0.9]">
                            Signature <br /> <span className="italic text-white/50">Journeys</span>
                        </h2>
                        <p className="text-white/60 font-light leading-relaxed max-w-sm mb-12">
                            Hand-crafted itineraries that go beyond the guidebooks. Immerse yourself in the authentic soul of the island.
                        </p>
                        <div className="text-white/30 text-[10px] tracking-widest uppercase animate-pulse">
                            Scroll to Explore &rarr;
                        </div>
                    </div>

                    {/* Right Column: Horizontal Scroll Gallery */}
                    <div className="w-full md:w-2/3 h-full flex items-center overflow-hidden bg-stone-900 relative">
                        <motion.div
                            style={{ x }}
                            className="flex gap-8 px-8 md:px-16"
                        >
                            {JOURNEYS.map((journey) => (
                                <Link
                                    key={journey.title}
                                    href={journey.link}
                                    className="group relative flex-none w-[80vw] md:w-[45vh] lg:w-[50vh] aspect-[3/4] overflow-hidden bg-stone-800 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 border border-white/10"
                                >
                                    {/* Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        style={{ backgroundImage: `url('${journey.image}')` }}
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                                    {/* Card Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end items-start border border-white/5 group-hover:border-white/20 transition-colors">
                                        <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-auto self-end shadow-sm">
                                            {journey.tag}
                                        </span>

                                        <h3 className="text-3xl font-playfair text-white mb-2 leading-none drop-shadow-md">
                                            {journey.title}
                                        </h3>
                                        <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-4 drop-shadow-sm">
                                            {journey.subtitle}
                                        </p>

                                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                            <span className="inline-block text-editorial-cream border-b border-editorial-cream text-xs uppercase tracking-widest pb-1 font-bold">
                                                View Itinerary
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
