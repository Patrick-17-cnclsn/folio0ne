import Link from "next/link";
import Image from "next/image";

import { Project } from "@/type/project";

export default function ProjectListItem({ project }: { project: Project }) {
  const stack = project.services ? project.services.split(",").map((s) => s.trim()) : [];

  return (
    <Link href={`/projects/${project.slug}`} className="block space-y-3">
      {project.cover_image && (
        <div className="bg-muted relative aspect-video w-full overflow-hidden rounded-xl border">
          <Image
            src={project.cover_image}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <div className="space-y-2">
        <h5 className="font-semibold">{project.title}</h5>
        <div className="text-muted-foreground text-sm">{project.date}</div>
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
