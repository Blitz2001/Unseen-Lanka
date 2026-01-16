import { constructMetadata } from '@/lib/metadata';
import InquiryForm from '@/components/InquiryForm';

export const metadata = constructMetadata({
    title: 'Plan Your Journey',
    description: 'Design your custom Sri Lanka itinerary with our Experience Architects.',
});

export default async function PlanYourTripPage({ searchParams }: { searchParams: Promise<{ journey?: string; service?: string }> }) {
    // Can use searchParams to pre-fill form if we want to add that logic later 
    const resolvedParams = await searchParams;

    return (
        <main className="min-h-screen bg-stone-950 text-editorial-cream selection:bg-editorial-accent selection:text-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-editorial-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Start Your Journey
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Tell us how you travel. <br />
                        <span className="text-stone-500 italic">We handle the engineering.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Share your style, and we&apos;ll craft a preliminary itinerary and quote within 24 hours. No commitment required.
                    </p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
                    <InquiryForm
                        initialJourney={resolvedParams.journey}
                        initialService={resolvedParams.service}
                    />
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-12 animate-in fade-in duration-700 delay-500">
                    <div className="space-y-2">
                        <span className="block text-2xl mb-2 grayscale opacity-50">🔒</span>
                        <h4 className="text-white font-playfair text-lg">Secure & Private</h4>
                        <p className="text-sm text-stone-500">Your data is never shared.</p>
                    </div>
                    <div className="space-y-2">
                        <span className="block text-2xl mb-2 grayscale opacity-50">💬</span>
                        <h4 className="text-white font-playfair text-lg">Direct WhatsApp</h4>
                        <p className="text-sm text-stone-500">Fast, human communication.</p>
                    </div>
                    <div className="space-y-2">
                        <span className="block text-2xl mb-2 grayscale opacity-50">✨</span>
                        <h4 className="text-white font-playfair text-lg">No Junk Spam</h4>
                        <p className="text-sm text-stone-500">We only send what matters.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
