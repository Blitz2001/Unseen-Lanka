import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
    title: 'Terms & Conditions',
    noIndex: true,
});

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-stone">
            <h1>Terms & Conditions</h1>
            <p>Last Updated: January 2026</p>

            <h3>1. Booking & Payments</h3>
            <p>A 30% non-refundable deposit is required to secure your booking. The balance is due 30 days prior to arrival. Payments are processed securely via PayHere (LKR, USD, EUR accepted).</p>

            <h3>2. Cancellations</h3>
            <p>Cancellations made more than 30 days before arrival: Deposit is forfeited, but balance is fully refundable. Cancellations within 30 days are subject to varying charges depending on hotel policies.</p>

            <h3>3. Liability</h3>
            <p>Avawia Tours acts as an agent. We are not liable for delays, accidents, or disruptions caused by third parties, weather, or force majeure.</p>
        </div>
    );
}
