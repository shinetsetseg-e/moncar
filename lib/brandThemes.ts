import colors from "tailwindcss/colors";

type BrandScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type BrandThemeName = "moncar-blue" | "emerald" | "violet" | "rose" | "amber" | "cyan" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "yellow" | "lime" | "green" | "teal" | "sky" | "blue" | "indigo" | "purple" | "fuchsia" | "pink";

export interface BrandThemeDefinition {
  name: BrandThemeName;
  label: string;
  palette: BrandScale;
}

const brandScaleKeys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const satisfies ReadonlyArray<keyof BrandScale>;

export const BRAND_THEME_STORAGE_KEY = "moncar-brand-theme";
export const BRAND_THEME_EVENT = "moncar:brand-theme-change";

const moncarBlue: BrandScale = {
  50: "#edf8ff",
  100: "#d7edff",
  200: "#b9e1ff",
  300: "#88d0ff",
  400: "#50b5ff",
  500: "#2893ff",
  600: "#1677ff",
  700: "#0a5ceb",
  800: "#0f4abe",
  900: "#134295",
};

function pickScale(source: Record<number, string>): BrandScale {
  return {
    50: source[50],
    100: source[100],
    200: source[200],
    300: source[300],
    400: source[400],
    500: source[500],
    600: source[600],
    700: source[700],
    800: source[800],
    900: source[900],
  };
}

export const brandThemes: BrandThemeDefinition[] = [
  { name: "moncar-blue", label: "Moncar Blue", palette: moncarBlue },
  { name: "slate", label: "Slate", palette: pickScale(colors.slate) },
  { name: "gray", label: "Gray", palette: pickScale(colors.gray) },
  { name: "zinc", label: "Zinc", palette: pickScale(colors.zinc) },
  { name: "neutral", label: "Neutral", palette: pickScale(colors.neutral) },
  { name: "stone", label: "Stone", palette: pickScale(colors.stone) },
  { name: "red", label: "Red", palette: pickScale(colors.red) },
  { name: "orange", label: "Orange", palette: pickScale(colors.orange) },
  { name: "amber", label: "Amber", palette: pickScale(colors.amber) },
  { name: "yellow", label: "Yellow", palette: pickScale(colors.yellow) },
  { name: "lime", label: "Lime", palette: pickScale(colors.lime) },
  { name: "green", label: "Green", palette: pickScale(colors.green) },
  { name: "emerald", label: "Emerald", palette: pickScale(colors.emerald) },
  { name: "teal", label: "Teal", palette: pickScale(colors.teal) },
  { name: "cyan", label: "Cyan", palette: pickScale(colors.cyan) },
  { name: "sky", label: "Sky", palette: pickScale(colors.sky) },
  { name: "blue", label: "Blue", palette: pickScale(colors.blue) },
  { name: "indigo", label: "Indigo", palette: pickScale(colors.indigo) },
  { name: "violet", label: "Violet", palette: pickScale(colors.violet) },
  { name: "purple", label: "Purple", palette: pickScale(colors.purple) },
  { name: "fuchsia", label: "Fuchsia", palette: pickScale(colors.fuchsia) },
  { name: "pink", label: "Pink", palette: pickScale(colors.pink) },
  { name: "rose", label: "Rose", palette: pickScale(colors.rose) },
];

function hexToRgbValue(hex: string) {
  const sanitized = hex.replace("#", "");
  const normalized = sanitized.length === 3 ? sanitized.split("").map((char) => `${char}${char}`).join("") : sanitized;
  const value = Number.parseInt(normalized, 16);

  return `${(value >> 16) & 255} ${(value >> 8) & 255} ${value & 255}`;
}

export function getBrandTheme(themeName?: string | null) {
  return brandThemes.find((theme) => theme.name === themeName) ?? brandThemes[0];
}

export function getStoredBrandThemeName() {
  if (typeof window === "undefined") {
    return brandThemes[0].name;
  }

  return getBrandTheme(window.localStorage.getItem(BRAND_THEME_STORAGE_KEY)).name;
}

export function applyBrandTheme(themeName: BrandThemeName | string, options?: { persist?: boolean }) {
  const theme = getBrandTheme(themeName);

  if (typeof document === "undefined") {
    return theme;
  }

  const root = document.documentElement;

  brandScaleKeys.forEach((key) => {
    const color = theme.palette[key];
    root.style.setProperty(`--primary-${key}`, color);
    root.style.setProperty(`--primary-${key}-rgb`, hexToRgbValue(color));
  });

  root.style.setProperty("--ring-primary", theme.palette[200]);
  root.style.setProperty("--text-primary", theme.palette[600]);
  root.style.setProperty("--bg-primary-soft", theme.palette[50]);
  root.dataset.brandTheme = theme.name;

  if (options?.persist !== false && typeof window !== "undefined") {
    window.localStorage.setItem(BRAND_THEME_STORAGE_KEY, theme.name);
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(BRAND_THEME_EVENT, { detail: theme.name }));
  }

  return theme;
}

export function applyStoredBrandTheme() {
  return applyBrandTheme(getStoredBrandThemeName(), { persist: false });
}
