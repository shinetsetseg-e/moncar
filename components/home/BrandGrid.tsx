import { brands } from "@/data/brands";

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-[1.5px] border-gray-200 bg-white px-4 py-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-600">{brand.icon}</div>
          <div className="text-[13px] font-semibold text-gray-700">{brand.name}</div>
          <div className="text-xs text-gray-400">{brand.count}</div>
        </div>
      ))}
    </div>
  );
}
