import Link from 'next/link';

const JOURNEYS = [
    {
        title: "The Northern Frontiers",
        desc: "Explore Sri Lanka’s least-visited cultural region with expert guides. Jaffna to Trincomalee.",
        image: "https://images.unsplash.com/photo-1546708773-e5746a55bfb0?q=80&w=2070&auto=format&fit=crop",
        link: "/journeys/northern-frontiers",
        tag: "Signature"
    },
    {
        title: "Southern Soul",
        desc: "Surf culture, hidden cafes, and slow travel along the iconic southern belt.",
        image: "https://images.unsplash.com/photo-1577948000111-9c9707350006?q=80&w=2070&auto=format&fit=crop",
        link: "/journeys/southern-soul",
        tag: "Best Seller"
    },
    {
        title: "Decision-Free Family",
        desc: "A logistics-perfected itinerary designed for parents who need a real break.",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2000&auto=format&fit=crop",
        link: "/journeys/decision-free-family",
        tag: "Family Focus"
    }
];

export default function SignatureJourneys() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-stone-900">Signature Journeys</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Hand-crafted itineraries that blend logistics precision with the freedom of discovery.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {JOURNEYS.map((journey) => (
                        <Link key={journey.title} href={journey.link} className="group block">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-stone-100">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider z-10">
                                    {journey.tag}
                                </div>
                                {/* Image Placeholder */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${journey.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white mb-2">{journey.title}</h3>
                                    <p className="text-stone-200 text-sm line-clamp-2">{journey.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
