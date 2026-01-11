import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b border-stone-100 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading tracking-tight text-stone-900">
                    UNSEEN LANKA
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
                    <Link href="/unseen-journeys" className="hover:text-stone-900 transition-colors">Journeys</Link>
                    <Link href="/destinations" className="hover:text-stone-900 transition-colors">Destinations</Link>
                    <Link href="/travel-styles" className="hover:text-stone-900 transition-colors">Travel Styles</Link>
                    <Link href="/about-unseen-lanka" className="hover:text-stone-900 transition-colors">About</Link>
                    <Link
                        href="/plan-your-trip"
                        className="bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-black transition-colors"
                    >
                        Plan Trip
                    </Link>
                </div>

                {/* Mobile Menu Placeholder */}
                <button className="md:hidden p-2 text-stone-900">
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
