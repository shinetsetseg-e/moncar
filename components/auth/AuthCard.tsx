import type { ReactNode } from "react";
import Card from "@/components/ui/Card";

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
  center?: boolean;
  titleClassName?: string;
}

export default function AuthCard({ title, subtitle, children, center, titleClassName }: Props) {
  return (
    <Card className={`w-full max-w-[440px] rounded-2xl p-10 shadow-card ${center ? "text-center" : ""}`}>
      <div className={`mb-2 text-2xl font-bold text-primary-600 ${titleClassName ?? ""}`}>{title}</div>
      <div className="mb-7 text-sm text-gray-500">{subtitle}</div>
      {children}
    </Card>
  );
}
