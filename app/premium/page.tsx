"use client";

import { useState } from "react";
import { Checkbox, Form } from "antd";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { CheckIcon } from "@/components/icons";

export default function PremiumPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="mx-auto max-w-[680px] px-4 py-8 md:px-8">
      <div className="mb-2">
        <span className="text-xs font-bold uppercase tracking-[1.5px] text-primary-600">Premium эрх</span>
      </div>
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Зарыг Premium болгох</h2>
      <Form component="div" className="rounded-xl border border-gray-200 bg-white p-7">
        <div className="mb-5 flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Зар сонгох</label>
          <Select>
            <option>Toyota Land Cruiser 200 · 2019 · ₮95,000,000</option>
            <option>Toyota Prius 30 · 2017 · ₮28,500,000</option>
          </Select>
        </div>
        <div className="my-5 rounded-xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-primary-100 p-5 text-center">
          <Badge variant="premium" className="px-4 py-1.5 text-sm">
            ⭐ Premium
          </Badge>
          <div className="mt-3 text-[13px] text-primary-700">Таны зарын дэргэд ийм badge харагдана</div>
        </div>
        <div className="my-4 flex flex-col gap-2.5">
          {[
            "Хайлтын дэд хэсэгт дээд байранд харагдана",
            "Илүү олон хэрэглэгчид хүрнэ",
            "Premium badge харагдана",
            "30 хоногийн турш идэвхтэй",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
              <CheckIcon className="shrink-0 stroke-green-active" />
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-[10px] border border-gray-200 bg-gray-50 p-4">
          <div className="text-[13px] text-gray-500">Нийт үнэ</div>
          <div className="my-2 text-[28px] font-bold text-primary-600">₮49,900</div>
          <div className="text-[13px] text-gray-500">30 хоногийн Premium эрх</div>
        </div>
        <div className="mt-4 rounded-[10px] border border-orange-warning bg-orange-bg p-3.5 text-sm text-gray-700">⚠️ Төлбөр шалгагдаж байна...</div>
        <div className="mt-5 flex flex-col gap-2.5">
          <Button size="lg" fullWidth>
            Төлбөр хийх
          </Button>
          <Button variant="ghost" fullWidth onClick={() => setSuccess(true)}>
            Төлбөр шалгах
          </Button>
          <Checkbox className="!text-sm !text-gray-700">e-Баримт авах</Checkbox>
        </div>
        {success ? (
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-green-active bg-green-bg px-4 py-3 text-sm text-green-active">
            <CheckIcon className="stroke-current" />
            Premium эрх идэвхжлээ! Таны зар хайлтын дэд хэсэгт гарч байна.
          </div>
        ) : null}
      </Form>
    </div>
  );
}
