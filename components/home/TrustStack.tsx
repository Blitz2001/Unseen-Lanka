export default function TrustStack() {
    return (
        <section className="bg-stone-50 border-b border-stone-200 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center text-stone-600 text-sm md:text-base font-medium uppercase tracking-wide">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        SLTDA Registered
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Secure Payments (PayHere)
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                        24/7 Human Support
                    </div>
                </div>
            </div>
        </section>
    );
}
