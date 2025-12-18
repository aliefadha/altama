import BrandSection from "@/components/section/BrandSection";
import CareerSection from "@/components/section/CareerSection";
import CompanySection from "@/components/section/CompanySection";
import HeroSection from "@/components/section/HeroSection";
import IntegrationSection from "@/components/section/IntegrationSection";
import LocationSection from "@/components/section/LocationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <IntegrationSection />
      <BrandSection />
      <CareerSection />
      <LocationSection />
    </>
  );
}
