"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellIcon, HeartIcon, UserIcon } from "@/components/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { navbarLinks } from "@/data/navigation";
import { isRouteActive } from "@/lib/utils";
import { Button, IconButton, NavLink } from "@/shared/components";

export default function Navbar() {
  const pathname = usePathname();
  const { isAuthenticated, isReady } = useAuth();
  const showAuthenticatedActions = isReady && isAuthenticated;

  return (
    <nav className="sticky top-0 z-[100] border-b border-gray-200 bg-white shadow-[0_1px_4px_rgba(16,24,40,.06)]">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-4 px-4 md:gap-8 md:px-8">
        <div className="flex min-w-0 items-center gap-2 md:gap-8">
          <Link href="/" className="shrink-0 text-[22px] font-bold tracking-[1px] text-primary-600">
            MONCAR
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navbarLinks.map((item) => (
              <NavLink key={item.href} active={isRouteActive(pathname, item.href)} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <IconButton href="/saved" icon={<HeartIcon className="text-red-500" />} label="Хадгалсан машинууд" />
          <Button href="/post" size="sm" variant="white">
            Зар оруулах
          </Button>
          {showAuthenticatedActions ? (
            <>
              <IconButton href="/notifications" icon={<BellIcon className="text-yellow-500" />} label="Мэдэгдлүүд" />
              <IconButton href="/profile" icon={<UserIcon className="text-primary-500" />} label="Миний профайл" />
            </>
          ) : (
            <Button href="/auth" size="sm" variant="white">
              Нэвтрэх
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
