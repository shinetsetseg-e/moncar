import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

export function CarPlaceholderIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      stroke="var(--gray-400)"
      strokeWidth="1.5"
      className={cn("h-[50px] w-20 opacity-25", className)}
      {...props}
    >
      <path d="M8 34 L12 22 L20 18 L40 16 L58 18 L66 22 L72 34" />
      <path d="M4 34 L76 34 L74 40 L6 40 Z" />
      <circle cx="18" cy="42" r="5" />
      <circle cx="62" cy="42" r="5" />
    </svg>
  );
}

export function DetailedCarPlaceholderIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      stroke="var(--gray-400)"
      strokeWidth="1.2"
      className={cn("h-[120px] w-[200px] opacity-25", className)}
      {...props}
    >
      <path d="M8 34 L12 22 L20 18 L40 16 L58 18 L66 22 L72 34" />
      <path d="M4 34 L76 34 L74 40 L6 40 Z" />
      <circle cx="18" cy="42" r="5" />
      <circle cx="62" cy="42" r="5" />
      <path d="M14 22 L18 16 L36 14 L52 16 L58 22" />
      <rect x="20" y="15" width="12" height="8" rx="1" />
      <rect x="34" y="14" width="14" height="8" rx="1" />
    </svg>
  );
}

export function HeartIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("h-4 w-4", className)} {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function SearchIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("h-[18px] w-[18px]", className)} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function UserIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("h-[18px] w-[18px]", className)} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export function BellIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("h-[18px] w-[18px]", className)} {...props}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

export function ClockIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("h-[13px] w-[13px]", className)} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function PinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("h-[13px] w-[13px]", className)} {...props}>
      <path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z" />
    </svg>
  );
}

export function GridIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("h-4 w-4", className)} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function ListIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("h-4 w-4", className)} {...props}>
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={cn("h-4 w-4", className)} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
