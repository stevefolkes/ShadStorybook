"use client"

import * as React from "react"
import {
  Bell,
  Calendar,
  House,
  Notebook,
  Plane,
  Plus,
  Settings,
  UserRound,
  UsersRound,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NavUser } from "@/components/nav-user"
import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  url: string
  icon: React.ElementType
  isActive?: boolean
  badge?: { label: string; variant?: React.ComponentProps<typeof Badge>["variant"] }
}

type NavGroup = {
  label: string
  items: NavItem[]
}

const data = {
  user: {
    name: "Bob Bobbington",
    email: "bob@example.com",
    avatar: "",
  },
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  topNav: [
    { title: "Home", url: "#", icon: House },
    { title: "People", url: "#", icon: UsersRound, isActive: true },
    { title: "Who's away", url: "#", icon: Calendar },
  ] satisfies NavItem[],
  groups: [
    {
      label: "My stuff",
      items: [
        { title: "My time off", url: "#", icon: Plane },
        {
          title: "My profile",
          url: "#",
          icon: UserRound,
          badge: { label: "Incomplete", variant: "grey" },
        },
        { title: "Notifications", url: "#", icon: Bell },
      ],
    },
    {
      label: "My organisation",
      items: [
        { title: "Reports", url: "#", icon: Notebook },
        { title: "Account settings", url: "#", icon: Settings },
      ],
    },
  ] satisfies NavGroup[],
}

function NavItems({ items }: { items: NavItem[] }) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
          {item.badge && (
            <SidebarMenuBadge>
              <Badge variant={item.badge.variant ?? "grey"}>{item.badge.label}</Badge>
            </SidebarMenuBadge>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <NavItems items={data.topNav} />
          </SidebarGroupContent>
        </SidebarGroup>

        {data.groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <NavItems items={group.items} />
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarGroup>
          <SidebarGroupContent>
            <Button className="w-full" variant="default">
              <Plus />
              Book time off
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
