import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

// Define standard components if needed (e.g., custom Image, Callout)
const components = {
    // Add custom components here
};

const rootDirectory = path.join(process.cwd(), 'content');

export type JourneyFrontmatter = {
    title: string;
    seoTitle: string;
    description: string;
    duration?: string;
    price_explorer?: number;
    price_signature?: number;
    price_luxe?: number;
    images?: string[];
    themes?: string[];
    featured?: boolean;
};

export type DestinationFrontmatter = {
    title: string;
    seoTitle?: string;
    description: string;
    region?: string;
    bestFor?: string[];
    images?: string[];
};

export async function getJourney(slug: string) {
    const filePath = path.join(rootDirectory, 'journeys', `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX<JourneyFrontmatter>({
        source,
        components,
        options: { parseFrontmatter: true },
    });

    return { slug, content, frontmatter };
}

export async function getDestination(slug: string) {
    const filePath = path.join(rootDirectory, 'destinations', `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX<DestinationFrontmatter>({
        source,
        components,
        options: { parseFrontmatter: true },
    });

    return { slug, content, frontmatter };
}

export function getAllSlugs(dir: 'journeys' | 'destinations') {
    const contentDir = path.join(rootDirectory, dir);
    if (!fs.existsSync(contentDir)) return [];

    const files = fs.readdirSync(contentDir);
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace('.mdx', ''));
}
