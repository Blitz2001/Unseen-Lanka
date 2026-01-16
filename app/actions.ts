'use server'

import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';
import InquiryConfirmationEmail from '@/components/emails/InquiryConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitInquiry(formData: FormData) {
    const rawFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        whatsapp: formData.get('whatsapp') as string,
        month: formData.get('month') as string,
        pax: formData.get('pax') as string,
        style: formData.get('style') as string,
        message: formData.get('message') as string,
        // New fields
        duration: formData.get('duration') as string,
        budget: formData.get('budget') as string,
        interests: formData.getAll('interests') as string[],
        accommodation: formData.getAll('accommodation') as string[],
        mustVisit: formData.get('must_visit') as string,
    };

    const journeySlug = formData.get('journey_slug') as string | null;
    let error;

    // Construct extended message for DB storage (to avoid schema change)
    let extendedMessage = rawFormData.message;
    if (rawFormData.duration) extendedMessage += `\n\n[Duration: ${rawFormData.duration} days]`;
    if (rawFormData.budget) extendedMessage += `\n[Budget: ${rawFormData.budget}]`;
    if (rawFormData.interests.length > 0) extendedMessage += `\n[Interests: ${rawFormData.interests.join(', ')}]`;
    if (rawFormData.accommodation.length > 0) extendedMessage += `\n[Accommodation: ${rawFormData.accommodation.join(', ')}]`;
    if (rawFormData.mustVisit) extendedMessage += `\n[Must Visit: ${rawFormData.mustVisit}]`;

    // 1. Save to Supabase
    if (journeySlug && journeySlug.trim() !== '') {
        const result = await supabase
            .from('journey_requests')
            .insert([
                {
                    name: rawFormData.name,
                    email: rawFormData.email,
                    whatsapp: rawFormData.whatsapp,
                    month: rawFormData.month,
                    pax: rawFormData.pax,
                    journey_slug: journeySlug,
                    message: extendedMessage,
                },
            ]);
        error = result.error;
    } else {
        const result = await supabase
            .from('leads')
            .insert([
                {
                    name: rawFormData.name,
                    email: rawFormData.email,
                    whatsapp: rawFormData.whatsapp,
                    month: rawFormData.month,
                    pax: rawFormData.pax,
                    style: rawFormData.style,
                    message: extendedMessage,
                },
            ]);
        error = result.error;
    }

    if (error) {
        console.error('Supabase Error:', error);
        return { success: false, message: 'Database error' };
    }

    // 2. Send Confirmation Email via Resend
    try {
        const emailResult = await resend.emails.send({
            from: 'Unseen Lanka <onboarding@resend.dev>', // TODO: Update with your verified domain
            to: [rawFormData.email],
            subject: 'We received your inquiry - Unseen Lanka',
            react: InquiryConfirmationEmail({
                name: rawFormData.name,
                journeyName: journeySlug ? journeySlug : undefined,
                travelDate: rawFormData.month,
                travelers: rawFormData.pax,
                style: rawFormData.style,
                // Pass new fields to email
                duration: rawFormData.duration,
                budget: rawFormData.budget,
                interests: rawFormData.interests,
                accommodation: rawFormData.accommodation,
                mustVisit: rawFormData.mustVisit,
            }),
        });

        if (emailResult.error) {
            console.error('Resend Error:', emailResult.error);
            // We don't fail the whole request if email fails, but we should log it
        }
    } catch (e) {
        console.error('Email Sending Failed:', e);
    }

    // 3. Return success for client-side redirect
    return { success: true, redirectUrl: '/thank-you' };
}
