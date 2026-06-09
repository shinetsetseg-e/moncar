"use client";

import { Button, Input, Slider } from "antd";
import {
  ArrowRight,
  Car,
  Check,
  ChevronLeft,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type BrandName =
  | "Toyota"
  | "Lexus"
  | "Mercedes-Benz"
  | "BMW"
  | "Hyundai";

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
    "RX 300",
    "RX 350",
    "RX 450h",
    "NX 300",
    "LX 570",
    "LX 600",
    "GX 460",
  ],
  "Mercedes-Benz": [
    "A-Class",
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
    "Maybach S-Class",
    "AMG GT",
    "EQA",
    "EQE",
    "EQS",
  ],
  BMW: [
    "1 Series",
    "2 Series",
    "3 Series",
    "4 Series",
    "5 Series",
    "7 Series",
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
    "i7",
    "iX",
    "M3",
    "M4",
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
  ],
};

const brands = Object.keys(carData) as BrandName[];

const popularBrands: BrandName[] = ["Toyota", "Lexus", "Mercedes-Benz"];

const popularModels: Partial<Record<BrandName, string[]>> = {
  Toyota: ["Prius", "Land Cruiser", "Harrier", "Aqua"],
  Lexus: ["RX", "NX", "LX", "GX"],
  "Mercedes-Benz": ["E-Class", "S-Class", "GLE", "G-Class"],
  BMW: ["5 Series", "X5", "X6", "3 Series"],
  Hyundai: ["Sonata", "Santa Fe", "Tucson", "Palisade"],
};

const formatPrice = (value: number) => {
  if (value >= 1_000_000_000) {
    return `₮${value / 1_000_000_000} тэрбум`;
  }

  return `₮${value / 1_000_000} сая`;
};

const formatCompactPrice = (value: number) => {
  if (value >= 1_000_000_000) {
    return `${value / 1_000_000_000} тэрбум`;
  }

  return `${value / 1_000_000} сая`;
};

const normalizeText = (value: string) => value.toLowerCase().trim();

