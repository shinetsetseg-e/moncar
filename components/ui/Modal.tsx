import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  actions?: ReactNode;
}

export default function Modal({ open, title, children, onClose, actions }: Props) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(16,24,40,.5)] p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-[480px] rounded-2xl bg-white p-7 shadow-[0_20px_60px_rgba(16,24,40,.2)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">{title}</div>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-[14px]">{children}</div>
        <div className={cn("mt-5 flex justify-end gap-[10px]")}>
          {actions ?? (
            <Button variant="ghost" onClick={onClose}>
              Болих
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
