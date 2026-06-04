"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobileNavLinks } from "@/data/navigation";
import { HeartIcon, SearchIcon, UserIcon } from "@/components/icons";
import { isRouteActive } from "@/lib/utils";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[22px] w-[22px]">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-[22px] w-[22px]">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] block border-t border-gray-200 bg-white px-0 py-2 pb-3 shadow-[0_-2px_8px_rgba(16,24,40,.06)] md:hidden">
      <div className="flex items-center justify-around">
        {mobileNavLinks.map((item) => {
          const active = isRouteActive(pathname, item.href);
          const icon =
            item.href === "/"
              ? <HomeIcon />
              : item.href === "/search"
                ? <SearchIcon className="h-[22px] w-[22px]" />
                : item.href === "/post"
                  ? (
                    <div className="-mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 shadow-[0_4px_12px_rgba(22,119,255,.3)]">
                      <PlusIcon />
                    </div>
                  )
                  : item.href === "/saved"
                    ? <HeartIcon className="h-[22px] w-[22px]" />
                    : <UserIcon className="h-[22px] w-[22px]" />;

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
