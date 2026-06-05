"use client";

import { applyBrandTheme, brandThemes, getStoredBrandThemeName } from "@/lib/brandThemes";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function ThemePicker() {
  const [selectedTheme, setSelectedTheme] = useState(getStoredBrandThemeName);

  useEffect(() => {
    setSelectedTheme(getStoredBrandThemeName());
  }, []);

  const selectedThemeLabel = useMemo(
    () => brandThemes.find((theme) => theme.name === selectedTheme)?.label ?? "Moncar Blue",
    [selectedTheme],
  );

  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-[0_4px_16px_rgba(16,24,40,.05)]">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <span className="text-sm font-bold text-gray-900">Theme</span>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
            {selectedThemeLabel}
          </span>
        </div>

        <div
          className="flex max-w-full gap-2 overflow-x-auto pb-1 md:justify-end"
          role="radiogroup"
          aria-label="Brand theme picker"
        >
          {brandThemes.map((theme) => {
            const isSelected = theme.name === selectedTheme;

            return (
              <button
                key={theme.name}
                type="button"
                title={theme.label}
                role="radio"
                aria-checked={isSelected}
                aria-label={`Select ${theme.label} theme`}
                className={cn(
                  "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2",
                  isSelected
                    ? "border-primary-500 ring-2 ring-primary-100"
                    : "border-gray-200 hover:border-gray-300",
                )}
                style={{ backgroundColor: theme.palette[500] }}
                onClick={() => {
                  applyBrandTheme(theme.name);
                  setSelectedTheme(theme.name);
                }}
              >
                {isSelected && (
                  <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-sm">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}