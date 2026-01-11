import Link from 'next/link';

const STYLES = [
    { name: "Families", link: "/travel-styles/family" },
    { name: "Honeymoon", link: "/travel-styles/honeymoon" },
    { name: "Solo Travelers", link: "/travel-styles/solo" },
    { name: "Digital Nomads", link: "/travel-styles/digital-nomads" },
];

export default function TravelStyles() {
    return (
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center text-stone-900">
                    How do you travel?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {STYLES.map((style) => (
                        <Link
                            key={style.name}
                            href={style.link}
                            className="flex items-center justify-center h-32 md:h-40 bg-white border border-stone-200 rounded-lg hover:border-stone-900 hover:shadow-lg transition-all text-center px-4"
                        >
                            <span className="text-xl font-medium text-stone-900">{style.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
