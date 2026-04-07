"use client";

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import {
  BriefcaseBusinessIcon,
  ExternalLinkIcon,
  HomeIcon,
  RssIcon,
  SquareUserRoundIcon,
  UserPenIcon
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

import { NavGroup } from "@/type/navigation";
import { Button } from "@/components/ui/button";

import { CONFIG } from "@/lib/config";

const navLinks: NavGroup[] = [
  {
    title: "",
    url: "#",
    items: [
      {
        title: "Accueil",
        url: "/",
        icon: HomeIcon
      },
      {
        title: "Projets",
        url: "/projects",
        icon: BriefcaseBusinessIcon
      },
      {
        title: "À propos",
        url: "/about",
        icon: SquareUserRoundIcon
      },
      {
        title: "Blog",
        url: "/blog",
        icon: RssIcon
      },
      {
        title: "Contact",
        url: "/contact",
        icon: UserPenIcon
      }
    ]
  },
  {
    title: "Réseaux Sociaux",
    url: "#",
    items: [
      {
        title: "Github",
        url: CONFIG.socials.github,
        icon: ExternalLinkIcon,
        target: "_blank"
      }
    ]
  }
];

export default function Navigation() {
  const pathname = usePathname();
  const replacedPathname = pathname.split("/").filter(Boolean)[0];

  return (
    <Sidebar className="border-e-0! p-3">
      <SidebarHeader className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center space-x-4">
            <div className="flex flex-col gap-1 leading-none">
              <span className="font-semibold">{CONFIG.name}</span>
              <span className="text-muted-foreground text-sm">{CONFIG.role}</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="space-y-4 px-0">
          {navLinks.map((item, key) => (
            <React.Fragment key={key}>
              {item.title ? (
                <SidebarGroupLabel className="tracking-widest uppercase opacity-70">
                  {item.title}
                </SidebarGroupLabel>
              ) : null}
              <SidebarGroupContent>
                <SidebarMenu>
                  {item?.items &&
                    item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className="data-[active=true]:bg-background h-auto rounded-2xl px-3 text-base data-[active=true]:!font-semibold"
                          isActive={
                            (item.url === "/" && replacedPathname === undefined) ||
                            item.url.replace("/", "") === replacedPathname
                          }>
                          <Link href={item.url} target={item.target} className="gap-3">
                            {item.icon && <item.icon className="text-muted-foreground size-5!" />}
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </React.Fragment>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
