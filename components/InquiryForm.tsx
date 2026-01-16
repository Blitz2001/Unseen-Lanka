'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitInquiry } from '@/app/actions';

interface InquiryFormProps {
    initialJourney?: string;
    initialService?: string;
}

export default function InquiryForm({ initialJourney, initialService }: InquiryFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    // Format the initial message based on props
    const getInitialMessage = () => {
        if (initialJourney) {
            // Convert slug to readable text (e.g., "northern-frontiers" -> "Northern Frontiers")
            const journeyName = initialJourney
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return `I am interested in the ${journeyName} journey.`;
        }
        if (initialService) {
            const serviceName = initialService
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            return `I am interested in the ${serviceName} service.`;
        }
        return '';
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);

        // Client-side validation could go here

        const result = await submitInquiry(formData);

        if (result.success && result.redirectUrl) {
            router.push(result.redirectUrl);
        } else {
            alert("Something went wrong. Please try again or message us directly.");
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-stone-900/50 p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">Name</label>
                    <input type="text" name="name" id="name" required className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white placeholder-stone-600 focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">Email</label>
                    <input type="email" name="email" id="email" required className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white placeholder-stone-600 focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all" placeholder="john@example.com" />
                </div>
            </div>

            <div>
                <label htmlFor="whatsapp" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">WhatsApp Number</label>
                <input type="tel" name="whatsapp" id="whatsapp" required placeholder="+1 ..." className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white placeholder-stone-600 focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="month" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">Travel Month</label>
                    <div className="relative">
                        <select name="month" id="month" className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all appearance-none cursor-pointer">
                            <option>January 2026</option>
                            <option>February 2026</option>
                            <option>March 2026</option>
                            <option>April 2026</option>
                            <option>May 2026</option>
                            <option>Later in 2026</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-stone-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="pax" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">Travelers</label>
                    <div className="relative">
                        <select name="pax" id="pax" className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all appearance-none cursor-pointer">
                            <option>2 (Couple)</option>
                            <option>1 (Solo)</option>
                            <option>3-4 (Family/Group)</option>
                            <option>5+ (Large Group)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-stone-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="duration" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">Duration (Days)</label>
                    <input type="number" name="duration" id="duration" placeholder="e.g. 10" min="1" className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white placeholder-stone-600 focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all" />
                </div>
                <div>
                    <label htmlFor="budget" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">Approx. Budget (Per Person)</label>
                    <div className="relative">
                        <select name="budget" id="budget" className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all appearance-none cursor-pointer">
                            <option value="">Select Range</option>
                            <option value="$1000 - $2000">$1000 - $2000</option>
                            <option value="$2000 - $3000">$2000 - $3000</option>
                            <option value="$3000 - $4000">$3000 - $4000</option>
                            <option value="$4000+">$4000+</option>
                            <option value="Flexible">Flexible</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-stone-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-4">Interests</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Nature & Wildlife', 'Culture & History', 'Beaches & Relaxation', 'Wellness & Yoga', 'Adventure & Hiking', 'Food & Culinary'].map((interest) => (
                        <label key={interest} className="flex items-center space-x-3 border border-white/10 p-4 rounded-lg cursor-pointer hover:bg-stone-800 hover:border-editorial-accent/50 transition-colors group">
                            <div className="relative flex items-center">
                                <input type="checkbox" name="interests" value={interest} className="peer appearance-none h-5 w-5 border border-stone-500 rounded bg-stone-900 checked:bg-editorial-accent checked:border-editorial-accent focus:ring-0 transition-all" />
                                <svg className="absolute w-3.5 h-3.5 text-stone-900 opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                            </div>
                            <span className="text-sm text-stone-300 group-hover:text-white transition-colors">{interest}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label htmlFor="must_visit" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">Any places you definitely want to visit?</label>
                <input type="text" name="must_visit" id="must_visit" placeholder="e.g. Sigiriya, Ella, Galle Fort" className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white placeholder-stone-600 focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all" />
            </div>

            <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-4">Accommodation Style</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Boutique Hotels', 'Luxury Resorts', 'Valid Eco-Lodges', 'Private Villas', 'Homestays'].map((acc) => (
                        <label key={acc} className="flex items-center space-x-3 border border-white/10 p-4 rounded-lg cursor-pointer hover:bg-stone-800 hover:border-editorial-accent/50 transition-colors group">
                            <div className="relative flex items-center">
                                <input type="checkbox" name="accommodation" value={acc} className="peer appearance-none h-5 w-5 border border-stone-500 rounded bg-stone-900 checked:bg-editorial-accent checked:border-editorial-accent focus:ring-0 transition-all" />
                                <svg className="absolute w-3.5 h-3.5 text-stone-900 opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                            </div>
                            <span className="text-sm text-stone-300 group-hover:text-white transition-colors">{acc}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-4">Travel Style</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center space-x-3 border border-white/10 p-4 rounded-lg cursor-pointer hover:bg-stone-800 hover:border-editorial-accent/50 transition-colors group">
                        <div className="relative flex items-center">
                            <input type="radio" name="style" value="Explorer" className="peer appearance-none h-5 w-5 border border-stone-500 rounded-full bg-stone-900 checked:bg-editorial-accent checked:border-editorial-accent focus:ring-0 transition-all" defaultChecked />
                            <div className="absolute w-2 h-2 rounded-full bg-stone-900 opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity" />
                        </div>
                        <span className="text-sm text-stone-300 group-hover:text-white transition-colors">Explorer (Active)</span>
                    </label>
                    <label className="flex items-center space-x-3 border border-white/10 p-4 rounded-lg cursor-pointer hover:bg-stone-800 hover:border-editorial-accent/50 transition-colors group">
                        <div className="relative flex items-center">
                            <input type="radio" name="style" value="Signature" className="peer appearance-none h-5 w-5 border border-stone-500 rounded-full bg-stone-900 checked:bg-editorial-accent checked:border-editorial-accent focus:ring-0 transition-all" />
                            <div className="absolute w-2 h-2 rounded-full bg-stone-900 opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity" />
                        </div>
                        <span className="text-sm text-stone-300 group-hover:text-white transition-colors">Signature (Comfort)</span>
                    </label>
                    <label className="flex items-center space-x-3 border border-white/10 p-4 rounded-lg cursor-pointer hover:bg-stone-800 hover:border-editorial-accent/50 transition-colors group">
                        <div className="relative flex items-center">
                            <input type="radio" name="style" value="Luxe" className="peer appearance-none h-5 w-5 border border-stone-500 rounded-full bg-stone-900 checked:bg-editorial-accent checked:border-editorial-accent focus:ring-0 transition-all" />
                            <div className="absolute w-2 h-2 rounded-full bg-stone-900 opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity" />
                        </div>
                        <span className="text-sm text-stone-300 group-hover:text-white transition-colors">Luxe (Premium)</span>
                    </label>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold tracking-widest uppercase text-stone-400 mb-3">Any specific interests?</label>
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    defaultValue={getInitialMessage()}
                    className="w-full px-5 py-4 bg-stone-900 rounded-lg border border-white/10 text-white placeholder-stone-600 focus:border-editorial-accent focus:ring-1 focus:ring-editorial-accent outline-none transition-all"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-editorial-accent text-white py-4 rounded-lg font-bold tracking-widest uppercase hover:bg-editorial-accent/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(209,10,10,0.3)] hover:shadow-[0_0_30px_rgba(209,10,10,0.5)]"
            >
                {isSubmitting ? 'Designing...' : 'Design My Journey'}
            </button>

            {/* Hidden inputs to track source */}
            <input type="hidden" name="journey_slug" value={initialJourney || ''} />
            <input type="hidden" name="service_slug" value={initialService || ''} />

            <p className="text-center text-xs text-stone-600">
                By submitting, you agree to receive a WhatsApp message from our team.
            </p>
        </form>
    );
}
