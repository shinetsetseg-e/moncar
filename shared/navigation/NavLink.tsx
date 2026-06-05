"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}

export default function NavLink({ active = false, children, className, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap rounded-md px-[10px] py-1.5 text-sm font-medium transition-[color,background]",
        active ? "font-semibold text-primary-600" : "text-gray-600 hover:bg-primary-50 hover:text-primary-600",
        className,
      )}
    >
      {children}
    </Link>
  );
}
