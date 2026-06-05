"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface MobileNavItemProps {
  href: string;
  label: ReactNode;
  icon: ReactNode;
  active?: boolean;
}

export default function MobileNavItem({ active = false, href, icon, label }: MobileNavItemProps) {
  return (
    <Link
      href={href}
      className={cn("flex flex-col items-center gap-[3px] px-2 py-1 text-[11px] font-medium", active ? "text-primary-600" : "text-gray-400")}
    >
      {icon}
      {label}
    </Link>
  );
}
