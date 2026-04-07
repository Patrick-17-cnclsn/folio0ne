import { Metadata } from "next";
import { AwardIcon, CalendarIcon, FileTextIcon } from "lucide-react";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import ContactSection from "@/components/content/sections/contact-section";
import { CONFIG } from "@/lib/config";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  url: string;
}

async function getCertifications(): Promise<Certification[]> {
  const filePath = path.join(process.cwd(), "data/certifications.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export const metadata: Metadata = {
  title: `Certifications - ${CONFIG.name}`,
  description: "Mes certifications et diplômes obtenus dans le domaine du développement informatique.",
  openGraph: {
    images: ["/seo.jpg"]
  }
};

export default async function Page() {
  const certifications = await getCertifications();

  return (
    <>
      <section>
        <header className="space-y-3 pb-8 lg:mb-10">
          <h1 className="text-3xl font-semibold text-foreground">Certifications</h1>
          <p className="text-muted-foreground">
            Mes accomplissements et reconnaissances professionnelles attestant de mes compétences techniques.
          </p>
        </header>
        
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <Link
              key={cert.id}
              href={cert.url && cert.url !== "#" ? cert.url : "#"}
              target={cert.url && cert.url !== "#" ? "_blank" : undefined}
              className="group relative flex flex-col gap-4 rounded-xl border bg-card p-6 transition-all hover:bg-muted/50 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {cert.url && cert.url.endsWith(".pdf") ? (
                    <FileTextIcon className="size-6" />
                  ) : (
                    <AwardIcon className="size-6" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <CalendarIcon className="size-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground/80">
                  {cert.issuer}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </div>

              {cert.url && cert.url !== "#" && (
                <span className="mt-2 inline-flex text-sm font-medium text-primary hover:underline">
                  Voir la certification
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
