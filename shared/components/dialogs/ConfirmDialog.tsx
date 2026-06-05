import Button from "@/shared/components/form/Button";
import type { ReactNode } from "react";
import Modal from "./Modal";

export interface ConfirmDialogProps {
  open: boolean;
  title: ReactNode;
  description: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  confirmVariant?: "primary" | "danger" | "secondary";
}

export default function ConfirmDialog({
  cancelLabel = "Болих",
  confirmLabel = "Батлах",
  confirmVariant = "primary",
  description,
  onCancel,
  onConfirm,
  open,
  title,
}: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onCancel}
      actions={
        <>
          <Button variant="ghost" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button variant={confirmVariant} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </>
      }
    >
      <div className="text-sm text-gray-500">{description}</div>
    </Modal>
  );
}
