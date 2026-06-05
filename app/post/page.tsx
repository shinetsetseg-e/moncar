"use client";

import { Form } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button, FormField, Input, PageHeader, Select, SuccessState } from "@/shared/components";

export default function PostPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 md:px-8">
      <PageHeader label="Зар оруулах" title="Машины зар нэмэх" />

      <div className="mb-8 flex items-center">
        {[
          { label: "Мэдээлэл", active: true, done: true },
          { label: "Техник", active: true, done: false },
          { label: "Үнэ/Байршил", active: false, done: false },
          { label: "Зураг", active: false, done: false },
          { label: "Preview", active: false, done: false },
        ].map((step, index) => (
          <div key={step.label} className="relative flex flex-1 flex-col items-center gap-1">
            {index < 4 ? <div className={`absolute left-[calc(50%+14px)] right-[calc(-50%+14px)] top-[14px] h-0.5 ${step.done ? "bg-primary-600" : "bg-gray-200"}`} /> : null}
            <div className={`z-[1] flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step.active ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-500"}`}>
              {step.done ? "✓" : index + 1}
            </div>
            <div className={`text-center text-[11px] font-semibold ${step.active ? "text-primary-600" : "text-gray-500"}`}>{step.label}</div>
          </div>
        ))}
      </div>

      {!success ? (
        <Form component="div" className="rounded-xl border border-gray-200 bg-white p-7">
          <div className="mb-1.5 text-lg font-bold text-gray-900">Техникийн мэдээлэл</div>
          <div className="mb-6 text-sm text-gray-500">Машины техникийн үзүүлэлтүүдийг үнэн зөвөөр бөглөнө үү.</div>
          <div className="flex flex-col gap-[14px]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField label="Үйлдвэр" required>
                <Select>
                  <option>Toyota</option>
                  <option>Lexus</option>
                  <option>Hyundai</option>
                </Select>
              </FormField>
              <FormField label="Модель" required>
                <Select>
                  <option>Land Cruiser</option>
                  <option>Prius</option>
                  <option>Aqua</option>
                </Select>
              </FormField>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField label="Үйлдвэрлэсэн он" required>
                <Select>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2018</option>
                </Select>
              </FormField>
              <FormField label="Орж ирсэн он">
                <Select>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2019</option>
                </Select>
              </FormField>
            </div>
            <FormField error="Арлын дугаар Latin үсгээр байх ёстой" label="Арлын дугаар" required>
              <Input className="uppercase" placeholder="XXXXXXXX" />
            </FormField>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField label="Явсан км" required>
                <Input placeholder="85000" />
              </FormField>
              <FormField label="Нөхцөл" required>
                <Select>
                  <option>Маш сайн</option>
                  <option>Сайн</option>
                  <option>Дунд</option>
                </Select>
              </FormField>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField label="Хөдөлгүүр">
                <Input placeholder="4.0L V8" />
              </FormField>
              <FormField label="Дамжуулга">
                <Select>
                  <option>Автомат</option>
                  <option>Механик</option>
                </Select>
              </FormField>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-5">
            <Button variant="ghost">
              <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
              Буцах
            </Button>
            <div className="flex gap-2.5">
              <Button variant="ghost">Ноорог хадгалах</Button>
              <Button onClick={() => setSuccess(true)}>
                Дараах
                <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
              </Button>
            </div>
          </div>
        </Form>
      ) : (
        <SuccessState
          action={<Button href="/profile">Миний зар руу очих</Button>}
          description="Admin зөвшөөрсний дараа нийтлэгдэнэ."
          title="Зар шалгагдахаар илгээгдлээ"
        />
      )}
    </div>
  );
}
