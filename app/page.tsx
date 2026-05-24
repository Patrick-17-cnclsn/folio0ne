import BlogsSection from "@/components/content/sections/blogs-section";
import ContactSection from "@/components/content/sections/contact-section";
import HeroSection from "@/components/content/sections/hero";
import SelectedProjectsSection from "@/components/content/sections/selected-works";

export default function Page() {
  return (
    <>
      <HeroSection />
      <SelectedProjectsSection />
      <BlogsSection />
      <ContactSection />
    </>
  );
}
