import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
    title: 'Contact Us',
    description: 'Reach our team in Colombo. WhatsApp, Email, or Visit.',
});

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-stone-50 py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-center">Talk to a Human</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-6">For Fast Answers</h3>
                        <p className="text-stone-600 mb-8">
                            The fastest way to reach us is WhatsApp. We reply within 15 minutes during waking hours (LK time).
                        </p>
                        <a
                            href="https://wa.me/94770000000"
                            className="inline-flex items-center justify-center w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition"
                        >
                            Chat on WhatsApp (+94 77 000 0000)
                        </a>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-6">Office Info</h3>
                        <div className="space-y-4 text-stone-600">
                            <p>
                                <strong>Avawia Tours (Pvt) Ltd</strong><br />
                                123, Galle Road,<br />
                                Colombo 03, Sri Lanka.
                            </p>
                            <p>
                                <strong>Email:</strong><br />
                                <a href="mailto:hello@unseenlanka.com" className="text-stone-900 border-b border-stone-200 hover:border-black">hello@unseenlanka.com</a>
                            </p>
                            <p>
                                <strong>Emergency (24/7):</strong><br />
                                +94 77 000 0001
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
