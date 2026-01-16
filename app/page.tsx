import HeroSection from '@/components/editorial/HeroSection';
import FeatureGrid from '@/components/editorial/FeatureGrid';
import SignatureJourneysEditorial from '@/components/editorial/SignatureJourneysEditorial';
import Footer from '@/components/Footer';
import SnapSection from '@/components/ui/SnapSection';

export default function Home() {
  return (
    <main id="root-scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <HeroSection />
      <FeatureGrid />
      <SignatureJourneysEditorial />

      {/* Footer as a full-screen snap section for a clean finish */}
      <SnapSection className="min-h-screen bg-stone-950 text-editorial-cream flex flex-col justify-center">
        <Footer />
      </SnapSection>
    </main>
  );
}
