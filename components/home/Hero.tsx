"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Select, Slider } from "antd";
import { useEffect, useState } from "react";

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);

    const timer = window.setInterval(() => {
      start += step;

      if (start >= target) {
        setValue(target);
        window.clearInterval(timer);
        return;
      }

      setValue(Math.floor(start));
    }, 16);

    return () => window.clearInterval(timer);
  }, [duration, target]);

  return value.toLocaleString();
}

const formatPrice = (value: number) => {
  if (value >= 1_000_000_000) {
    return `₮${value / 1_000_000_000} тэрбум`;
  }

  return `₮${value / 1_000_000} сая`;
};

export default function Hero() {
  const listings = useCountUp(4820);
  const loans = useCountUp(2190);

  const [brand, setBrand] = useState<string | undefined>();
  const [model, setModel] = useState<string | undefined>();
  const [priceRange, setPriceRange] = useState<[number, number]>([
    20_000_000,
    120_000_000,
  ]);

  const handleSearch = () => {
    console.log({
      brand,
      model,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  };

  return (
    <section className="relative flex h-[calc(100vh-64px)] items-center overflow-hidden bg-white px-4 py-12 md:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 blur-sm"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />

      <div className="absolute inset-0 bg-white/50" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-gray-700 md:text-7xl">
            Moncar
          <span className="text-primary-600"> авто систем</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          <strong className="text-primary-600">{listings}</strong> идэвхтэй зараас тохирох автомашинаа олоорой.
        </p>

        {/* Airbnb style Ant Design search */}
        <div className="mt-9 w-full max-w-5xl">
          <div className="mx-auto flex min-h-16 w-full items-center overflow-hidden rounded-full border border-gray-200 bg-white p-3 shadow-lg">
            <div className="flex flex-1 flex-col px-6 text-left">
              <Select
                variant="borderless"
                placeholder="Марк сонгох"
                value={brand}
                onChange={setBrand}
                className="w-full [&_.ant-select-placeholder]:!text-[#101828] font-semibold"
                options={[
                  { value: "Toyota", label: "Toyota" },
                  { value: "Lexus", label: "Lexus" },
                  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
                  { value: "BMW", label: "BMW" },
                ]}
              />
            </div>

            <div className="h-8 w-px bg-gray-200" />

            <div className="flex flex-1 flex-col px-6 text-left">
              <Select
                variant="borderless"
                placeholder="Загвар сонгох"
                value={model}
                onChange={setModel}
                className="w-full [&_.ant-select-placeholder]:!text-[#101828] font-semibold"
                options={[
                  { value: "Prius", label: "Prius" },
                  { value: "RX", label: "RX" },
                  { value: "Harrier", label: "Harrier" },
                  { value: "Land Cruiser", label: "Land Cruiser" },
                ]}
              />
            </div>

            <div className="h-8 w-px bg-gray-200" />

            <div className="flex flex-[1.4] flex-col px-6 text-left">

              <div className="flex items-center gap-4">
                <span className="whitespace-nowrap text-sm text-gray-900 font-semibold">
                  {formatPrice(priceRange[0])} — {formatPrice(priceRange[1])}
                </span>

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
                  className="mb-0 flex-1"
                />
              </div>
            </div>

            <Button
              type="primary"
              shape="circle"
              icon={<SearchOutlined />}
              onClick={handleSearch}
              className="!h-12 !w-12 !bg-[#e40046] hover:!bg-[#c9003e]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}