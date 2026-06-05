import { CreditCard } from "lucide-react";
import { Checkbox, Form } from "antd";
import { CarPlaceholderIcon } from "@/components/icons";
import { getListingById } from "@/data/listings";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

interface LoanPageProps {
  searchParams?: Promise<{
    listing?: string;
  }>;
}

export default async function LoanPage({ searchParams }: LoanPageProps) {
  const resolvedSearchParams = await searchParams;
  const listing = resolvedSearchParams?.listing ? getListingById(resolvedSearchParams.listing) : getListingById("land-cruiser-200");

  return (
    <div className="mx-auto max-w-[640px] px-4 py-8 md:px-8">
      <div className="mb-2">
        <span className="text-xs font-bold uppercase tracking-[1.5px] text-primary-600">IIC зээл</span>
      </div>
      <h1 className="mb-6 text-2xl font-bold">Зээлийн хүсэлт илгээх</h1>

      {listing ? (
        <div className="mb-6 flex items-center gap-4 rounded-[10px] border border-primary-200 bg-primary-50 p-4">
          <div className="flex h-[60px] w-20 shrink-0 items-center justify-center rounded-lg bg-primary-100">
            <CarPlaceholderIcon className="h-[35px] w-[50px] stroke-primary-400 opacity-100" />
          </div>
          <div>
            <div className="text-[15px] font-bold text-primary-800">{listing.title}</div>
            <div className="text-[13px] text-primary-600">
              {listing.year} · {listing.mileage} · {listing.price}
            </div>
          </div>
        </div>
      ) : null}

      <Form component="div" className="flex flex-col gap-[14px] rounded-xl border border-gray-200 bg-white p-6">
        <div className="border-b border-gray-100 pb-3 text-base font-bold text-gray-900">Хувийн мэдээлэл</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Нэр *</label>
            <Input placeholder="Овог Нэр" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Утасны дугаар *</label>
            <Input placeholder="9900 0000" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">И-мэйл</label>
          <Input type="email" placeholder="name@email.com" />
        </div>

        <div className="border-b border-gray-100 pb-3 pt-1 text-base font-bold text-gray-900">Зээлийн мэдээлэл</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Зээлийн дүн *</label>
            <Input placeholder="₮80,000,000" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Урьдчилгаа *</label>
            <Input placeholder="₮15,000,000" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Ажил эрхлэлт</label>
            <Select>
              <option>Байнгын ажилтан</option>
              <option>Хувиараа хөдөлмөр эрхлэгч</option>
              <option>Бизнес эрхлэгч</option>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Сарын орлого</label>
            <Input placeholder="₮2,500,000" />
          </div>
        </div>
        <Checkbox className="!items-start !text-sm !text-gray-600" defaultChecked>
          Би мэдээлэл дамжуулахыг зөвшөөрч байна. IIC банк болон Moncar платформ мэдээллийг зөвхөн зээлийн хүсэлт боловсруулахад ашиглана.
        </Checkbox>
        <div className="mt-1 grid grid-cols-2 gap-2 rounded-lg bg-gray-50 p-3 md:grid-cols-4">
          {[
            { label: "ИЛГЭЭГДСЭН", classes: "bg-primary-50 border-[1.5px] border-primary-200 text-primary-600" },
            { label: "ШАЛГАЖ БАЙНА", classes: "bg-orange-bg text-orange-warning" },
            { label: "БАТЛАГДСАН", classes: "bg-green-bg text-green-active" },
            { label: "ТАТГАЛЗСАН", classes: "bg-red-bg text-red-danger" },
          ].map((item) => (
            <div key={item.label} className={`rounded-lg p-2 text-center ${item.classes}`}>
              <div className="text-[11px] font-bold">{item.label}</div>
            </div>
          ))}
        </div>
        <Button size="lg" fullWidth className="mt-1">
          <CreditCard className="h-4 w-4" strokeWidth={2.2} />
          Хүсэлт илгээх
        </Button>
      </Form>
    </div>
  );
}
