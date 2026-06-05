"use client";

import { Upload } from "lucide-react";
import { Form } from "antd";
import { useState } from "react";
import { CarPlaceholderIcon, CheckIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

export default function ComplaintPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="mx-auto max-w-[580px] px-4 py-8 md:px-8">
      <div className="mb-2">
        <span className="text-xs font-bold uppercase tracking-[1.5px] text-primary-600">Гомдол / Мэдэгдэл</span>
      </div>
      <h2 className="mb-6 text-2xl font-bold">Гомдол илгээх</h2>
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
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Гомдлын шалтгаан *</label>
          <Select>
            <option>Шалтгаан сонгоно уу</option>
            <option>Хуурамч зар</option>
            <option>Буруу мэдээлэл</option>
            <option>Луйвар/Мэхлэлт</option>
            <option>Хориотой контент</option>
            <option>Бусад</option>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Дэлгэрэнгүй тайлбар *</label>
          <Textarea rows={4} placeholder="Гомдлынхаа дэлгэрэнгүйг бичнэ үү..." className="resize-y" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Зураг / Screenshot (заавал биш)</label>
          <div className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
              <Upload className="h-5 w-5 text-primary-600" strokeWidth={2.2} />
            </div>
            <div className="mb-1 text-sm text-gray-600">Зураг оруулах</div>
            <div className="text-xs text-gray-400">PNG, JPG, WEBP · 5MB хүртэл</div>
          </div>
        </div>
        {success ? (
          <div className="flex items-center gap-2 rounded-lg border border-green-active bg-green-bg px-4 py-3 text-sm text-green-active">
            <CheckIcon className="stroke-current" />
            Таны гомдлыг хүлээн авлаа. Бид шалгаад мэдэгдэл илгээх болно.
          </div>
        ) : null}
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
