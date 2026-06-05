import type { ReactNode } from "react";

export interface SectionHeaderProps {
  label?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
}

export default function SectionHeader({ label, title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {label ? <div className="mb-2 text-xs font-bold uppercase tracking-[1.5px] text-primary-600">{label}</div> : null}
        <div className="mb-2 text-[28px] font-bold text-gray-900">{title}</div>
        {subtitle ? <div className="text-base text-gray-500">{subtitle}</div> : null}
      </div>
      {action}
    </div>
  );
}
