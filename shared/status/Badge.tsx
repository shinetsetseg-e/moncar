import type { ReactNode } from "react";
import type { BadgeVariant } from "@/types";
import { cn } from "@/lib/utils";

const variantClasses: Record<BadgeVariant, string> = {
  premium: "border border-primary-200 bg-primary-50 text-primary-700",
  loan: "bg-green-bg text-green-active",
  normal: "bg-gray-100 text-gray-600",
  green: "bg-green-bg text-green-active",
  new: "bg-green-bg text-green-active",
  hot: "bg-orange-bg text-orange-warning",
  verified: "bg-primary-50 text-primary-700",
  success: "border border-green-active/15 bg-green-bg text-green-active",
  warning: "border border-orange-warning/20 bg-orange-bg text-orange-warning",
  error: "border border-red-danger/15 bg-red-bg text-red-danger",
  info: "border border-primary-200 bg-primary-50 text-primary-700",
  pending: "border border-gray-200 bg-gray-100 text-gray-600",
};

export interface BadgeProps {
  children: ReactNode;
  variant: BadgeVariant;
  className?: string;
}

export default function Badge({ children, variant, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-[100px] px-[10px] py-[3px] text-xs font-semibold leading-4",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
