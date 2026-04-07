import Link from "next/link";
import Image from "next/image";

import { Project } from "@/type/project";

export default function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block space-y-4">
      <div className="bg-muted relative aspect-video w-full overflow-hidden rounded-xl border">
        <Image
          src={project.cover_image}
          alt={project.title}
          fill
          className="object-contain transition-transform hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h5 className="font-semibold">{project.title}</h5>
        <div className="text-muted-foreground text-sm">{project.date}</div>
      </div>
    </Link>
  );
}
