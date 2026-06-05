import { Upload } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface UploadDropzoneProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export default function UploadDropzone({ className, description, title }: UploadDropzoneProps) {
  return (
    <div className={cn("cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center", className)}>
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
        <Upload className="h-5 w-5 text-primary-600" strokeWidth={2.2} />
      </div>
      <div className="mb-1 text-sm text-gray-600">{title}</div>
      {description ? <div className="text-xs text-gray-400">{description}</div> : null}
    </div>
  );
}
