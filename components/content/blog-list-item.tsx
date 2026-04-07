import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/type/blog";

export default function BlogListItem({ blog }: { blog: Blog }) {
  return (
    <div className="grid items-start gap-4 lg:grid-cols-2 lg:gap-8">
      <div className="bg-muted relative aspect-video w-full overflow-hidden rounded-xl border lg:aspect-square">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-contain transition-transform hover:scale-105"
        />
      </div>
      <div className="flex grow flex-col space-y-4 leading-none lg:py-4">
        <span className="text-muted-foreground text-sm">{blog.date}</span>
        <h4 className="text-2xl leading-relaxed font-medium">{blog.title}</h4>
        <hr />
        <div>
          <Button variant="link" className="h-auto px-0! py-0!" asChild>
            <Link href={blog.url || `/blog/${blog.slug}`} target={blog.url ? "_blank" : undefined}>
              <ChevronRightIcon /> Lire plus
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
