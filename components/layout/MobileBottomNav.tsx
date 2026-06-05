"use client";

import { House, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartIcon, SearchIcon, UserIcon } from "@/components/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { isRouteActive } from "@/lib/utils";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { isAuthenticated, isReady } = useAuth();

  const mobileNavLinks = [
    { href: "/", label: "Нүүр" },
    { href: "/marketplace", label: "Market" },
    { href: "/post", label: "Зар" },
    { href: "/saved", label: "Saved" },
    isReady && isAuthenticated ? { href: "/profile", label: "Профайл" } : { href: "/auth", label: "Нэвтрэх" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] block border-t border-gray-200 bg-white px-0 py-2 pb-3 shadow-[0_-2px_8px_rgba(16,24,40,.06)] md:hidden">
      <div className="flex items-center justify-around">
        {mobileNavLinks.map((item) => {
          const active = isRouteActive(pathname, item.href);
          const icon =
            item.href === "/" ? (
              <House className="h-[22px] w-[22px]" strokeWidth={2} />
            ) : item.href === "/marketplace" ? (
              <SearchIcon className="h-[22px] w-[22px]" />
            ) : item.href === "/post" ? (
              <div className="-mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 shadow-[0_4px_12px_rgba(22,119,255,.3)]">
                <Plus className="h-[22px] w-[22px] text-white" strokeWidth={2.5} />
              </div>
            ) : item.href === "/saved" ? (
              <HeartIcon className="h-[22px] w-[22px]" />
            ) : (
              <UserIcon className="h-[22px] w-[22px]" />
            );

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-[3px] px-2 py-1 text-[11px] font-medium ${active ? "text-primary-600" : "text-gray-400"}`}
            >
              {icon}
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
