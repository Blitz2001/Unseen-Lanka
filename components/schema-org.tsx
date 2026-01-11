export default function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'Unseen Lanka',

        url: 'https://www.unseenlanka.com',
        logo: 'https://www.unseenlanka.com/logo.png',
        description: 'Experience Architect for Untrending Sri Lanka.',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'LK',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            areaServed: 'LK',
            availableLanguage: ['English', 'German', 'Russian'],
        },
        sameAs: [
            'https://www.instagram.com/unseenlanka',
            'https://www.facebook.com/unseenlanka',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
