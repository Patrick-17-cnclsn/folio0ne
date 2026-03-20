import { Metadata } from "next";
import ContactFormSection from "@/components/content/sections/contact-form-section";
import ContactSection from "@/components/content/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact - Neofolio"
};

export default function Page() {
  return (
    <>
      <section>
        <header className="mb-10 space-y-3 pb-8">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="text-muted-foreground">
            Je suis toujours ravi de collaborer sur des projets innovants et passionnants !
          </p>
        </header>
        <ContactSection />
      </section>
      <ContactFormSection />
    </>
  );
}
