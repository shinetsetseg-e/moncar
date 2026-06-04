"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/data/navigation";
import { isRouteActive } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { UserIcon } from "@/components/icons";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[100] border-b border-gray-200 bg-white shadow-[0_1px_4px_rgba(16,24,40,.06)]">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-8 px-4 md:px-8">
        <Link href="/" className="shrink-0 text-[22px] font-bold tracking-[1px] text-primary-600">
          МОНКАР
        </Link>
        <div className="hidden flex-1 items-center gap-1 md:flex">
          {navbarLinks.map((item) => {
            const active = isRouteActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "whitespace-nowrap rounded-md px-[10px] py-1.5 text-sm font-medium transition-[color,background]",
                  active ? "font-semibold text-primary-600" : "text-gray-600 hover:bg-primary-50 hover:text-primary-600",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Button href="/auth" variant="ghost" size="sm">
            Нэвтрэх
          </Button>
          <Button href="/post" size="sm">
            + Зар оруулах
          </Button>
          <Button href="/profile" variant="ghost" size="sm" className="px-[10px] py-[7px]">
            <UserIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
}
