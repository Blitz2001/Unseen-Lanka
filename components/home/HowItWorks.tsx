export default function HowItWorks() {
    const steps = [
        { num: "01", title: "Tell us your style", desc: "Share your preferences, dates, and what drives your curiosity." },
        { num: "02", title: "We design", desc: "Receive a curated itinerary designed by local experience architects." },
        { num: "03", title: "You relax", desc: "From arrival to departure, our chauffeur-guides handle every detail." },
    ];

    return (
        <section className="py-20 bg-stone-900 text-stone-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How Unseen Lanka Works</h2>
                    <p className="text-stone-400">Complex logistics, simplified for you.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto border-t border-stone-800 pt-12">
                    {steps.map((step) => (
                        <div key={step.num} className="relative">
                            <span className="text-6xl font-bold text-stone-800 absolute -top-8 -left-4 z-0">
                                {step.num}
                            </span>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                <p className="text-stone-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
