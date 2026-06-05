"use client";

import { Form } from "antd";
import { useState } from "react";
import { CarPlaceholderIcon } from "@/components/icons";
import { Alert, Button, FormField, PageHeader, Select, Textarea, UploadDropzone } from "@/shared/components";

export default function ComplaintPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="mx-auto max-w-[580px] px-4 py-8 md:px-8">
      <PageHeader label="Гомдол / Мэдэгдэл" title="Гомдол илгээх" />
      <Form component="div" className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-7">
        <div className="flex items-center gap-3 rounded-[10px] border border-gray-200 bg-gray-50 p-3.5">
          <div className="flex h-9 w-11 shrink-0 items-center justify-center rounded-md bg-gray-200">
            <CarPlaceholderIcon className="h-4 w-5 stroke-gray-500 opacity-100" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Toyota Land Cruiser 200 · 2019</div>
            <div className="text-xs text-gray-500">₮95,000,000 · УБ, Сүхбаатар</div>
          </div>
        </div>
        <FormField label="Гомдлын шалтгаан" required>
          <Select>
            <option>Шалтгаан сонгоно уу</option>
            <option>Хуурамч зар</option>
            <option>Буруу мэдээлэл</option>
            <option>Луйвар/Мэхлэлт</option>
            <option>Хориотой контент</option>
            <option>Бусад</option>
          </Select>
        </FormField>
        <FormField label="Дэлгэрэнгүй тайлбар" required>
          <Textarea className="resize-y" placeholder="Гомдлынхоо дэлгэрэнгүйг бичнэ үү..." rows={4} />
        </FormField>
        <FormField label="Зураг / Screenshot (заавал биш)">
          <UploadDropzone description="PNG, JPG, WEBP · 5MB хүртэл" title="Зураг оруулах" />
        </FormField>
        {success ? <Alert variant="success">Таны гомдлыг хүлээн авлаа. Бид шалгаад мэдэгдэл илгээх болно.</Alert> : null}
        <div className="flex justify-end gap-2.5">
          <Button href="/listings/land-cruiser-200" variant="ghost">
            Болих
          </Button>
          <Button onClick={() => setSuccess(true)}>Илгээх</Button>
        </div>
      </Form>
    </div>
  );
}
