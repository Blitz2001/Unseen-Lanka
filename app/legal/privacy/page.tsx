import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
    title: 'Privacy Policy',
    noIndex: true,
});

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-stone">
            <h1>Privacy Policy</h1>
            <p>Your privacy is non-negotiable.</p>

            <h3>Data Collection</h3>
            <p>We collect your name, email, and travel preferences solely for the purpose of planning your trip. We do not sell data.</p>

            <h3>Third Parties</h3>
            <p>We share necessary details (name, passport number) with hotels and government authorities (for entry tickets) as required by law.</p>

            <h3>Security</h3>
            <p>Payments are handled by PayHere. We do not store credit card details.</p>
        </div>
    );
}
