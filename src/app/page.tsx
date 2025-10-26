import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import BrandsSlider from '@/components/landing/BrandsSlider';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BrandsSlider />
      <Footer />
    </div>
  );
}
