import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function DownloadButton() {
  return (
    <div className="fixed end-10 bottom-6">
      <Button asChild className="bg-black font-bold dark:bg-white dark:text-black">
        <Link href="https://shadcnuikit.com/template/neofolio-portfolio-template" target="_blank">
          Get Template <ExternalLinkIcon />
        </Link>
      </Button>
    </div>
  );
}
