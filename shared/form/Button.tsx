"use client";

import { cn } from "@/lib/utils";
import { Button as AntButton } from "antd";
import { useRouter } from "next/navigation";
import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "white"
  | "outline-white";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "!bg-primary-600 !text-white hover:!bg-primary-700 active:!bg-primary-800",
  secondary: "!border-[1.5px] !border-primary-600 !bg-white !text-primary-600 hover:!bg-primary-50",
  ghost:
    "!border-[1.5px] !border-gray-300 !bg-transparent !text-gray-600 hover:!bg-gray-50 hover:!text-gray-900",
  danger: "!bg-red-danger !text-white hover:!bg-[#b91c1c]",
  white:
    "!border-[1.5px] !border-white/50 !bg-white !font-bold !text-primary-600 hover:!bg-gray-50",
  "outline-white":
    "!relative !flex !h-9 !w-9 !items-center !justify-center !rounded-full !bg-[#f7f7f9] !p-0 !text-[#374151] !shadow-none !transition hover:!bg-[#eeeeF2] focus:!outline-none focus:!ring-2 focus:!ring-primary-200 focus:!ring-offset-2",
};

const baseClasses =
  "!inline-flex !items-center !justify-center !gap-1.5 !rounded-2xl !border-0 !font-semibold !shadow-none !transition-all !duration-150";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "!px-[8px] !py-[6px] !text-[13px]",
  md: "!px-5 !py-2.5 !text-sm",
  lg: "!px-7 !py-[13px] !text-base",
};

interface SharedProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  href?: string;
  loading?: boolean;
}

export type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "type"> & {
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  };

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  fullWidth,
  href,
  disabled,
  loading,
  onClick,
  type,
  ...props
}: ButtonProps) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !href || disabled) {
      return;
    }

    router.push(href);
  };

  return (
    <AntButton
      autoInsertSpace={false}
      block={fullWidth}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        disabled &&
          "!border-gray-300 !bg-gray-300 !text-gray-400 hover:!bg-gray-300 hover:!text-gray-400",
        className,
      )}
      danger={variant === "danger"}
      disabled={disabled}
      htmlType={type}
      loading={loading}
      onClick={handleClick}
      type={variant === "primary" || variant === "danger" ? "primary" : "default"}
      {...props}
    >
      {children}
    </AntButton>
  );
}
