import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
    title: 'About Unseen Lanka | Experience Architects',
    description: 'We are not just a travel agency. We are logistic experts and storytellers designing the perfect Sri Lankan journey.',
});

export default function AboutPage() {
    return (
        <article className="min-h-screen bg-white pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8">Not an Algorithm.<br />A Team.</h1>

                <div className="prose prose-lg prose-stone">
                    <p className="lead text-xl text-stone-600 mb-12">
                        Most travel sites are just search engines. They give you options, but they don't give you answers.
                        Unseen Lanka was built to be the antidote to "Too Much Information".
                    </p>

                    <h2>Who We Are</h2>
                    <p>
                        We are <strong>Avawia Tours</strong>, a registered Destination Management Company (SLTDA Reg No: SLTDA/SQ/2026/001).
                        But to our travelers, we are Unseen Lanka.
                    </p>
                    <p>
                        We don't sell "packages". We design flows. We understand that a 6-hour drive is too long for a toddler.
                        We know which leopard safari has fewer jeeps. We know where to find the best hopper in Jaffna.
                    </p>

                    <div className="my-12 p-8 bg-stone-50 rounded-xl border border-stone-100">
                        <h3 className="font-heading font-bold text-2xl mb-4">The "Unseen" Promise</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-stone-900 font-bold">01.</span>
                                <span><strong>No Kickbacks.</strong> We don't stop at spice gardens or gem shops unless you ask.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-stone-900 font-bold">02.</span>
                                <span><strong>Fair Wages.</strong> Our chauffeur-guides are paid above market rates because they are the MVP of your trip.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-stone-900 font-bold">03.</span>
                                <span><strong>Precision.</strong> We plan logistics with military precision so you can have total freedom.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    );
}
