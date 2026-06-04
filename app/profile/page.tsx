import { Form } from "antd";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import { CarPlaceholderIcon } from "@/components/icons";

export default function ProfilePage() {
  return (
    <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-7 px-4 py-8 md:grid-cols-[240px_1fr] md:px-8">
      <ProfileSidebar />
      <div className="flex flex-col gap-5">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-5 border-b border-gray-100 pb-4 text-base font-bold text-gray-900">Хувийн мэдээлэл</div>
          <Form component="div" className="contents">
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Нэр</label>
                <Input defaultValue="Батбаяр" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Овог</label>
                <Input defaultValue="Дорж" />
              </div>
            </div>
            <div className="mb-2 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Утасны дугаар</label>
                <Input defaultValue="+976 9900 0000" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">И-мэйл</label>
                <Input defaultValue="batbayar@mail.mn" />
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <Button>Хадгалах</Button>
            </div>
          </Form>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-5 border-b border-gray-100 pb-4 text-base font-bold text-gray-900">Миний зарууд</div>
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
              <Button href="/premium" variant="ghost" size="sm">
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
              <Button variant="ghost" size="sm" disabled>
                Premium болгох
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
