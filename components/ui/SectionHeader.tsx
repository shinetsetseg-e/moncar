import type { ReactNode } from "react";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function SectionHeader({ label, title, subtitle, action }: Props) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <div className="mb-2 text-xs font-bold uppercase tracking-[1.5px] text-primary-600">{label}</div>
        <div className="mb-2 text-[28px] font-bold text-gray-900">{title}</div>
        {subtitle ? <div className="text-base text-gray-500">{subtitle}</div> : null}
      </div>
      {action}
    </div>
  );
}
