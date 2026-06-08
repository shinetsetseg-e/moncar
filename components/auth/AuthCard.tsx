import { Card } from "antd";
import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
  center?: boolean;
  titleClassName?: string;
}

export default function AuthCard({ title, subtitle, children, center, titleClassName }: Props) {
  return (
    <Card className={`w-full max-w-[440px] overflow-hidden !rounded-2xl shadow-card [&_.ant-card-body]:!p-6 sm:[&_.ant-card-body]:!p-8 md:[&_.ant-card-body]:!p-10 ${center ? "text-center" : ""}`}>
      <div className={`mb-2 text-2xl font-bold text-primary-600 ${titleClassName ?? ""}`}>{title}</div>
      <div className="mb-7 text-sm text-gray-500">{subtitle}</div>
      {children}
    </Card>
  );
}
