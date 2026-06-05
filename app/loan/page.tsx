import { CarPlaceholderIcon } from "@/components/icons";
import { getListingById } from "@/data/listings";
import { Button, Checkbox, FormField, Input, PageHeader, Select, StatusChip } from "@/shared";
import { Form } from "antd";
import { CreditCard } from "lucide-react";

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
      <PageHeader label="IIC зээл" title="Зээлийн хүсэлт илгээх" />

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
          <FormField label="Нэр" required>
            <Input placeholder="Овог Нэр" />
          </FormField>
          <FormField label="Утасны дугаар" required>
            <Input placeholder="9900 0000" />
          </FormField>
        </div>
        <FormField label="И-мэйл">
          <Input placeholder="name@email.com" type="email" />
        </FormField>

        <div className="border-b border-gray-100 pb-3 pt-1 text-base font-bold text-gray-900">Зээлийн мэдээлэл</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField label="Зээлийн дүн" required>
            <Input placeholder="₮80,000,000" />
          </FormField>
          <FormField label="Урьдчилгаа" required>
            <Input placeholder="₮15,000,000" />
          </FormField>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField label="Ажил эрхлэлт">
            <Select>
              <option>Байнгын ажилтан</option>
              <option>Хувиараа хөдөлмөр эрхлэгч</option>
              <option>Бизнес эрхлэгч</option>
            </Select>
          </FormField>
          <FormField label="Сарын орлого">
            <Input placeholder="₮2,500,000" />
          </FormField>
        </div>

        <Checkbox defaultChecked className="!items-start !text-sm !text-gray-600">
          Би мэдээлэл дамжуулахыг зөвшөөрч байна. IIC банк болон Moncar платформ мэдээллийг зөвхөн зээлийн хүсэлт боловсруулахад ашиглана.
        </Checkbox>

        <div className="mt-1 grid grid-cols-2 gap-2 rounded-lg bg-gray-50 p-3 md:grid-cols-4">
          {[
            { label: "ИЛГЭЭГДСЭН", variant: "info" as const },
            { label: "ШАЛГАЖ БАЙНА", variant: "warning" as const },
            { label: "БАТЛАГДСАН", variant: "success" as const },
            { label: "ТАТГАЛЗСАН", variant: "error" as const },
          ].map((item) => (
            <div key={item.label} className="flex justify-center">
              <StatusChip className="px-3 py-2" variant={item.variant}>
                {item.label}
              </StatusChip>
            </div>
          ))}
        </div>

        <Button className="mt-1" fullWidth size="lg">
          <CreditCard className="h-4 w-4" strokeWidth={2.2} />
          Хүсэлт илгээх
        </Button>
      </Form>
    </div>
  );
}
