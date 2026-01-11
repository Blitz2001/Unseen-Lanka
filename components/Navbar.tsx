'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/unseen-journeys', label: 'Journeys' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/travel-styles', label: 'Travel Styles' },
        { href: '/about-unseen-lanka', label: 'About' },
    ];

    return (
        <nav className="border-b border-stone-100 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading tracking-tight text-stone-900">
                    UNSEEN LANKA
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-stone-900 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/plan-your-trip"
                        className="bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-black transition-colors"
                    >
                        Plan Trip
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-stone-900"
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
                <div className="md:hidden border-t border-stone-100 bg-white">
                    <div className="container mx-auto px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-stone-900 font-medium py-2 hover:text-stone-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/plan-your-trip"
                            className="block w-full bg-stone-900 text-white text-center py-3 rounded-lg font-medium hover:bg-black transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Plan Trip
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
