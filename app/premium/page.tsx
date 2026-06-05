"use client";

import { Alert, Badge, Button, Checkbox, FormField, PageHeader, Select } from "@/shared";
import { Form } from "antd";
import { Star } from "lucide-react";
import { useState } from "react";

export default function PremiumPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="mx-auto max-w-[680px] px-4 py-8 md:px-8">
      <PageHeader label="Premium эрх" title="Зарыг Premium болгох" />
      <Form component="div" className="rounded-xl border border-gray-200 bg-white p-7">
        <FormField className="mb-5" label="Зар сонгох">
          <Select>
            <option>Toyota Land Cruiser 200 · 2019 · ₮95,000,000</option>
            <option>Toyota Prius 30 · 2017 · ₮28,500,000</option>
          </Select>
        </FormField>
        <div className="my-5 rounded-xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-primary-100 p-5 text-center">
          <Badge className="px-4 py-1.5 text-sm" variant="premium">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5" strokeWidth={2.2} />
              Premium
            </span>
          </Badge>
          <div className="mt-3 text-[13px] text-primary-700">Таны зарын дээр ийм badge харагдана</div>
        </div>
        <div className="my-4 flex flex-col gap-2.5">
          {[
            "Хайлтын дээд хэсэгт дээд байранд харагдана",
            "Илүү олон хэрэглэгчид хүрнэ",
            "Premium badge харагдана",
            "30 хоногийн турш идэвхтэй",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-bg text-green-active">✓</span>
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-[10px] border border-gray-200 bg-gray-50 p-4">
          <div className="text-[13px] text-gray-500">Нийт үнэ</div>
          <div className="my-2 text-[28px] font-bold text-primary-600">₮49,900</div>
          <div className="text-[13px] text-gray-500">30 хоногийн Premium эрх</div>
        </div>
        <Alert className="mt-4" variant="warning">
          Төлбөр шалгагдаж байна...
        </Alert>
        <div className="mt-5 flex flex-col gap-2.5">
          <Button fullWidth size="lg">
            Төлбөр хийх
          </Button>
          <Button fullWidth variant="ghost" onClick={() => setSuccess(true)}>
            Төлбөр шалгах
          </Button>
          <Checkbox>e-Баримт авах</Checkbox>
        </div>
        {success ? <Alert className="mt-3" variant="success">Premium эрх идэвхжлээ! Таны зар хайлтын дээд хэсэгт гарч байна.</Alert> : null}
      </Form>
    </div>
  );
}
