"use client";

import { Button, Input, Slider } from "antd";
import {
  ArrowRight,
  Car,
  Check,
  ChevronLeft,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type BrandName = "Toyota" | "Lexus" | "Mercedes-Benz" | "BMW" | "Hyundai";

const carData: Record<BrandName, string[]> = {
  Toyota: [
    "Prius",
    "Aqua",
    "Camry",
    "Corolla",
    "Crown",
    "Harrier",
    "Land Cruiser",
    "Land Cruiser Prado",
    "RAV4",
    "Highlander",
    "Vitz",
    "Yaris",
    "Sienta",
    "Noah",
    "Voxy",
    "Alphard",
    "Vellfire",
    "Hiace",
    "Hilux",
    "Fortuner",
    "C-HR",
    "Raize",
    "Mark X",
    "Sai",
    "Wish",
  ],
  Lexus: [
    "RX",
    "NX",
    "LX",
    "GX",
    "UX",
    "ES",
    "IS",
    "GS",
    "LS",
    "RC",
    "LC",
    "CT",
    "HS",
    "RX 300",
    "RX 350",
    "RX 450h",
    "NX 200t",
    "NX 300",
    "NX 350h",
    "LX 570",
    "LX 600",
    "GX 460",
  ],
  "Mercedes-Benz": [
    "A-Class",
    "B-Class",
    "C-Class",
    "E-Class",
    "S-Class",
    "CLA",
    "CLS",
    "GLA",
    "GLB",
    "GLC",
    "GLE",
    "GLS",
    "G-Class",
    "V-Class",
    "Sprinter",
    "Maybach S-Class",
    "AMG GT",
    "EQA",
    "EQB",
    "EQC",
    "EQE",
    "EQS",
  ],
  BMW: [
    "1 Series",
    "2 Series",
    "3 Series",
    "4 Series",
    "5 Series",
    "6 Series",
    "7 Series",
    "8 Series",
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
    "Z4",
    "i3",
    "i4",
    "i5",
    "i7",
    "iX",
    "M3",
    "M4",
    "M5",
  ],
  Hyundai: [
    "Accent",
    "Avante",
    "Elantra",
    "Sonata",
    "Grandeur",
    "Tucson",
    "Santa Fe",
    "Palisade",
    "Creta",
    "Kona",
    "Venue",
    "Staria",
    "Porter",
    "i10",
    "i20",
    "i30",
    "Ioniq",
    "Ioniq 5",
    "Ioniq 6",
    "Genesis Coupe",
    "Veloster",
    "Verna",
  ],
};

const brands = Object.keys(carData) as BrandName[];

const formatPrice = (value: number) => {
  if (value >= 1_000_000_000) {
    return `₮${value / 1_000_000_000} тэрбум`;
  }

  return `₮${value / 1_000_000} сая`;
};

export default function Hero() {
  const router = useRouter();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<BrandName | undefined>();
  const [selectedModel, setSelectedModel] = useState<string | undefined>();
  const [brandQuery, setBrandQuery] = useState("");
  const [modelQuery, setModelQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    20_000_000,
    120_000_000,
  ]);

  useEffect(() => {
    if (!isSearchOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  const filteredBrands = useMemo(() => {
    return brands.filter((brand) =>
      brand.toLowerCase().includes(brandQuery.toLowerCase().trim()),
    );
  }, [brandQuery]);

  const availableModels = selectedBrand ? carData[selectedBrand] : [];

  const filteredModels = useMemo(() => {
    return availableModels.filter((model) =>
      model.toLowerCase().includes(modelQuery.toLowerCase().trim()),
    );
  }, [availableModels, modelQuery]);

  const searchLabel = useMemo(() => {
    const parts = [
      selectedBrand,
      selectedModel,
      `${formatPrice(priceRange[0])} - ${formatPrice(priceRange[1])}`,
    ].filter(Boolean);

    return parts.length > 0 ? parts.join(" · ") : "Марк, загвар, үнэ хайх";
  }, [priceRange, selectedBrand, selectedModel]);

  const handleSelectBrand = (brand: BrandName) => {
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setModelQuery("");
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (selectedBrand) params.set("brand", selectedBrand);
    if (selectedModel) params.set("model", selectedModel);

    params.set("minPrice", String(priceRange[0]));
    params.set("maxPrice", String(priceRange[1]));

    router.push(`/marketplace?${params.toString()}`);
  };

  const handleReset = () => {
    setSelectedBrand(undefined);
    setSelectedModel(undefined);
    setBrandQuery("");
    setModelQuery("");
    setPriceRange([20_000_000, 120_000_000]);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <section className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-[#f7f8fb] px-4 py-8 md:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-[2px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-128px)] w-full max-w-6xl flex-col items-center justify-center text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm backdrop-blur">
          <Car className="h-4 w-4 text-primary-600" />
          Монголын авто зарын нэгдсэн систем
        </div>

        <h1 className="m-0 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 sm:text-5xl md:text-7xl">
          Хязгааргүй сонголтыг
          <span className="relative mx-2 inline-block text-primary-600">
            ухаалгаар
            <span className="absolute -bottom-2 left-0 -z-10 h-4 w-full rounded-full bg-primary-200/80" />
          </span>
          шийднэ
        </h1>

        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="mt-10 flex w-full max-w-3xl items-center gap-3 rounded-[28px] border border-gray-200 bg-white p-3 text-left shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(15,23,42,0.18)] md:rounded-full"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white">
            <Search className="h-5 w-5" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
              Хайлт эхлүүлэх
            </span>
            <span className="mt-1 block truncate text-base font-bold text-gray-950 md:text-lg">
              {searchLabel}
            </span>
          </span>

          <span className="hidden h-12 items-center gap-2 rounded-full bg-primary-600 px-5 text-sm font-bold text-white md:flex">
            Дэлгэрэнгүй хайх
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>

      <div
        className={[
          "fixed inset-0 z-[9999] bg-white transition-all duration-500",
          isSearchOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-4 py-4 md:px-8 md:py-6">
          <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-gray-100 bg-white pb-4 pt-1">
            <button
              type="button"
              aria-label="Буцах"
              onClick={closeSearch}
              className="relative z-30 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Буцах
            </button>

            <div className="hidden text-center md:block">
              <p className="m-0 text-sm font-bold text-gray-400">
                Moncar advanced search
              </p>
              <h2 className="m-0 text-xl font-black tracking-[-0.03em] text-gray-950">
                Тохирох машинаа сонго
              </h2>
            </div>

            <button
              type="button"
              aria-label="Хайлтыг хаах"
              onClick={closeSearch}
              className="relative z-30 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white transition hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-y-auto py-4 md:grid-cols-[1fr_1.15fr_0.85fr] md:gap-6 md:py-6">
            <div className="flex min-h-[360px] flex-col rounded-[32px] border border-gray-200 bg-[#fafafa] p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="m-0 text-xs font-black uppercase tracking-[0.18em] text-primary-600">
                    01
                  </p>
                  <h3 className="m-0 text-2xl font-black tracking-[-0.04em] text-gray-950">
                    Марк сонгох
                  </h3>
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-500 shadow-sm">
                  {brands.length} марк
                </span>
              </div>

              <Input
                allowClear
                value={brandQuery}
                onChange={(event) => setBrandQuery(event.target.value)}
                prefix={<Search className="h-4 w-4 text-gray-400" />}
                placeholder="Марк хайх..."
                className="mb-4 !rounded-2xl !border-gray-200 !px-4 !py-3 !font-semibold"
              />

              <div className="grid grid-cols-1 gap-3 overflow-y-auto pr-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {filteredBrands.map((brand) => {
                  const isActive = selectedBrand === brand;

                  return (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => handleSelectBrand(brand)}
                      className={[
                        "group flex items-center justify-between rounded-3xl border p-4 text-left transition-all duration-300",
                        isActive
                          ? "border-gray-950 bg-gray-950 text-white shadow-xl"
                          : "border-gray-200 bg-white text-gray-900 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md",
                      ].join(" ")}
                    >
                      <span>
                        <span className="block text-lg font-black">
                          {brand}
                        </span>
                        <span
                          className={[
                            "mt-1 block text-sm font-semibold",
                            isActive ? "text-white/65" : "text-gray-400",
                          ].join(" ")}
                        >
                          {carData[brand].length} загвар
                        </span>
                      </span>

                      <span
                        className={[
                          "flex h-8 w-8 items-center justify-center rounded-full transition",
                          isActive
                            ? "bg-white text-gray-950"
                            : "bg-gray-100 text-gray-400 group-hover:bg-gray-950 group-hover:text-white",
                        ].join(" ")}
                      >
                        {isActive ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex min-h-[360px] flex-col rounded-[32px] border border-gray-200 bg-[#fafafa] p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="m-0 text-xs font-black uppercase tracking-[0.18em] text-primary-600">
                    02
                  </p>
                  <h3 className="m-0 text-2xl font-black tracking-[-0.04em] text-gray-950">
                    Загвар сонгох
                  </h3>
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-500 shadow-sm">
                  {selectedBrand
                    ? `${availableModels.length} загвар`
                    : "Эхлээд марк"}
                </span>
              </div>

              <Input
                allowClear
                disabled={!selectedBrand}
                value={modelQuery}
                onChange={(event) => setModelQuery(event.target.value)}
                prefix={<Search className="h-4 w-4 text-gray-400" />}
                placeholder={
                  selectedBrand ? "Загвар хайх..." : "Марк сонгосны дараа хайна"
                }
                className="mb-4 !rounded-2xl !border-gray-200 !px-4 !py-3 !font-semibold"
              />

              {!selectedBrand ? (
                <div className="flex flex-1 flex-col items-center justify-center rounded-[28px] border border-dashed border-gray-200 bg-white p-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                    <Car className="h-6 w-6 text-gray-400" />
                  </div>
                  <p className="m-0 text-lg font-black text-gray-950">
                    Марк сонгоно уу
                  </p>
                  <p className="m-0 mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    Марк сонгосны дараа тухайн машины загварууд автоматаар
                    харагдана.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-4">
                  {filteredModels.map((model) => {
                    const isActive = selectedModel === model;

                    return (
                      <button
                        key={model}
                        type="button"
                        onClick={() => setSelectedModel(model)}
                        className={[
                          "min-h-16 rounded-2xl border px-3 py-3 text-left text-sm font-black transition-all duration-300",
                          isActive
                            ? "border-primary-600 bg-primary-600 text-white shadow-lg"
                            : "border-gray-200 bg-white text-gray-800 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md",
                        ].join(" ")}
                      >
                        {model}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex min-h-[360px] flex-col rounded-[32px] border border-gray-200 bg-gray-950 p-4 text-white md:p-5">
              <div className="mb-6">
                <p className="m-0 text-xs font-black uppercase tracking-[0.18em] text-primary-300">
                  03
                </p>
                <h3 className="m-0 text-2xl font-black tracking-[-0.04em]">
                  Үнийн хүрээ
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Өөрт тохирох төсвөө тохируул.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-5 text-gray-950">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-white">
                    <SlidersHorizontal className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-gray-400">
                      Үнэ
                    </p>
                    <p className="m-0 text-lg font-black tracking-[-0.03em]">
                      {formatPrice(priceRange[0])} —{" "}
                      {formatPrice(priceRange[1])}
                    </p>
                  </div>
                </div>

                <Slider
                  range
                  min={1_000_000}
                  max={500_000_000}
                  step={1_000_000}
                  value={priceRange}
                  onChange={(value) => setPriceRange(value as [number, number])}
                  tooltip={{
                    formatter: (value) =>
                      value ? `₮${value.toLocaleString()}` : "",
                  }}
                  className="mt-8"
                />

                <div className="mt-5 flex justify-between text-xs font-bold text-gray-400">
                  <span>₮1 сая</span>
                  <span>₮500 сая</span>
                </div>
              </div>

              <div className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  Сонгосон хайлт
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-white/45">Марк</span>
                    <strong>{selectedBrand ?? "Сонгоогүй"}</strong>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/45">Загвар</span>
                    <strong>{selectedModel ?? "Сонгоогүй"}</strong>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/45">Үнэ</span>
                    <strong className="text-right">
                      {formatPrice(priceRange[0])} -{" "}
                      {formatPrice(priceRange[1])}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
                <Button
                  onClick={handleReset}
                  className="!h-[52px] !rounded-2xl !border-white/15 !bg-white/10 !font-bold !text-white hover:!bg-white/15"
                >
                  Цэвэрлэх
                </Button>

                <Button
                  type="primary"
                  onClick={handleSearch}
                  className="!h-[52px] !rounded-2xl !font-black"
                >
                  Хайх
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}