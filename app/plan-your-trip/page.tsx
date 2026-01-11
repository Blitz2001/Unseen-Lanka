import { constructMetadata } from '@/lib/metadata';
import InquiryForm from '@/components/InquiryForm';

export const metadata = constructMetadata({
    title: 'Plan Your Journey',
    description: 'Design your custom Sri Lanka itinerary with our Experience Architects.',
});

export default function PlanYourTripPage({ searchParams }: { searchParams: { journey?: string; service?: string } }) {
    // Can use searchParams to pre-fill form if we want to add that logic later

    return (
        <div className="min-h-screen bg-stone-50 py-12 md:py-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <span className="text-stone-500 font-medium tracking-widest uppercase text-sm mb-3 block">Step 1 of 1</span>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-stone-900">
                        Tell us how you travel. <br />
                        We handle the engineering.
                    </h1>
                    <p className="text-stone-600 text-lg max-w-xl mx-auto">
                        Share your style, and we'll craft a preliminary itinerary and quote within 24 hours. No commitment required.
                    </p>
                </div>

                <InquiryForm />

                <div className="mt-12 grid grid-cols-3 gap-4 text-center text-stone-400 text-sm">
                    <div>
                        <span className="block text-2xl mb-2">🔒</span>
                        Secure Data
                    </div>
                    <div>
                        <span className="block text-2xl mb-2">💬</span>
                        Direct WhatsApp
                    </div>
                    <div>
                        <span className="block text-2xl mb-2">✨</span>
                        No Junk Spam
                    </div>
                </div>
            </div>
        </div>
    );
}
