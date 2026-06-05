import { Button, Checkbox, FormField, Input, Radio, Select } from "@/shared/components";

export default function FilterSidebar() {
  return (
    <aside className="sticky top-20 hidden rounded-xl border border-gray-200 bg-white p-5 lg:block">
      <div className="mb-4 flex justify-between text-[15px] font-bold text-gray-900">
        <span>Шүүлтүүр</span>
        <span className="cursor-pointer text-xs font-medium text-primary-600">Цэвэрлэх</span>
      </div>

      <div className="mb-5 border-b border-gray-100 pb-5">
        <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.8px] text-gray-500">Үйлдвэр</div>
        <div className="flex flex-col gap-2">
          {[
            { label: "Toyota", count: "1,240", checked: true },
            { label: "Lexus", count: "380", checked: false },
            { label: "Nissan", count: "560", checked: false },
            { label: "Hyundai", count: "720", checked: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm">
              <Checkbox defaultChecked={item.checked} className="flex-1 !text-sm !text-gray-700">
                {item.label}
              </Checkbox>
              <span className="ml-auto text-xs text-gray-400">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5 border-b border-gray-100 pb-5">
        <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.8px] text-gray-500">Үнийн хязгаар</div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Input className="px-[10px] py-[7px] text-[13px]" placeholder="₮0" />
          <span>—</span>
          <Input className="px-[10px] py-[7px] text-[13px]" placeholder="₮200M" />
        </div>
      </div>

      <div className="mb-5 border-b border-gray-100 pb-5">
        <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.8px] text-gray-500">Он</div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Input className="px-[10px] py-[7px] text-[13px]" placeholder="2010" />
          <span>—</span>
          <Input className="px-[10px] py-[7px] text-[13px]" placeholder="2024" />
        </div>
      </div>

      <div className="mb-5 border-b border-gray-100 pb-5">
        <FormField label="Байршил" labelClassName="mb-1.5 text-xs font-bold uppercase tracking-[0.8px] text-gray-500">
          <Select>
            <option>Бүх байршил</option>
            <option>Улаанбаатар</option>
            <option>Дархан</option>
            <option>Эрдэнэт</option>
          </Select>
        </FormField>
      </div>

      <div className="mb-5">
        <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.8px] text-gray-500">Нөхцөл</div>
        <div className="flex flex-col gap-2">
          {["Бүгд", "Шинэ", "Хэрэглэсэн"].map((label) => (
            <Radio key={label} defaultChecked={label === "Хэрэглэсэн"} name="condition">
              {label}
            </Radio>
          ))}
        </div>
      </div>

      <Button fullWidth>Шүүлтүүр хэрэглэх</Button>
    </aside>
  );
}