export default function Hero() {
  const router = useRouter();
  const modelSectionRef = useRef<HTMLDivElement | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<BrandName | undefined>();
  const [selectedModel, setSelectedModel] = useState<string | undefined>();
  const [brandQuery, setBrandQuery] = useState("");
  const [modelQuery, setModelQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    20_000_000,
    120_000_000,
  ]);

  const filteredBrands = useMemo(() => {
    const query = normalizeText(brandQuery);

    if (!query) return brands;

    return brands.filter((brand) => normalizeText(brand).includes(query));
  }, [brandQuery]);

  const availableModels = selectedBrand ? carData[selectedBrand] : [];

  const filteredModels = useMemo(() => {
    const query = normalizeText(modelQuery);

    if (!selectedBrand) return [];

    if (!query) return availableModels;

    return availableModels.filter((model) =>
      normalizeText(model).includes(query),
    );
  }, [availableModels, modelQuery, selectedBrand]);

  const selectedPopularModels = selectedBrand
    ? popularModels[selectedBrand] ?? []
    : [];

  const searchLabel = useMemo(() => {
    const items = [
      selectedBrand,
      selectedModel,
      `${formatCompactPrice(priceRange[0])} - ${formatCompactPrice(
        priceRange[1],
      )}`,
    ].filter(Boolean);

    return items.length > 0
      ? items.join(" · ")
      : "Марк, загвар, үнийн хүрээгээр хайх";
  }, [priceRange, selectedBrand, selectedModel]);

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
    document.body.style.overflow = isSearchOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSelectBrand = (brand: BrandName) => {
    setSelectedBrand(brand);
    setSelectedModel(undefined);
    setModelQuery("");

    setTimeout(() => {
      modelSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  const handleReset = () => {
    setSelectedBrand(undefined);
    setSelectedModel(undefined);
    setBrandQuery("");
    setModelQuery("");
    setPriceRange([20_000_000, 120_000_000]);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (selectedBrand) params.set("brand", selectedBrand);
    if (selectedModel) params.set("model", selectedModel);

    params.set("minPrice", String(priceRange[0]));
    params.set("maxPrice", String(priceRange[1]));

    router.push(`/marketplace?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[80svh] min-h-[560px] overflow-visible bg-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-[62%_center] md:bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 md:px-8">
          <div className="max-w-3xl pt-6 text-left md:pt-10">
            <h1 className="m-0 text-4xl font-black leading-[1.06] tracking-[-0.055em] text-white sm:text-5xl md:text-7xl">
              Хязгааргүй сонголтыг
              <br />
              ухаалгаар
              <br />
              шийднэ
            </h1>

            <button
              type="button"
              className="mt-8 inline-flex h-12 items-center justify-center border border-white/70 bg-transparent px-6 text-sm font-bold text-white transition hover:bg-white hover:text-gray-950"
            >
              Дэлгэрэнгүй харах
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-5xl -translate-x-1/2 translate-y-[45%] px-4">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="group mx-auto flex w-full items-center gap-3 rounded-[32px] border border-gray-100 bg-white p-3 text-left shadow-[0_28px_90px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_120px_rgba(15,23,42,0.28)] md:max-w-3xl md:rounded-full"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white transition group-hover:scale-105">
              <Search className="h-5 w-5" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                Хайлт эхлүүлэх
              </span>
              <span className="mt-1 block truncate text-base font-black text-gray-950 md:text-lg">
                {searchLabel}
              </span>
            </span>

            <span className="hidden h-12 items-center gap-2 rounded-full bg-primary-600 px-5 text-sm font-black text-white md:flex">
              Хайх
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>

      <div className="h-20 bg-white md:h-24" />

      <div
        className={[
          "fixed inset-0 z-[9999] bg-white transition-all duration-500",
          isSearchOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col">
          <div className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8">
              <button
                type="button"
                aria-label="Буцах"
                onClick={closeSearch}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-black text-gray-700 transition hover:bg-gray-50"
              >
                <ChevronLeft className="h-4 w-4" />
                Буцах
              </button>

              <div className="hidden min-w-0 flex-1 text-center md:block">
                <p className="m-0 text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                  Хайлтын нөхцөл
                </p>
                <p className="m-0 truncate text-sm font-black text-gray-950">
                  {searchLabel}
                </p>
              </div>

              <button
                type="button"
                aria-label="Хайлтыг хаах"
                onClick={closeSearch}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white transition hover:bg-gray-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 pb-28 md:grid-cols-[340px_minmax(0,1fr)_360px] md:gap-6 md:px-8 md:py-6 md:pb-6">
              <div className="rounded-[32px] border border-gray-200 bg-[#fafafa] p-4 md:p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="m-0 text-2xl font-black tracking-[-0.04em] text-gray-950">
                      Марк
                    </h2>
                  </div>

                  {selectedBrand && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedBrand(undefined);
                        setSelectedModel(undefined);
                        setModelQuery("");
                      }}
                      className="rounded-full bg-gray-950 px-3 py-1 text-xs font-black text-white"
                    >
                      {selectedBrand} ×
                    </button>
                  )}
                </div>

                <Input
                  allowClear
                  value={brandQuery}
                  onChange={(event) => setBrandQuery(event.target.value)}
                  prefix={<Search className="h-4 w-4 text-gray-400" />}
                  placeholder="Марк хайх..."
                  className="mb-4 !rounded-2xl !border-gray-200 !px-4 !py-3 !font-semibold"
                />

                {!brandQuery && (
                  <div className="mb-4 rounded-[24px] bg-white p-3 shadow-sm">
                    <p className="m-0 mb-2 text-xs font-black uppercase tracking-[0.16em] text-gray-400">
                      Их хайгддаг
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {popularBrands.map((brand) => (
                        <button
                          key={brand}
                          type="button"
                          onClick={() => handleSelectBrand(brand)}
                          className={[
                            "rounded-full border px-3 py-2 text-xs font-black transition",
                            selectedBrand === brand
                              ? "border-gray-950 bg-gray-950 text-white"
                              : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-950 hover:bg-gray-950 hover:text-white",
                          ].join(" ")}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="max-h-[430px] space-y-2 overflow-y-auto pr-1">
                  {filteredBrands.map((brand) => {
                    const isActive = selectedBrand === brand;

                    return (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => handleSelectBrand(brand)}
                        className={[
                          "group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all duration-200",
                          isActive
                            ? "border-gray-950 bg-gray-950 text-white shadow-lg"
                            : "border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:shadow-sm",
                        ].join(" ")}
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-black">
                            {brand}
                          </span>
                          <span
                            className={[
                              "mt-0.5 block text-xs font-bold",
                              isActive ? "text-white/60" : "text-gray-400",
                            ].join(" ")}
                          >
                            {carData[brand].length} загвар
                          </span>
                        </span>

                        <span
                          className={[
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition",
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

              <div
                ref={modelSectionRef}
                className={[
                  "rounded-[32px] border p-4 md:p-5",
                  selectedBrand
                    ? "border-gray-200 bg-[#fafafa]"
                    : "border-gray-100 bg-gray-50",
                ].join(" ")}
              >
                <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h2 className="m-0 text-2xl font-black tracking-[-0.04em] text-gray-950">
                      Загвар
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-gray-500 shadow-sm">
                      {selectedBrand
                        ? `${availableModels.length} загвар`
                        : "Марк сонгоогүй"}
                    </span>

                    {selectedModel && (
                      <button
                        type="button"
                        onClick={() => setSelectedModel(undefined)}
                        className="rounded-full bg-primary-600 px-3 py-1 text-xs font-black text-white"
                      >
                        {selectedModel} ×
                      </button>
                    )}
                  </div>
                </div>

                <Input
                  allowClear
                  disabled={!selectedBrand}
                  value={modelQuery}
                  onChange={(event) => setModelQuery(event.target.value)}
                  prefix={<Search className="h-4 w-4 text-gray-400" />}
                  placeholder={
                    selectedBrand
                      ? `${selectedBrand} загвар хайх...`
                      : "Марк сонгосны дараа загвар хайна"
                  }
                  className="mb-4 !rounded-2xl !border-gray-200 !px-4 !py-3 !font-semibold"
                />

                {!selectedBrand ? (
                  <div className="flex min-h-[380px] flex-col items-center justify-center rounded-[28px] border border-dashed border-gray-200 bg-white p-8 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                      <Car className="h-7 w-7 text-gray-400" />
                    </div>
                    <p className="m-0 text-lg font-black text-gray-950">
                      Машины марк сонгоно уу
                    </p>
                  </div>
                ) : (
                  <>
                    {!modelQuery && selectedPopularModels.length > 0 && (
                      <div className="mb-4 rounded-[24px] bg-white p-3 shadow-sm">
                        <p className="m-0 mb-2 text-xs font-black uppercase tracking-[0.16em] text-gray-400">
                          Их хайгддаг загвар
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {selectedPopularModels.slice(0, 4).map((model) => (
                            <button
                              key={model}
                              type="button"
                              onClick={() => setSelectedModel(model)}
                              className={[
                                "rounded-full border px-3 py-2 text-xs font-black transition",
                                selectedModel === model
                                  ? "border-primary-600 bg-primary-600 text-white"
                                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-950 hover:bg-gray-950 hover:text-white",
                              ].join(" ")}
                            >
                              {model}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {filteredModels.length === 0 ? (
                      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[28px] border border-dashed border-gray-200 bg-white p-8 text-center">
                        <Search className="mb-4 h-8 w-8 text-gray-300" />
                        <p className="m-0 text-lg font-black text-gray-950">
                          Илэрц олдсонгүй
                        </p>
                        <p className="m-0 mt-2 text-sm text-gray-500">
                          Загварын нэрээ өөрөөр бичиж хайгаарай.
                        </p>
                      </div>
                    ) : (
                      <div className="grid max-h-[470px] grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2 xl:grid-cols-3">
                        {filteredModels.map((model) => {
                          const isActive = selectedModel === model;

                          return (
                            <button
                              key={model}
                              type="button"
                              onClick={() => setSelectedModel(model)}
                              className={[
                                "group flex min-h-[56px] items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-black transition-all duration-200",
                                isActive
                                  ? "border-primary-600 bg-primary-600 text-white shadow-lg"
                                  : "border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:shadow-sm",
                              ].join(" ")}
                            >
                              <span className="truncate">{model}</span>

                              {isActive && (
                                <Check className="h-4 w-4 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="rounded-[32px] border border-gray-200 bg-gray-950 p-4 text-white md:p-5">
                <div className="mb-5">
                  <h2 className="m-0 text-2xl font-black tracking-[-0.04em]">
                    Үнэ
                  </h2>
                </div>

                <div className="rounded-[28px] bg-white p-5 text-gray-950">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-white">
                      <SlidersHorizontal className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="m-0 text-xs font-black uppercase tracking-[0.14em] text-gray-400">
                        Үнийн хүрээ
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
                    onChange={(value) =>
                      setPriceRange(value as [number, number])
                    }
                    tooltip={{
                      formatter: (value) =>
                        value ? `₮${value.toLocaleString()}` : "",
                    }}
                    className="mt-8"
                  />

                  <div className="mt-5 flex justify-between text-xs font-black text-gray-400">
                    <span>₮1 сая</span>
                    <span>₮500 сая</span>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-2">
                    {[
                      [10_000_000, 50_000_000],
                      [50_000_000, 150_000_000],
                      [150_000_000, 350_000_000],
                    ].map(([min, max]) => (
                      <button
                        key={`${min}-${max}`}
                        type="button"
                        onClick={() => setPriceRange([min, max])}
                        className="rounded-2xl bg-gray-100 px-3 py-3 text-xs font-black text-gray-700 transition hover:bg-gray-950 hover:text-white"
                      >
                        {formatCompactPrice(min)} - {formatCompactPrice(max)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-white/40">
                    Хайлтын хураангуй
                  </p>

                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-white/45">Марк</span>
                      <strong>{selectedBrand ?? "Бүгд"}</strong>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-white/45">Загвар</span>
                      <strong className="max-w-[180px] truncate text-right">
                        {selectedModel ?? "Бүгд"}
                      </strong>
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

                <div className="mt-4 hidden grid-cols-2 gap-3 md:grid">
                  <Button
                    onClick={handleReset}
                    className="!h-[52px] !rounded-2xl !border-white/15 !bg-white/10 !font-black !text-white hover:!bg-white/15"
                  >
                    <span className="inline-flex items-center gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Цэвэрлэх
                    </span>
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

          <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 p-4 backdrop-blur-xl md:hidden">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="m-0 text-xs font-black uppercase tracking-[0.14em] text-gray-400">
                  Сонгосон
                </p>
                <p className="m-0 truncate text-sm font-black text-gray-950">
                  {searchLabel}
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            <Button
              type="primary"
              onClick={handleSearch}
              className="!h-[52px] !w-full !rounded-2xl !font-black"
            >
              Хайх
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}