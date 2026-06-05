"use client";

import { ChevronLeft, ChevronRight, CircleAlert } from "lucide-react";
import { Form } from "antd";
import { useState } from "react";
import { CheckIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

export default function PostPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="mx-auto max-w-[720px] px-4 py-8 md:px-8">
      <div className="mb-2">
        <span className="text-xs font-bold uppercase tracking-[1.5px] text-primary-600">Зар оруулах</span>
      </div>
      <h2 className="mb-7 text-2xl font-bold text-gray-900">Машины зар нэмэх</h2>

      <div className="mb-8 flex items-center">
        {[
          { label: "Мэдээлэл", active: true, done: true },
          { label: "Техник", active: true, done: false },
          { label: "Үнэ/Байршил", active: false, done: false },
          { label: "Зураг", active: false, done: false },
          { label: "Preview", active: false, done: false },
        ].map((step, index) => (
          <div key={step.label} className="relative flex flex-1 flex-col items-center gap-1">
            {index < 4 ? (
              <div className={`absolute left-[calc(50%+14px)] right-[calc(-50%+14px)] top-[14px] h-0.5 ${step.done ? "bg-primary-600" : "bg-gray-200"}`} />
            ) : null}
            <div className={`z-[1] flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step.active ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-500"}`}>
              {step.done ? <CheckIcon className="h-3.5 w-3.5" /> : index + 1}
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
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Үйлдвэр *</label>
                <Select>
                  <option>Toyota</option>
                  <option>Lexus</option>
                  <option>Hyundai</option>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Модель *</label>
                <Select>
                  <option>Land Cruiser</option>
                  <option>Prius</option>
                  <option>Aqua</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Үйлдвэрлэсэн он *</label>
                <Select>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2018</option>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Орж ирсэн он</label>
                <Select>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2019</option>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Арлын дугаар *</label>
              <Input placeholder="XXXXXXXX" className="uppercase" />
              <div className="mt-1 flex items-center gap-1 text-xs text-red-danger">
                <CircleAlert className="h-[13px] w-[13px] shrink-0" strokeWidth={2} />
                Арлын дугаар Latin үсгээр байх ёстой
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Явсан км *</label>
                <Input placeholder="85000" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Нөхцөл *</label>
                <Select>
                  <option>Маш сайн</option>
                  <option>Сайн</option>
                  <option>Дунд</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Хөдөлгүүр</label>
                <Input placeholder="4.0L V8" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Дамжуулга</label>
                <Select>
                  <option>Автомат</option>
                  <option>Механик</option>
                </Select>
              </div>
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
        <div className="rounded-xl border border-gray-200 bg-white p-7">
          <div className="py-5 text-center">
            <div className="mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-green-bg">
              <CheckIcon className="h-8 w-8 stroke-green-active" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Зар шалгагдахаар илгээгдлээ</h3>
            <p className="mb-5 text-sm text-gray-500">Admin зөвшөөрсний дараа нийтлэгдэнэ.</p>
            <Button href="/profile">Миний зар руу очих</Button>
          </div>
        </div>
      )}
    </div>
  );
}
