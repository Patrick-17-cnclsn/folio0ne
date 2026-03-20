import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export function CustomSidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className="absolute end-3 top-3 flex items-center gap-2 md:hidden">
      <MenuIcon />
    </Button>
  );
}
