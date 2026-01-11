export default function SocialProof() {
    const reviews = [
        {
            name: "Sarah Jenkins & Family",
            country: "UK",
            text: "Unseen Lanka didn't just book a driver; they designed an entire experience. Our kids loved the 'decision-Free' plan. We actually relaxed.",
            rating: 5,
        },
        {
            name: "Marcus & Elena",
            country: "Germany",
            text: "We wanted to see Jaffna but didn't know how to navigate it safely. The Northern Frontiers tour was eye-opening. The guide was exceptional.",
            rating: 5,
        },
        {
            name: "David Chen",
            country: "Singapore",
            text: "Fast responses on WhatsApp. The vehicle was brand new. No forced shopping stops. Exactly what a premium service should be.",
            rating: 5,
        },
    ];

    return (
        <section className="py-20 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-stone-900">
                        Trusted by Modern Travelers
                    </h2>
                    <p className="text-stone-600">Real unfiltered feedback from our early explorers.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="text-stone-700 italic mb-6">"{review.text}"</p>
                            <div>
                                <p className="font-bold text-stone-900">{review.name}</p>
                                <p className="text-xs text-stone-500 uppercase tracking-widest">{review.country}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
