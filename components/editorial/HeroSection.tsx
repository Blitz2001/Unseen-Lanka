'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import SnapSection from '../ui/SnapSection';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollerRef, setScrollerRef] = useState<{ current: HTMLElement | null } | undefined>(undefined);

    useEffect(() => {
        const scrollContainer = document.getElementById('root-scroll-container') || document.body;
        setScrollerRef({ current: scrollContainer });
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        container: scrollerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 }
        }
    };

    return (
        <SnapSection className="relative bg-stone-900 text-editorial-cream overflow-hidden" noAnimation>
            {/* Background Media */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/30 to-stone-900/10 z-10" />
                <Image
                    src="/images/hero-real.png"
                    alt="Sri Lanka Illustrated Landscape"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-start"
            >
                <motion.span variants={itemVariants} className="font-sans text-xs tracking-[0.3em] uppercase mb-6 text-white/80 border-l border-editorial-accent pl-4">
                    The Unseen Awaits
                </motion.span>

                <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-10 max-w-6xl drop-shadow-2xl">
                    <motion.span variants={itemVariants} className="block">Discover the</motion.span>
                    <motion.span variants={itemVariants} className="block">
                        <span className="italic text-[#E8DCC4] font-light pr-4">Untouched</span> Soul
                    </motion.span>
                    <motion.span variants={itemVariants} className="block">of Sri Lanka.</motion.span>
                </h1>

                <motion.div variants={itemVariants}>
                    <Link
                        href="/plan-your-trip"
                        className="group relative inline-flex items-center px-10 py-5 bg-white/5 hover:bg-white border border-white/20 hover:border-white transition-all duration-500"
                    >
                        <span className="font-sans tracking-[0.2em] text-xs uppercase text-white group-hover:text-stone-900 transition-colors duration-500 mr-4">
                            Start Your Journey
                        </span>
                        <span className="w-8 h-[1px] bg-white group-hover:bg-stone-900 transition-colors duration-500" />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-[0.4em] uppercase"
            >
                Scroll to Explore
            </motion.div>
        </SnapSection>
    );
}
