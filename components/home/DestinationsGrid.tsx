import Link from 'next/link';

const DESTINATIONS = [
    { name: "Ahangama", desc: "Surf & Soul", link: "/destinations/ahangama" },
    { name: "Jaffna", desc: "Northern Culture", link: "/destinations/jaffna" },
    { name: "Passikudah", desc: "Untouched East", link: "/destinations/passikudah" },
    { name: "Ritigala", desc: "Ancient Mysteries", link: "/destinations/ritigala" },
];

export default function DestinationsGrid() {
    return (
        <section className="py-20 bg-white border-t border-stone-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-stone-900">Destinations</h2>
                        <p className="text-stone-600">Places that redefine the island experience.</p>
                    </div>
                    <Link href="/destinations" className="text-stone-900 font-medium hover:underline mt-4 md:mt-0">
                        View All Destinations &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DESTINATIONS.map((dest) => (
                        <Link key={dest.name} href={dest.link} className="group block h-64 relative rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-stone-800" />
                            {/* Use real images later */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform">{dest.name}</h3>
                                <p className="text-stone-300 text-sm">{dest.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
