import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Travel Styles',
    description: 'Find the perfect Sri Lanka experience tailored to your travel style.',
});

export default function TravelStylesPage() {
    const styles = [
        {
            title: 'Families',
            description: 'Decision-free itineraries designed for parents who need a real break. We handle logistics, you make memories.',
            icon: '👨‍👩‍👧‍👦',
            link: '/unseen-journeys/decision-free-family',
        },
        {
            title: 'Honeymoon',
            description: 'Romantic escapes to untouched beaches and private villas. No crowds, just connection.',
            icon: '💑',
            link: '/unseen-journeys/southern-soul',
        },
        {
            title: 'Solo Travelers',
            description: 'Safe, curated experiences for independent explorers. Local guides who become friends.',
            icon: '🎒',
            link: '/unseen-journeys/northern-frontiers',
        },
        {
            title: 'Digital Nomads',
            description: 'Work-friendly stays in Ahangama and Galle with reliable WiFi and inspiring views.',
            icon: '💻',
            link: '/destinations/ahangama',
        },
    ];

    return (
        <div className="min-h-screen bg-white py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">How do you travel?</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                        Every traveler is different. Find the perfect Sri Lanka experience tailored to your style.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {styles.map((style) => (
                        <Link
                            key={style.title}
                            href={style.link}
                            className="group block bg-stone-50 rounded-xl p-8 hover:shadow-lg transition-all"
                        >
                            <div className="text-5xl mb-4">{style.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-stone-600 transition">{style.title}</h3>
                            <p className="text-stone-600">{style.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
