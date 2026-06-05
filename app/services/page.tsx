import type { Metadata } from "next";
import PromoBanners from "@/components/home/PromoBanners";
import { PageHeader } from "@/shared/components";

export const metadata: Metadata = {
  title: "Үйлчилгээ | Монкар",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
      <PageHeader
        title="Үйлчилгээ"
        subtitle="Moncar-ийн зээлийн хүсэлт болон escrow үйлчилгээний мэдээллийг эндээс үзнэ үү."
        contentClassName="max-w-[720px]"
      />
      <PromoBanners />
    </div>
  );
}
