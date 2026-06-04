import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export default function Select({ className, children, ...props }: Props) {
  return (
    <select
      className={cn(
        "w-full appearance-none rounded-lg border-[1.5px] border-gray-300 bg-white bg-no-repeat pr-8 pl-[14px] py-2.5 text-sm text-gray-900 outline-none transition-[border,box-shadow]",
        "focus:border-primary-600 focus:shadow-[0_0_0_3px_var(--primary-200)]",
        className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2398A2B3' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        backgroundPosition: "right 10px center",
      }}
      {...props}
    >
      {children}
    </select>
  );
}
