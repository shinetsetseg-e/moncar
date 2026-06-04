import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "white" | "outline-white";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
  secondary: "border-[1.5px] border-primary-600 bg-white text-primary-600 hover:bg-primary-50",
  ghost: "border-[1.5px] border-gray-300 bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
  danger: "bg-red-danger text-white hover:bg-[#b91c1c]",
  white: "bg-white font-bold text-primary-600 hover:bg-gray-50",
  "outline-white": "border-2 border-white/50 bg-transparent text-white hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-[14px] py-[6px] text-[13px]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-[13px] text-base",
};

interface SharedProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  href?: string;
}

type Props = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  fullWidth,
  href,
  disabled,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border-0 font-semibold transition-all duration-150",
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && "w-full",
    disabled && "cursor-not-allowed bg-gray-300 text-gray-400 hover:bg-gray-300 hover:text-gray-400",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
