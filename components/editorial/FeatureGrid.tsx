import Image from 'next/image';
import Link from 'next/link';

interface FeatureItemProps {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
    reverse?: boolean;
    link: string;
}

const FeatureItem = ({ title, subtitle, description, images, reverse = false, link }: FeatureItemProps) => {
    return (
        <div className={`flex flex-col md:flex-row h-full w-full ${reverse ? 'md:flex-row-reverse' : ''} bg-editorial-cream snap-start min-h-screen`}>
            {/* Text Side */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative">

                <h3 className="font-playfair text-4xl md:text-6xl text-editorial-text mb-6 uppercase leading-tight animate-in slide-in-from-bottom-8 fade-in duration-700">
                    {title}
                </h3>
                <span className="text-editorial-accent tracking-[0.2em] uppercase text-sm font-bold mb-4 block animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100">
                    {subtitle}
                </span>
                <p className="text-stone-600 font-light text-lg leading-relaxed mb-8 max-w-md animate-in slide-in-from-bottom-4 fade-in duration-700 delay-200">
                    {description}
                </p>
                <Link
                    href={link}
                    className="inline-block border border-editorial-text px-8 py-3 text-sm tracking-widest uppercase hover:bg-editorial-text hover:text-white transition-colors w-fit animate-in fade-in duration-700 delay-300"
                >
                    Discover More
                </Link>
            </div>

            {/* Image Mosaic Side */}
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 p-2 h-[50vh] md:h-screen">
                {/* Main Large Image */}
                <div className="row-span-2 relative overflow-hidden group">
                    <Image
                        src={images[0]}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                {/* Secondary Images */}
                <div className="relative overflow-hidden group">
                    <Image
                        src={images[1] || images[0]}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="relative overflow-hidden group">
                    <Image
                        src={images[2] || images[0]}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default function FeatureGrid() {
    return (
        <section className="bg-editorial-cream">
            <FeatureItem
                title="Sigiriya"
                subtitle="The Lion Rock Citadel"
                description="Ascend the ancient fortress in the sky. Marvel at the preserved frescoes, the mirror wall, and the water gardens that defy modern engineering."
                images={[
                    "/images/sigiriya-real.png",
                    "/images/sigiriya-real.png",
                    "/images/sigiriya-real.png"
                ]}
                link="/destinations/sigiriya"
            />
            <FeatureItem
                title="Galle Fort"
                subtitle="Colonial Charm & Coast"
                description="Wander through cobblestone streets lined with Dutch-colonial buildings, boutique shops, and cafes. A living heritage site surrounded by the azure Indian Ocean."
                images={[
                    "/images/galle-real.png",
                    "/images/galle-real.png",
                    "/images/galle-real.png"
                ]}
                reverse={true}
                link="/destinations/galle"
            />
            <FeatureItem
                title="Ella"
                subtitle="Misty Hills & Tea"
                description="Ride the scenic train through the clouds. Hike to Little Adam's Peak or simply unwind in a boutique tea bungalow overlooking the gap."
                images={[
                    "/images/ella-real.png",
                    "/images/ella-real.png",
                    "/images/ella-real.png"
                ]}
                link="/destinations/ella"
            />
        </section>
    );
}
