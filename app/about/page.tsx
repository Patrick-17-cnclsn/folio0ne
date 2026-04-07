import ContactSection from "@/components/content/sections/contact-section";
import ServicesSection from "@/components/content/sections/services";
import ToolsSection from "@/components/content/sections/tools-section";
import { Metadata } from "next";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `À propos - ${CONFIG.name}`,
  description: CONFIG.bioShort,
  openGraph: {
    images: ["/seo.jpg"]
  }
};
export default function Page() {
  return (
    <>
      <section>
        <header className="mb-10 grid gap-4 space-y-4 pb-8">
          <div>
            <h1 className="mb-6 flex flex-col text-4xl font-semibold">
              <span>Bonjour ! Je suis {CONFIG.name}</span>{" "}
              <span className="text-primary">{CONFIG.role}</span>
            </h1>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">{CONFIG.bioLong}</p>
            </div>
          </div>
        </header>
      </section>
      <ServicesSection />
      <ToolsSection />
      <ContactSection />
    </>
  );
}
