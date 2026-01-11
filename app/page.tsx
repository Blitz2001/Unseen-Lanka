import Hero from '@/components/home/Hero';
import TrustStack from '@/components/home/TrustStack';
import SignatureJourneys from '@/components/home/SignatureJourneys';
import TravelStyles from '@/components/home/TravelStyles';
import DestinationsGrid from '@/components/home/DestinationsGrid';
import SocialProof from '@/components/home/SocialProof';
import HowItWorks from '@/components/home/HowItWorks';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStack />
      <SignatureJourneys />
      <TravelStyles />
      <DestinationsGrid />
      <SocialProof />
      <HowItWorks />
      <CTASection />
    </>
  );
}
