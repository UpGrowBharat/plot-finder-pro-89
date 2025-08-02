
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertySlider from '@/components/PropertySlider';
import Categories from '@/components/Categories';
import PopularLocations from '@/components/PopularLocations';
import FAQ from '@/components/FAQ';
import ConsultantForm from '@/components/ConsultantForm';
import ClientReviews from '@/components/ClientReviews';
import Footer from '@/components/Footer';
import FloatingSalesWidget from '@/components/FloatingSalesWidget';
import Gallery from '@/components/Gallery';
import Community from '@/components/Community';
import WhyChoose from '@/components/WhyChoose';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PropertySlider />
      <Categories />
      <WhyChoose />
      <Gallery />
      <PopularLocations />
      <ConsultantForm />
      <ClientReviews />
      <Community />
      <FAQ />
      <Footer />
      <FloatingSalesWidget />
    </div>
  );
};

export default Index;
