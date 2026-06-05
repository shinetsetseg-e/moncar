"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellIcon, HeartIcon, UserIcon } from "@/components/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import Button from "@/components/ui/Button";
import { navbarLinks } from "@/data/navigation";
import { isRouteActive } from "@/lib/utils";

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
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Button href="/saved" variant="white" size="sm" aria-label="Хадгалсан машинууд">
            <HeartIcon className="text-red-500" />
          </Button>
          <Button variant="white" href="/post" size="sm">
            Зар нэмэх
          </Button>
          {showAuthenticatedActions ? (
            <>
              <Button href="/notifications" variant="white" size="sm" aria-label="Мэдэгдлүүд">
                <BellIcon className="text-yellow-500" />
              </Button>
              <Button href="/profile" variant="white" size="sm" aria-label="Миний профайл">
                <UserIcon className="text-primary-500" />
              </Button>
            </>
          ) : (
            <Button href="/auth" variant="white" size="sm">
              Нэвтрэх
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
