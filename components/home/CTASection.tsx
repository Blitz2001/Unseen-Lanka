import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-stone-900">
                    Ready for the Unseen?
                </h2>
                <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto">
                    Skip the endless research. Let our experts craft a journey that fits your rhythm perfectly.
                </p>
                <Link
                    href="/plan-your-trip"
                    className="inline-block bg-stone-900 text-white px-10 py-5 rounded-full font-medium text-xl hover:bg-black transition-transform transform hover:-translate-y-1"
                >
                    Start Your Journey
                </Link>
                <p className="mt-6 text-sm text-stone-500">
                    Response within 24 hours. No booking fees.
                </p>
            </div>
        </section>
    );
}
