'use client'

import { useState } from 'react';
import { submitInquiry } from '@/app/actions';

export default function InquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);

        // Client-side validation could go here

        const result = await submitInquiry(formData);

        if (result.success && result.redirectUrl) {
            // Open WhatsApp in new tab or redirect
            window.location.href = result.redirectUrl;
        } else {
            alert("Something went wrong. Please try again or message us directly.");
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                    <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                    <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all" />
                </div>
            </div>

            <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-stone-700 mb-2">WhatsApp Number</label>
                <input type="tel" name="whatsapp" id="whatsapp" required placeholder="+1 ..." className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="month" className="block text-sm font-medium text-stone-700 mb-2">Travel Month</label>
                    <select name="month" id="month" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all bg-white">
                        <option>January 2026</option>
                        <option>February 2026</option>
                        <option>March 2026</option>
                        <option>April 2026</option>
                        <option>May 2026</option>
                        <option>Later in 2026</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pax" className="block text-sm font-medium text-stone-700 mb-2">Travelers</label>
                    <select name="pax" id="pax" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all bg-white">
                        <option>2 (Couple)</option>
                        <option>1 (Solo)</option>
                        <option>3-4 (Family/Group)</option>
                        <option>5+ (Large Group)</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Travel Style</label>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    <label className="flex items-center space-x-2 border p-3 rounded cursor-pointer hover:bg-stone-50">
                        <input type="radio" name="style" value="Explorer" className="text-stone-900 focus:ring-stone-900" defaultChecked />
                        <span>Explorer (Active)</span>
                    </label>
                    <label className="flex items-center space-x-2 border p-3 rounded cursor-pointer hover:bg-stone-50">
                        <input type="radio" name="style" value="Signature" className="text-stone-900 focus:ring-stone-900" />
                        <span>Signature (Comfort)</span>
                    </label>
                    <label className="flex items-center space-x-2 border p-3 rounded cursor-pointer hover:bg-stone-50">
                        <input type="radio" name="style" value="Luxe" className="text-stone-900 focus:ring-stone-900" />
                        <span>Luxe (Premium)</span>
                    </label>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Any specific interests? (Optional)</label>
                <textarea name="message" id="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all"></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-stone-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-black transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Designing...' : 'Design My Journey'}
            </button>

            <p className="text-center text-xs text-stone-500">
                By submitting, you agree to receive a WhatsApp message from our team.
            </p>
        </form>
    );
}
