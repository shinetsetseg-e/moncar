import { CircleDollarSign, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PromoBanners() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="grid flex-1 grid-cols-1 items-center gap-8 rounded-2xl border border-primary-200 bg-primary-50 px-8 py-10 md:grid-cols-[1fr_auto] md:px-12">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-primary-600">
            <ShieldCheck className="h-4 w-4" strokeWidth={2} />
            Аюулгүй төлбөр
          </div>
          <div className="mb-2 text-[22px] font-bold text-primary-800">Escrow хамгаалалттай худалдан авалт</div>
          <div className="mb-5 text-[15px] text-primary-700">
            Худалдан авагч болон борлуулагчийн төлбөрийн эрсдэлийг бууруулж, илүү найдвартай арилжаа хийхэд тусална.
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/escrow">Дэлгэрэнгүй мэдэх</Button>
            <Button href="/escrow" variant="ghost">
              Холбогдох
            </Button>
          </div>
        </div>
        <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-primary-100">
          <ShieldCheck className="h-16 w-16 text-primary-700" strokeWidth={1.8} />
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 items-center gap-8 rounded-2xl bg-primary-600 px-8 py-10 text-white md:grid-cols-[1fr_auto] md:px-12">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] opacity-70">
            <CircleDollarSign className="h-4 w-4" strokeWidth={2} />
            IIC зээл
          </div>
          <div className="mb-2 text-[22px] font-bold">Машинаа зээлээр авах боломжтой</div>
          <div className="mb-5 text-[15px] opacity-85">
            IIC банктай хамтарсан зээлийн хүсэлтийг Moncar-оос шууд илгээж, сонгосон машиндаа санхүүжилт авах боломжтой.
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/loan" variant="white">
              Зээлийн хүсэлт илгээх
            </Button>
            <Button href="/loan" variant="outline-white">
              Дэлгэрэнгүй
            </Button>
          </div>
        </div>
        <div className="mx-auto flex h-[100px] w-[120px] items-center justify-center rounded-2xl bg-white/15">
          <CircleDollarSign className="h-14 w-14 text-white" strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}
