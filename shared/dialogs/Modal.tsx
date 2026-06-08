import Button from "@/shared/form/Button";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
  actions?: ReactNode;
}

export default function Modal({ actions, children, onClose, open, title }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-[rgba(16,24,40,.5)] p-4 sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div className="max-h-[calc(100svh-2rem)] w-full max-w-[480px] overflow-y-auto rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(16,24,40,.2)] sm:p-7" onClick={(event) => event.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="min-w-0 text-lg font-bold text-gray-900">{title}</div>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
            onClick={onClose}
          >
            <X className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
        <div className="flex flex-col gap-3 sm:gap-[14px]">{children}</div>
        <div className="mt-5 flex flex-col-reverse justify-end gap-[10px] sm:flex-row [&_.ant-btn]:!w-full sm:[&_.ant-btn]:!w-auto">
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
