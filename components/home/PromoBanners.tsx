import Button from "@/components/ui/Button";

export default function PromoBanners() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="grid flex-1 grid-cols-1 items-center gap-8 rounded-2xl border border-primary-200 bg-primary-50 px-8 py-10 md:grid-cols-[1fr_auto] md:px-12">
        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-[1.5px] text-primary-600">🔒 Аюулгүй төлбөр</div>
          <div className="mb-2 text-[22px] font-bold text-primary-800">Escrow хамгаалалттай худалдан авалт</div>
          <div className="mb-5 text-[15px] text-primary-700">Худалдан авагч болон борлуулагчийн төлбөрийн эрсдэлийг бууруулна.</div>
          <div className="flex flex-wrap gap-3">
            <Button href="/escrow">Дэлгэрэнгүй мэдэх</Button>
            <Button href="/escrow" variant="ghost">
              Холбогдох
            </Button>
          </div>
        </div>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="mx-auto">
          <circle cx="60" cy="60" r="55" fill="var(--primary-100)" />
          <path d="M60 30 L80 40 V60 C80 75 60 90 60 90 C60 90 40 75 40 60 V40 Z" fill="var(--primary-200)" stroke="var(--primary-600)" strokeWidth="2" />
          <path d="M48 60 L56 68 L72 52" stroke="var(--primary-700)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="grid flex-1 grid-cols-1 items-center gap-8 rounded-2xl bg-primary-600 px-8 py-10 text-white md:grid-cols-[1fr_auto] md:px-12">
        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-[1.5px] opacity-70">IIC ЗЭЭЛ</div>
          <div className="mb-2 text-[22px] font-bold">Машинаа зээлээр авах боломжтой</div>
          <div className="mb-5 text-[15px] opacity-85">IIC банктай хамтран зээлийн хүсэлтийг шууд платформоос илгээх боломжтой.</div>
          <div className="flex flex-wrap gap-3">
            <Button href="/loan" variant="white">
              Зээлийн хүсэлт илгээх
            </Button>
            <Button href="/loan" variant="outline-white">
              Дэлгэрэнгүй
            </Button>
          </div>
        </div>
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="mx-auto">
          <rect x="10" y="20" width="100" height="65" rx="8" fill="white" opacity=".15" />
          <rect x="10" y="20" width="100" height="20" rx="8" fill="white" opacity=".2" />
          <circle cx="90" cy="70" r="18" fill="white" opacity=".2" />
          <path d="M83 70 L87 74 L97 64" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
