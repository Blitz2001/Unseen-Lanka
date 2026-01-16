'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitInquiry } from '@/app/actions';

interface JourneyRequestModalProps {
    journeyTitle: string;
    journeySlug: string;
}

export default function JourneyRequestModal({ journeyTitle, journeySlug }: JourneyRequestModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);

        const result = await submitInquiry(formData);

        if (result.success && result.redirectUrl) {
            router.push(result.redirectUrl);
        } else {
            alert("Something went wrong. Please try again.");
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <button
                onClick={openModal}
                className="block w-full bg-stone-900 text-white text-center py-4 rounded-lg font-medium hover:bg-black transition-colors"
            >
                Request This Journey
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-stone-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold font-heading text-stone-900">Request Journey</h3>
                            <button onClick={closeModal} className="text-stone-400 hover:text-stone-900 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-stone-50 px-6 py-3 border-b border-stone-100">
                            <p className="text-sm text-stone-600">You are inquiring about:</p>
                            <p className="font-bold text-stone-900">{journeyTitle}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                                <input type="text" name="name" id="name" required className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 outline-none" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                                <input type="email" name="email" id="email" required className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 outline-none" />
                            </div>

                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-stone-700 mb-1">WhatsApp Number</label>
                                <input type="tel" name="whatsapp" id="whatsapp" required placeholder="+1 ..." className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 outline-none" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="month" className="block text-sm font-medium text-stone-700 mb-1">When?</label>
                                    <select name="month" id="month" className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 outline-none bg-white">
                                        <option>Jan-Mar 2026</option>
                                        <option>Apr-Jun 2026</option>
                                        <option>Jul-Sep 2026</option>
                                        <option>Oct-Dec 2026</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="pax" className="block text-sm font-medium text-stone-700 mb-1">Travelers</label>
                                    <select name="pax" id="pax" className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 outline-none bg-white">
                                        <option>2 (Couple)</option>
                                        <option>1 (Solo)</option>
                                        <option>3-4 (Family)</option>
                                        <option>5+ (Group)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Any specific needs? (Optional)</label>
                                <textarea name="message" id="message" rows={2} className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 outline-none"></textarea>
                            </div>

                            <input type="hidden" name="journey_slug" value={journeySlug} />

                            {/* Hidden style field as it's implied by the journey choice, but API might expect it if we reused leads table. 
                                Since we distinguish in actions.ts by journey_slug, this is fine. 
                                Adding a default style just in case of fallback logic. */}
                            <input type="hidden" name="style" value="Signature" />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-stone-900 text-white py-3 rounded-lg font-bold hover:bg-black transition-all disabled:opacity-70 mt-4"
                            >
                                {isSubmitting ? 'Sending Request...' : 'Send Request'}
                            </button>

                            <p className="text-center text-xs text-stone-400 mt-2">
                                We&apos;ll email you the complete itinerary & payment details.
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
