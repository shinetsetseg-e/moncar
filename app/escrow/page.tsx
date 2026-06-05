import { CircleCheck, FileText, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function EscrowPage() {
  return (
    <div className="mx-auto max-w-[960px] px-4 py-10 md:px-8">
      <div className="mb-10 rounded-2xl bg-primary-50 px-8 py-[60px] text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600">
          <ShieldCheck className="h-7 w-7 text-white" strokeWidth={2.5} />
        </div>
        <h1 className="mb-3 text-[32px] font-bold text-gray-900">Escrow гэж юу вэ?</h1>
        <p className="mx-auto max-w-[560px] text-base text-gray-600">
          Худалдан авагч, борлуулагчийн төлбөрийн аюулгүй байдлыг хангах зуучлалын шийдэл. Машины худалдан авалтаа найдвартай хийж болно.
        </p>
      </div>

      <div className="my-7 grid grid-cols-1 gap-5 md:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            title: "Төлбөрийн эрсдэл буурна",
            body: "Мөнгө шилжүүлэхийн өмнө гуравдагч этгээд хадгалж байна",
          },
          {
            icon: CircleCheck,
            title: "Итгэлцэл нэмэгдэнэ",
            body: "Худалдагч болон худалдан авагч хоёулаа хамгаалагдана",
          },
          {
            icon: FileText,
            title: "Баримтжуулалт сайжирна",
            body: "Бүх гүйлгээний баримтыг автоматаар хадгалж, хуваалцана",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary-50">
                <Icon className="h-5 w-5 text-primary-600" strokeWidth={2} />
              </div>
              <div className="mb-1.5 text-[15px] font-bold text-gray-900">{item.title}</div>
              <div className="text-[13px] text-gray-500">{item.body}</div>
            </div>
          );
        })}
      </div>

      <div className="mb-5 text-center text-xl font-bold text-gray-900">Хэрхэн ажилладаг вэ?</div>
      <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { num: "1", title: "Машинаа сонгоно", body: "MonCar дээрх машинуудaaс тохирохоо сонгоно" },
          { num: "2", title: "Escrow нөхцөлтэй танилцана", body: "Худалдааны нөхцөлийг хоёр тал зөвшөөрнө" },
          { num: "3", title: "Холбоо барина", body: "MonCar команд таны Escrow хүсэлтийг боловсруулна" },
        ].map((item) => (
          <div key={item.num} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <div className="mx-auto mb-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-base font-bold text-white">{item.num}</div>
            <div className="mb-1.5 text-[15px] font-bold text-gray-900">{item.title}</div>
            <div className="text-[13px] text-gray-500">{item.body}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-primary-200 bg-primary-50 p-8 text-center">
        <div className="mb-2 text-lg font-bold text-primary-800">Escrow ашиглах уу?</div>
        <div className="mb-5 text-sm text-primary-600">Phase 0 — Одоогоор мэдээлэл болон холбоо барих боломжтой</div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button>Дэлгэрэнгүй мэдээлэл авах</Button>
          <Button variant="secondary">Холбогдох</Button>
        </div>
      </div>
    </div>
  );
}
