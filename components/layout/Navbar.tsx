"use client";

import { BellIcon, HeartIcon, UserIcon } from "@/components/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { navbarLinks } from "@/data/navigation";
import { applyBrandTheme, brandThemes, getStoredBrandThemeName } from "@/lib/brandThemes";
import { cn, isRouteActive } from "@/lib/utils";
import { Button, IconButton, NavLink } from "@/shared";
import { Check, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

function NavbarThemePicker() {
  const [open, setOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(getStoredBrandThemeName);
  const pickerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredBrandThemeName();

    setSelectedTheme(storedTheme);
    applyBrandTheme(storedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!pickerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const activeTheme = useMemo(
    () => brandThemes.find((theme) => theme.name === selectedTheme) ?? brandThemes[0],
    [selectedTheme],
  );

  return (
    <div ref={pickerRef} className="relative">
      <button
        type="button"
        aria-label="Theme сонгох"
        aria-expanded={open}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2"
        onClick={() => setOpen((value) => !value)}
      >
        <Palette className="h-4 w-4" />
        {mounted && (
          <span
              className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full border border-white"
              style={{ backgroundColor: activeTheme.palette[500] }}
            />
          )}
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-[120] w-[252px] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_12px_32px_rgba(16,24,40,.14)]">
          <div className="mb-2 flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold text-gray-900">Theme</div>
              <div className="text-[11px] text-gray-500">{activeTheme.label}</div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-2" role="radiogroup" aria-label="Brand theme picker">
            {brandThemes.map((theme) => {
              const isSelected = theme.name === selectedTheme;

              return (
                <button
                  key={theme.name}
                  type="button"
                  title={theme.label}
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`${theme.label} theme сонгох`}
                  className={cn(
                    "relative flex h-8 w-8 items-center justify-center rounded-full border transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2",
                    isSelected
                      ? "border-primary-500 ring-2 ring-primary-100"
                      : "border-gray-200 hover:border-gray-300",
                  )}
                  style={{ backgroundColor: theme.palette[500] }}
                  onClick={() => {
                    applyBrandTheme(theme.name);
                    setSelectedTheme(theme.name);
                    setOpen(false);
                  }}
                >
                  {isSelected && (
                    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-sm">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

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

          <NavbarThemePicker />
        </div>
      </div>
    </nav>
  );
}