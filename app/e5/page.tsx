import { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { Project } from "@/type/project";
import BackButton from "@/components/back-button";
import ContactSection from "@/components/content/sections/contact-section";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getProjects(): Promise<Project[]> {
  const data = await fs.readFile(path.join(process.cwd(), "data/projects.json"));
  return JSON.parse(data.toString());
}

export const metadata: Metadata = {
  title: "Épreuve E5 — BTS SIO",
  description: "Présentation des projets professionnels pour l'épreuve E5 du BTS SIO."
};

const TECH_COLORS: Record<string, string> = {
  "C#": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  ".NET": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "SQL Server": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "React Native": "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  Expo: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  Firebase: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
};

function getTechClass(tech: string) {
  for (const key of Object.keys(TECH_COLORS)) {
    if (tech.includes(key)) return TECH_COLORS[key];
  }
  return "bg-muted text-muted-foreground";
}

function parseTechs(services: string): string[] {
  return services
    .split(/[,&]/)
    .map((t) => t.trim())
    .filter(Boolean);
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const techs = parseTechs(project.services);
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border shadow-sm">
      {/* Header bleu foncé */}
      <div className="bg-[#043c85] px-6 py-5">
        <span className="text-xs font-semibold tracking-widest text-blue-200 uppercase">
          Projet {index + 1}
        </span>
        <h2 className="mt-1 text-xl font-bold text-white">{project.title}</h2>
      </div>

      {/* Corps */}
      <div className="flex flex-1 flex-col divide-y">
        {/* Infos */}
        <div className="grid grid-cols-2 gap-4 px-6 py-4 text-sm sm:grid-cols-3">
          <div>
            <p className="text-muted-foreground mb-1 text-xs tracking-wide uppercase">Date</p>
            <p className="font-medium">{project.date}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-xs tracking-wide uppercase">Client</p>
            <p className="font-medium">{project.client}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-muted-foreground mb-1 text-xs tracking-wide uppercase">Domaine</p>
            <p className="font-medium">{project.services.split(",")[0]}</p>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 py-5">
          <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">
            Description
          </p>
          <article
            className="[&_li]:text-muted-foreground [&_p]:text-muted-foreground text-sm leading-relaxed [&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:font-semibold [&_li]:ml-4 [&_li]:list-disc"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>

        {/* Technologies */}
        <div className="px-6 py-5">
          <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${getTechClass(tech)}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Lien */}
        {project.preview_url && project.preview_url !== "#" && (
          <div className="mt-auto px-6 py-4">
            <Button size="sm" className="bg-[#043c85] text-white hover:bg-[#032d66]" asChild>
              <Link href={project.preview_url} target="_blank">
                Voir le dépôt <ExternalLinkIcon className="ml-1 size-3" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function E5Page() {
  const projects = await getProjects();
  const e5Projects = projects.filter((p: Project) => p.id === 5 || p.id === 4);

  return (
    <>
      <section className="space-y-8">
        <BackButton url="/projects" />

        {/* En-tête */}
        <header className="space-y-3">
          <div className="inline-block rounded-full bg-[#043c85]/10 px-4 py-1 text-xs font-bold tracking-widest text-[#043c85] uppercase dark:bg-[#043c85]/20 dark:text-blue-300">
            BTS SIO — Épreuve E5
          </div>
          <h1 className="text-3xl font-bold lg:text-4xl">Présentation des Projets</h1>
          <p className="text-muted-foreground max-w-xl">
            Deux réalisations professionnelles développées dans le cadre du BTS SIO : une
            application mobile de prise de notes en React Native et un système d'intervention
            matériel en C#.
          </p>
        </header>

        {/* Projets */}
        <div className="grid gap-8 lg:grid-cols-2">
          {e5Projects.map((project: Project, i: number) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
      <hr />
      <ContactSection />
    </>
  );
}
