import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unseenlanka.com';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: 'Unseen Lanka | Curated Journeys Beyond the Obvious',
        template: '%s | Unseen Lanka',
    },
    description: 'Experience Architect for Untrending Sri Lanka. Mid-luxury private tours, signature journeys, and decision-free travel planning for families and explorers.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: BASE_URL,
        siteName: 'Unseen Lanka',
        title: 'Unseen Lanka | Curated Journeys Beyond the Obvious',
        description: 'Experience Architect for Untrending Sri Lanka. Mid-luxury private tours, signature journeys, and decision-free travel planning for families and explorers.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Unseen Lanka - Curated Journeys',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Unseen Lanka | Curated Journeys Beyond the Obvious',
        description: 'Experience Architect for Untrending Sri Lanka.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export function constructMetadata({
    title,
    description,
    image = '/og-image.jpg',
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        ...defaultMetadata,
        title: title ? {
            default: title,
            template: '%s | Unseen Lanka',
        } : defaultMetadata.title,
        description: description || defaultMetadata.description,
        openGraph: {
            ...defaultMetadata.openGraph,
            title: title || defaultMetadata.openGraph?.title,
            description: description || defaultMetadata.description,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            ...defaultMetadata.twitter,
            title: title || defaultMetadata.twitter?.title,
            description: description || defaultMetadata.description,
            images: [image],
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
