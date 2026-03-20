import { Building2Icon, FolderCodeIcon, PaletteIcon, LucideIcon } from "lucide-react";
import ServiceListItem from "../service-list-item";
import { Service } from "@/type/service";
import { CONFIG } from "@/lib/config";

const iconMap: Record<string, LucideIcon> = {
  PaletteIcon,
  FolderCodeIcon,
  Building2Icon
};

export default function ServicesSection() {
  const services: Service[] = CONFIG.services.map((s) => ({
    ...s,
    icon: iconMap[s.icon] || FolderCodeIcon
  }));

  return (
    <section>
      <header className="pb-8">
        <h2 className="text-2xl font-medium">Services</h2>
      </header>
      <div className="space-y-6">
        {services.map((service, key) => (
          <ServiceListItem key={key} service={service} />
        ))}
      </div>
    </section>
  );
}
