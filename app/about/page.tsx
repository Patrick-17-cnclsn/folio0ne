import Image from "next/image";
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
        <header className="mb-10 grid gap-4 space-y-4 pb-8 lg:grid-cols-3">
          <div className="order-2 col-span-2 lg:order-1">
            <h1 className="mb-6 flex flex-col text-4xl font-semibold">
              <span>Bonjour ! Je suis {CONFIG.name}</span>{" "}
              <span className="text-primary">{CONFIG.role}</span>
            </h1>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">{CONFIG.bioLong}</p>
            </div>
          </div>
          <figure className="order-1 lg:order-2">
            <div className="bg-muted flex h-[300px] w-full items-center justify-center rounded-lg lg:w-[450px]">
              <span className="text-muted-foreground italic">Ajoutez votre photo ici</span>
            </div>
          </figure>
        </header>
      </section>
      <ServicesSection />
      <ToolsSection />
      <ContactSection />
    </>
  );
}
