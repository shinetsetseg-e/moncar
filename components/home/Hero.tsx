"use client";

import { Button, Select, Slider } from "antd";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const listings = useCountUp(4820);
  const loans = useCountUp(2190);
  const [brand, setBrand] = useState<string | undefined>();
  const [model, setModel] = useState<string | undefined>();
  const [priceRange, setPriceRange] = useState<[number, number]>([20_000_000, 120_000_000]);

  const handleSearch = () => {
    console.log({
      brand,
      listings,
      loans,
      model,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });

    router.push("/marketplace");
  };

  return (
    <section className="relative flex min-h-[calc(100svh-64px)] items-center overflow-hidden bg-white px-4 py-10 md:h-[calc(100vh-64px)] md:px-8 md:py-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 blur-sm"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />

      <div className="absolute inset-0 bg-white/50" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h1 className="m-0 text-3xl font-black leading-tight tracking-[-0.04em] text-gray-900 sm:text-4xl md:text-6xl">
          
          <span className="relative ml-2 inline-block text-primary-600">
            Moncar 
            <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-primary-200/80" />
          </span> авто зарын
          <br />
          нэгдсэн систем
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          {/* <strong className="text-primary-600">{listings}</strong> идэвхтэй зараас тохирох автомашинаа олоорой. */}
        </p>

        <div className="mt-9 w-full max-w-5xl">
          <div className="mx-auto flex w-full flex-col gap-4 overflow-hidden rounded-[28px] border border-gray-200 bg-white/90 p-3 shadow-lg md:min-h-16 md:flex-row md:items-center md:gap-0 md:rounded-full">
            <div className="flex w-full flex-1 flex-col px-2 text-left sm:px-4 md:px-6">
              <Select
                variant="borderless"
                placeholder="Марк сонгох"
                value={brand}
                onChange={setBrand}
                className="w-full font-semibold [&_.ant-select-placeholder]:!text-[#101828]"
                options={[
                  { value: "Toyota", label: "Toyota" },
                  { value: "Lexus", label: "Lexus" },
                  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
                  { value: "BMW", label: "BMW" },
                ]}
              />
            </div>

            <div className="hidden h-8 w-px bg-gray-200 md:block" />

            <div className="flex w-full flex-1 flex-col px-2 text-left sm:px-4 md:px-6">
              <Select
                variant="borderless"
                placeholder="Загвар сонгох"
                value={model}
                onChange={setModel}
                className="w-full font-semibold [&_.ant-select-placeholder]:!text-[#101828]"
                options={[
                  { value: "Prius", label: "Prius" },
                  { value: "RX", label: "RX" },
                  { value: "Harrier", label: "Harrier" },
                  { value: "Land Cruiser", label: "Land Cruiser" },
                ]}
              />
            </div>

            <div className="hidden h-8 w-px bg-gray-200 md:block" />

            <div className="flex w-full flex-[1.4] flex-col px-2 text-left sm:px-4 md:px-6">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-sm font-semibold text-gray-900 sm:whitespace-nowrap">
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
                    formatter: (value) => (value ? `₮${value.toLocaleString()}` : ""),
                  }}
                  className="mb-0 flex-1"
                />
              </div>
            </div>


            <Button
              type="primary"
              shape="circle"
              icon={<Search className="h-5 w-5" />}
              onClick={handleSearch}
              className="!h-12 !w-12 self-end md:self-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
