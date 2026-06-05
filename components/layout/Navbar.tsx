"use client";

import { BellIcon, HeartIcon, UserIcon } from "@/components/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { navbarLinks } from "@/data/navigation";
import { applyBrandTheme, brandThemes, getStoredBrandThemeName } from "@/lib/brandThemes";
import { cn, isRouteActive } from "@/lib/utils";
import { Button, NavLink } from "@/shared";
import { Check, CirclePlus, LogInIcon, Palette } from "lucide-react";
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
      <Button
        type="button"
        variant="outline-white"
        size="sm"
        aria-label="Theme сонгох"
        aria-expanded={open}
        className="relative"
        onClick={() => setOpen((value) => !value)}
      >
        <Palette className="h-5 w-5" />
        {mounted && (
          <span
            className="absolute bottom-2 right-2 h-2.5 w-2.5 rounded-full border border-white"
            style={{ backgroundColor: activeTheme.palette[500] }}
          />
        )}
      </Button>

      {open && (
        <div className="absolute right-0 top-14 z-[120] w-[252px] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_12px_32px_rgba(16,24,40,.14)]">
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
    <nav className="sticky top-0 z-[100] border-b border-[#f1f1f3] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-4 px-4 md:gap-8 md:px-8">
        <div className="flex min-w-0 items-center gap-8">
          <Link
            href="/"
            className="shrink-0 text-[28px] font-extrabold tracking-[2px] text-primary-600"
          >
            MONCAR
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navbarLinks.map((item) => (
              <NavLink
                key={item.href}
                active={isRouteActive(pathname, item.href)}
                href={item.href}
                className="text-[15px] font-semibold text-[#4b5563] transition hover:text-primary-600"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-5">
          <NavbarThemePicker />

          <Button
            href="/saved"
            variant="outline-white"
            size="sm"
            aria-label="Хадгалсан машинууд"
          >
            <HeartIcon />
          </Button>

          <Button
            href="/post"
            size="sm"
            variant="outline-white"
            aria-label="Зар оруулах"            
          >
            <CirclePlus />
          </Button>

          {showAuthenticatedActions ? (
            <>
              <Button
                href="/notifications"
                variant="outline-white"
                size="sm"
                aria-label="Мэдэгдлүүд"
              >
                <BellIcon />
              </Button>

              <Button
                href="/profile"
                variant="outline-white"
                size="sm"
                aria-label="Миний профайл"
              >
                <UserIcon />
              </Button>
            </>
          ) : (
          <Button
            href="/auth"
            size="sm"
            variant="primary"
            aria-label="Зар оруулах"
            className="!rounded-full !h-12 !w-12 !p-0"
          >
            <LogInIcon  />
          </Button>
          )}
        </div>
      </div>
    </nav>
  );
}