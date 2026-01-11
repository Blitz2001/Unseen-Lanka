'use server'

import { redirect } from 'next/navigation';

export async function submitInquiry(formData: FormData) {
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        whatsapp: formData.get('whatsapp'),
        month: formData.get('month'),
        pax: formData.get('pax'),
        style: formData.get('style'),
        message: formData.get('message'),
    };

    // 1. Log to console (Phase 1 'Database')
    console.log('--- NEW LEAD ---');
    console.log(JSON.stringify(rawFormData, null, 2));
    console.log('----------------');

    // 2. Email Notification (TODO: Phase 1.5 with Resend)
    // await sendEmail(rawFormData);

    // 3. Construct WhatsApp Message
    const text = `Hi, I just planned my trip on Unseen Lanka!
  
Name: ${rawFormData.name}
Month: ${rawFormData.month}
Travelers: ${rawFormData.pax}
Style: ${rawFormData.style}
  `;

    const whatsappUrl = `https://wa.me/94770000000?text=${encodeURIComponent(text)}`;

    // 4. Return URL for client redirect (or redirect from here if full page)
    return { success: true, redirectUrl: whatsappUrl };
}
