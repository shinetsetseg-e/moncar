"use client";

import { cn } from "@/lib/utils";
import Button from "@/shared/form/Button";
import type { MouseEventHandler, ReactNode } from "react";

export interface IconButtonProps {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: "white" | "ghost" | "secondary" | "primary";
  className?: string;
}

export default function IconButton({ className, disabled, href, icon, label, onClick, variant = "white" }: IconButtonProps) {
  return (
    <Button
      aria-label={label}
      className={cn("!min-w-0 !px-2.5", className)}
      disabled={disabled}
      href={href}
      onClick={onClick}
      variant={variant}
    >
      {icon}
    </Button>
  );
}
