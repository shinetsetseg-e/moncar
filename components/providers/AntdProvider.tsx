"use client";

import { ConfigProvider, Layout } from "antd";
import type { ThemeConfig } from "antd";
import type { PropsWithChildren } from "react";
import { useEffect, useMemo, useState } from "react";
import { applyStoredBrandTheme, BRAND_THEME_EVENT, getBrandTheme, getStoredBrandThemeName } from "@/lib/brandThemes";

export default function AntdProvider({ children }: PropsWithChildren) {
  const [themeName, setThemeName] = useState(getStoredBrandThemeName);
  const brandTheme = getBrandTheme(themeName);

  useEffect(() => {
    applyStoredBrandTheme();

    const handleThemeChange = (event: Event) => {
      const nextTheme = (event as CustomEvent<string>).detail;
      setThemeName(getBrandTheme(nextTheme).name);
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key) {
        setThemeName(getStoredBrandThemeName());
      }
    };

    window.addEventListener(BRAND_THEME_EVENT, handleThemeChange as EventListener);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(BRAND_THEME_EVENT, handleThemeChange as EventListener);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const theme = useMemo<ThemeConfig>(
    () => ({
      token: {
        colorPrimary: brandTheme.palette[600],
        colorInfo: brandTheme.palette[600],
        colorSuccess: "#16a34a",
        colorWarning: "#f9b634",
        colorError: "#dc2626",
        colorText: "#101828",
        colorTextSecondary: "#475467",
        colorTextPlaceholder: "#98a2b3",
        colorBorder: "#d0d5dd",
        colorBgBase: "#ffffff",
        colorBgContainer: "#ffffff",
        colorFillSecondary: "#f2f4f7",
        borderRadius: 8,
        borderRadiusLG: 12,
        controlHeight: 42,
        controlHeightLG: 52,
        controlOutlineWidth: 3,
        fontSize: 14,
        fontFamily: "var(--font-noto-sans), sans-serif",
      },
      components: {
        Button: {
          fontWeight: 600,
          primaryShadow: "none",
          dangerShadow: "none",
          defaultShadow: "none",
          contentLineHeight: 1.2,
        },
        Input: {
          activeBorderColor: brandTheme.palette[600],
          hoverBorderColor: brandTheme.palette[600],
          activeShadow: `0 0 0 3px ${brandTheme.palette[200]}`,
          paddingBlock: 10,
          paddingInline: 14,
        },
        Select: {
          activeBorderColor: brandTheme.palette[600],
          hoverBorderColor: brandTheme.palette[600],
          activeOutlineColor: brandTheme.palette[200],
          optionSelectedBg: brandTheme.palette[50],
          optionSelectedColor: "#101828",
          optionSelectedFontWeight: 500,
          optionPadding: "8px 14px",
        },
        Checkbox: {
          colorPrimary: brandTheme.palette[600],
          colorPrimaryHover: brandTheme.palette[700],
        },
        Radio: {
          colorPrimary: brandTheme.palette[600],
          colorPrimaryHover: brandTheme.palette[700],
        },
      },
    }),
    [brandTheme],
  );

  return (
    <ConfigProvider theme={theme}>
      <Layout className="min-h-screen !bg-[var(--gray-50)]">{children}</Layout>
    </ConfigProvider>
  );
}
