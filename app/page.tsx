import BlogsSection from "@/components/content/sections/blogs-section";
import ContactSection from "@/components/content/sections/contact-section";
import HeroSection from "@/components/content/sections/hero";
import SelectedProjectsSection from "@/components/content/sections/selected-works";
import ServicesSection from "@/components/content/sections/services";
import CertificationsSection from "@/components/content/sections/certifications-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <SelectedProjectsSection />
      <ServicesSection />
      <CertificationsSection />
      <BlogsSection />
      <ContactSection />
    </>
  );
}
