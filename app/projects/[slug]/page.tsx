import BackButton from "@/components/back-button";
import ContactSection from "@/components/content/sections/contact-section";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { Project } from "@/type/project";
import Link from "next/link";
import ProjectListItem from "@/components/content/project-list-item";

async function getProjects() {
  const data = await fs.readFile(path.join(process.cwd(), "data/projects.json"));
  return JSON.parse(data.toString());
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const projects = await getProjects();
  const project = projects.find((b: Project) => b.slug === slug);

  return {
    title: `${project.title} - Neofolio`,
    description:
      "Portfolio de style tableau de bord. Construit avec Next.js, Tailwind CSS & shadcn/ui.",
    openGraph: {
      images: ["/seo.jpg"]
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const projects = await getProjects();
  const project = projects.find((b: Project) => b.slug === slug);

  return (
    <>
      <section className="space-y-6">
        <BackButton url="/projects" />
        <header className="space-y-6 pb-4">
          <h1 className="text-3xl font-semibold lg:text-4xl">{project.title}</h1>
          <div className="grid space-y-4 text-sm lg:grid-cols-3 lg:space-y-0">
            <div className="flex flex-col space-y-1">
              <span className="text-muted-foreground">Date</span>
              <span>{project.date}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-muted-foreground">Service</span>
              <span>{project.services}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-muted-foreground">Client</span>
              <span>{project.client}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href={project.preview_url} target="_blank">
                Aperçu <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
        </header>
        <div className="bg-muted relative aspect-square w-full overflow-hidden rounded-xl border lg:aspect-video">
          <Image src={project.cover_image} alt={project.title} fill className="object-contain" />
        </div>
        <article
          className="[&_li]:text-muted-foreground [&_p]:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </section>
      <hr />
      <section className="space-y-8">
        <header>
          <h4 className="text-2xl font-semibold">Plus de projets</h4>
        </header>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 2).map((project: Project) => (
            <ProjectListItem project={project} key={project.id} />
          ))}
        </div>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/projects">Tous les projets</Link>
        </Button>
      </section>
      <ContactSection />
    </>
  );
}
