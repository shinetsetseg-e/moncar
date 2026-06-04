"use client";

import type { PropsWithChildren } from "react";
import { ConfigProvider, Layout } from "antd";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#1677ff",
    colorInfo: "#1677ff",
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
      activeBorderColor: "#1677ff",
      hoverBorderColor: "#1677ff",
      activeShadow: "0 0 0 3px #b9e1ff",
      paddingBlock: 10,
      paddingInline: 14,
    },
    Select: {
      activeBorderColor: "#1677ff",
      hoverBorderColor: "#1677ff",
      activeOutlineColor: "#b9e1ff",
      optionSelectedBg: "#edf8ff",
      optionSelectedColor: "#101828",
      optionSelectedFontWeight: 500,
      optionPadding: "8px 14px",
    },
    Checkbox: {
      colorPrimary: "#1677ff",
      colorPrimaryHover: "#0a5ceb",
    },
    Radio: {
      colorPrimary: "#1677ff",
      colorPrimaryHover: "#0a5ceb",
    },
  },
};

export default function AntdProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider theme={theme}>
      <Layout className="min-h-screen !bg-[var(--gray-50)]">{children}</Layout>
    </ConfigProvider>
  );
}
