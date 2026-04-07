import { MailIcon } from "lucide-react";
import Link from "next/link";
import { CONFIG } from "@/lib/config";

export default function ContactSection() {
  return (
    <section className="rounded-lg border p-6 !pb-6">
      <header className="space-y-2 pb-8">
        <h2 className="text-2xl font-medium">Des questions ?</h2>
        <p className="text-muted-foreground">
          Je suis toujours ravi de collaborer sur des projets innovants et passionnants !
        </p>
      </header>
      <div className="grid space-y-6 lg:grid-cols-2 lg:space-y-0">
        <div className="flex gap-4">
          <span className="border-primary/10 bg-primary/10 flex size-14 items-center justify-center rounded-full border">
            <MailIcon className="size-5" />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">E-mail</span>
            <Link href={`mailto:${CONFIG.email}`}>{CONFIG.email}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
