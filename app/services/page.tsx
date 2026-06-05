import type { Metadata } from "next";
import PromoBanners from "@/components/home/PromoBanners";

export const metadata: Metadata = {
  title: "Үйлчилгээ | Монкар",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
      <div className="mb-8 max-w-[720px]">
        <h1 className="text-2xl font-bold text-gray-900">Үйлчилгээ</h1>
        <p className="mt-2 text-sm text-gray-500">
          Moncar-ийн зээлийн хүсэлт болон escrow үйлчилгээний мэдээллийг эндээс үзнэ үү.
        </p>
      </div>
      <PromoBanners />
    </div>
  );
}
