'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, useScroll, useMotionValueEvent, Variants } from 'framer-motion';

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className }: NavbarProps) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        // Check if we are on the homepage with the custom scroll container
        // This runs on mount AND when pathname changes, ensuring we grab the new container
        const customContainer = document.getElementById('root-scroll-container');
        const target = customContainer || window;

        let lastScrollTop = 0;

        const handleScroll = () => {
            // If custom container, use its scrollTop. If window, use scrollY.
            const scrollTop = customContainer
                ? customContainer.scrollTop
                : window.scrollY;

            // Auto-hide logic with tolerance
            if (scrollTop > lastScrollTop && scrollTop > 150) {
                setIsHidden(true);
            } else if (scrollTop < lastScrollTop || scrollTop < 50) {
                // Always show if scrolling up OR near top
                setIsHidden(false);
            }

            lastScrollTop = Math.max(0, scrollTop);

            // Glass effect logic
            setIsScrolled(scrollTop > 20);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY < 100) { // Show when mouse near top
                setIsHidden(false);
            }
        };

        target.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Initial check
        handleScroll();

        return () => {
            target.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [pathname]);

    const navVariants: Variants = {
        top: {
            y: 0,
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
            borderBottomColor: "rgba(255, 255, 255, 0)",
            paddingTop: "32px",
            paddingBottom: "32px",
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            transition: {
                duration: 0.6,
                ease: "easeInOut" as const
            }
        },
        scrolled: {
            y: 0,
            backgroundColor: "rgba(12, 10, 9, 0.8)", // stone-950/80
            backdropFilter: "blur(12px)",
            borderBottomColor: "rgba(255, 255, 255, 0.05)",
            paddingTop: "16px",
            paddingBottom: "16px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            transition: {
                duration: 0.4,
                ease: "circOut" as const
            }
        },
        hidden: {
            y: "-100%",
            transition: {
                duration: 0.4,
                ease: "easeInOut" as const
            }
        }
    };

    const navLinks = [
        { href: '/unseen-journeys', label: 'Journeys' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/travel-styles', label: 'Travel Styles' },
        { href: '/about-unseen-lanka', label: 'About' },
    ];

    return (
        <motion.nav
            initial="top"
            animate={isHidden ? "hidden" : isScrolled ? "scrolled" : "top"}
            variants={navVariants}
            className={cn(
                "fixed top-0 left-0 w-full z-50",
                className
            )}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                <Link
                    href="/"
                    className={cn(
                        "text-2xl font-bold font-heading tracking-widest uppercase transition-colors duration-500",
                        "text-white"
                    )}
                >
                    Unseen Lanka
                </Link>

                {/* Desktop Navigation */}
                <div className={cn(
                    "hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase transition-colors duration-500",
                    "text-white/80 hover:text-white"
                )}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-all hover:text-editorial-accent relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-editorial-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/plan-your-trip"
                        className={cn(
                            "px-6 py-3 rounded-none transition-all duration-300 font-bold tracking-widest text-[10px] uppercase shadow-none",
                            isScrolled
                                ? "bg-stone-900 text-editorial-cream hover:bg-black border border-transparent"
                                : "bg-white text-stone-900 hover:bg-stone-100 border border-transparent"
                        )}
                    >
                        Plan Trip
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors duration-300",
                        isScrolled ? "text-white" : "text-white" // Keep white for consistency on dark backgrounds
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl">
                    <div className="container mx-auto px-6 py-8 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-stone-900 font-bold tracking-widest uppercase text-sm hover:text-editorial-accent transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/plan-your-trip"
                            className="block w-full bg-stone-900 text-white text-center py-4 rounded-none font-bold tracking-widest text-xs uppercase hover:bg-black transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Plan Trip
                        </Link>
                    </div>
                </div>
            )}
        </motion.nav>
    );
}
