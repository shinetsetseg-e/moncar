import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  label?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function PageHeader({ action, className, contentClassName, description, label, subtitle, title }: PageHeaderProps) {
  return (
    <div className={cn("mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className={cn("max-w-[760px]", contentClassName)}>
        {label ? <div className="mb-2 text-xs font-bold uppercase tracking-[1.5px] text-primary-600">{label}</div> : null}
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-gray-500">{subtitle}</p> : null}
        {description ? <div className="mt-3 text-sm text-gray-600">{description}</div> : null}
      </div>
      {action ? <div className="flex shrink-0 flex-wrap gap-2">{action}</div> : null}
    </div>
  );
}
