import Link from "next/link";
import Image from "next/image";

import { Project } from "@/type/project";

export default function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block space-y-4">
      <figure>
        <Image
          src={project.cover_image}
          width={600}
          height={400}
          className="bg-muted aspect-video w-full rounded-lg object-contain"
          alt={project.title}
        />
      </figure>
      <div className="space-y-2">
        <h5 className="font-semibold">{project.title}</h5>
        <div className="text-muted-foreground text-sm">{project.date}</div>
      </div>
    </Link>
  );
}
