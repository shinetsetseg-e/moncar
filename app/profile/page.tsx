import { Form } from "antd";
import { CarPlaceholderIcon } from "@/components/icons";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import { Badge, Button, FormField, Input, InfoCard, PageHeader } from "@/shared/components";

export default function ProfilePage() {
  return (
    <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-7 px-4 py-8 md:grid-cols-[240px_1fr] md:px-8">
      <ProfileSidebar />
      <div className="flex flex-col gap-5">
        <PageHeader title="Миний профайл" subtitle="Хувийн мэдээлэл болон зарын төлөвөө эндээс удирдана." className="mb-0" />

        <InfoCard className="p-6" title="Хувийн мэдээлэл">
          <Form component="div" className="contents">
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField label="Нэр">
                <Input defaultValue="Батбаяр" />
              </FormField>
              <FormField label="Овог">
                <Input defaultValue="Дорж" />
              </FormField>
            </div>
            <div className="mb-2 grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField label="Утасны дугаар">
                <Input defaultValue="+976 9900 0000" />
              </FormField>
              <FormField label="И-мэйл">
                <Input defaultValue="batbayar@mail.mn" />
              </FormField>
            </div>
            <div className="mt-2 flex justify-end">
              <Button>Хадгалах</Button>
            </div>
          </Form>
        </InfoCard>

        <InfoCard className="p-6" title="Миний зарууд">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3 rounded-lg border border-gray-200 p-3">
              <div className="flex h-[52px] w-[72px] shrink-0 items-center justify-center rounded-md bg-gray-100">
                <CarPlaceholderIcon className="h-7 w-10 opacity-100" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-900">Toyota Prius 30 · 2017</div>
                <div className="text-xs text-gray-500">₮28,500,000</div>
              </div>
              <Badge variant="new">Нийтлэгдсэн</Badge>
              <Button href="/premium" size="sm" variant="ghost">
                Premium болгох
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-lg border border-gray-200 p-3">
              <div className="flex h-[52px] w-[72px] shrink-0 items-center justify-center rounded-md bg-gray-100">
                <CarPlaceholderIcon className="h-7 w-10 opacity-100" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-900">Toyota Aqua · 2018</div>
                <div className="text-xs text-gray-500">₮22,000,000</div>
              </div>
              <Badge variant="hot">Хянагдаж байна</Badge>
              <Button disabled size="sm" variant="ghost">
                Premium болгох
              </Button>
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
