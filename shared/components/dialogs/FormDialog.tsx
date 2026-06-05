import Button from "@/shared/components/form/Button";
import type { ReactNode } from "react";
import Modal from "./Modal";

export interface FormDialogProps {
  open: boolean;
  title: ReactNode;
  children: ReactNode;
  submitLabel?: ReactNode;
  cancelLabel?: ReactNode;
  onSubmit?: () => void;
  onCancel: () => void;
}

export default function FormDialog({
  cancelLabel = "Болих",
  children,
  onCancel,
  onSubmit,
  open,
  submitLabel = "Хадгалах",
  title,
}: FormDialogProps) {
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
          <Button onClick={onSubmit}>{submitLabel}</Button>
        </>
      }
    >
      {children}
    </Modal>
  );
}
