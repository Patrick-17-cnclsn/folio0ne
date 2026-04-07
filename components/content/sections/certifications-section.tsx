import { AwardIcon, CalendarIcon, FileTextIcon } from "lucide-react";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

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

export default async function CertificationsSection() {
  const certifications = await getCertifications();

  return (
    <section>
      <header className="flex items-center justify-between pb-8">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Certifications</h2>
          <p className="mt-2 text-muted-foreground">
            Mes accomplissements et reconnaissances professionnelles.
          </p>
        </div>
        <Link 
          href="/certifications" 
          className="text-sm font-medium text-primary hover:underline"
        >
          Voir tout
        </Link>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <Link
            key={cert.id}
            href={cert.url && cert.url !== "#" ? cert.url : `/certifications`}
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
  );
}
