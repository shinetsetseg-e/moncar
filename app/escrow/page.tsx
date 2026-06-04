import Button from "@/components/ui/Button";

export default function EscrowPage() {
  return (
    <div className="mx-auto max-w-[960px] px-4 py-10 md:px-8">
      <div className="mb-10 rounded-2xl bg-primary-50 px-8 py-[60px] text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600">
          <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 2 L20 6 V12 C20 17 12 22 12 22 C12 22 4 17 4 12 V6 Z" />
            <path d="M9 12 L11 14 L15 10" />
          </svg>
        </div>
        <h1 className="mb-3 text-[32px] font-bold text-gray-900">Escrow гэж юу вэ?</h1>
        <p className="mx-auto max-w-[560px] text-base text-gray-600">
          Худалдан авагч, борлуулагчийн төлбөрийн аюулгүй байдлыг хангах зуучлалын шийдэл. Машины худалдан авалтаа найдвартай хийж болно.
        </p>
      </div>

      <div className="my-7 grid grid-cols-1 gap-5 md:grid-cols-3">
        {[
          {
            icon: <path d="M12 2 L20 6 V12 C20 17 12 22 12 22 C12 22 4 17 4 12 V6 Z" />,
            title: "Төлбөрийн эрсдэл буурна",
            body: "Мөнгө шилжүүлэхийн өмнө гуравдагч этгээд хадгалж байна",
          },
          {
            icon: <path d="M20 6 9 17l-5-5" />,
            title: "Итгэлцэл нэмэгдэнэ",
            body: "Худалдагч болон худалдан авагч хоёулаа хамгаалагдана",
          },
          {
            icon: (
              <>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="7" y1="8" x2="17" y2="8" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="7" y1="16" x2="13" y2="16" />
              </>
            ),
            title: "Баримтжуулалт сайжирна",
            body: "Бүх гүйлгээний баримтыг автоматаар хадгалж, хуваалцана",
          },
        ].map((item, index) => (
          <div key={index} className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary-50">
              <svg width="20" height="20" fill="none" stroke="var(--primary-600)" strokeWidth="2" viewBox="0 0 24 24">
                {item.icon}
              </svg>
            </div>
            <div className="mb-1.5 text-[15px] font-bold text-gray-900">{item.title}</div>
            <div className="text-[13px] text-gray-500">{item.body}</div>
          </div>
        ))}
      </div>

      <div className="mb-5 text-center text-xl font-bold text-gray-900">Хэрхэн ажилладаг вэ?</div>
      <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { num: "1", title: "Машинаа сонгоно", body: "MonCar дээрх машинуудаас тохирохоо сонгоно" },
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
