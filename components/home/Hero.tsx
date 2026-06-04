"use client";

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

export default function Hero() {
  const listings = useCountUp(4820);
  const loans = useCountUp(2190);
  const [price, setPrice] = useState(120_000_000);

  return (
    <section className="relative flex h-[calc(100vh-64px)] items-center overflow-hidden bg-white px-4 py-12 md:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 blur-sm"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1659946431273-5cfabfa85197?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />

      <div className="absolute inset-0 bg-white/50" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-gray-900 md:text-7xl">
          Монголын <span className="text-primary-600"> автомашины нэгдсэн систем</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          Марк, загвар, үнэ сонгоод тохирох автомашинаа олоорой.
        </p>

        <div className="mt-9 w-full rounded-3xl border border-white/60 bg-white/50 p-3 shadow-lg">
          <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1.4fr_auto]">
            <select className="h-14 rounded-2xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-800 outline-none focus:border-primary-500">
              <option>Марк</option>
              <option>Toyota</option>
              <option>Lexus</option>
              <option>Mercedes-Benz</option>
              <option>BMW</option>
            </select>

            <select className="h-14 rounded-2xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-800 outline-none focus:border-primary-500">
              <option>Загвар</option>
              <option>Prius</option>
              <option>RX</option>
              <option>Harrier</option>
              <option>Land Cruiser</option>
            </select>

            <div className="flex h-14 items-center gap-4 rounded-2xl border border-gray-200 bg-white px-4">
              <div className="min-w-[130px] text-left">
                <p className="text-xs font-semibold text-gray-500">Үнэ</p>
                <p className="text-sm font-semibold text-gray-900">
                  ₮0 — ₮{price.toLocaleString()}
                </p>
              </div>

              <input
                type="range"
                min={5_000_000}
                max={500_000_000}
                step={5_000_000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full cursor-pointer accent-primary-600"
              />
            </div>

            <button className="h-14 rounded-2xl bg-primary-600 px-8 text-sm font-semibold text-white transition hover:bg-primary-700">
              Хайх
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-semibold text-gray-600">
          <span className="rounded-full bg-white/80 px-4 py-2">
            <strong className="text-primary-600">{listings}</strong> идэвхтэй зар
          </span>

          <span className="rounded-full bg-white/80 px-4 py-2">
            <strong className="text-primary-600">{loans}</strong> зээлтэй зар
          </span>

          <span className="rounded-full bg-white/80 px-4 py-2">
            Escrow хамгаалалт
          </span>
        </div>
      </div>
    </section>
  );
}