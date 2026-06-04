"use client";

import SearchCard from "@/components/listings/SearchCard";
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

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden px-4 pb-10 pt-12 md:px-8 md:pb-16 md:pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-70 blur-xs"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1528597469186-bddab681a37f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />

      {/* White overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40" />

      <div className="absolute right-[-160px] top-[-120px] h-[600px] w-[600px] rounded-full bg-primary-50" />
      <div className="absolute bottom-[-80px] left-[-80px] h-[300px] w-[300px] rounded-full bg-primary-50 opacity-60" />

      <div className="relative z-[1] mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1fr_480px]">
        <div>
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-[100px] border border-primary-200 bg-primary-50 px-3 py-1 text-[13px] font-semibold text-primary-700">
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-primary-600" />
            Монголын #1 машины зах зээл
          </div>

          <h1 className="mb-4 text-[28px] font-bold leading-[1.15] text-gray-900 md:text-[40px]">
            Монголын хамгийн том
            <br />
            <em className="not-italic text-primary-600">машины зах зээл</em>
          </h1>

          <p className="mb-7 text-[17px] leading-[1.6] text-gray-600">
            Машинаа хурдан, найдвартай, ухаалгаар хайж олоорой.
            <br />
            Premium зарууд, Escrow хамгаалалт, IIC зээлийн хүсэлт.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <div className="flex items-center gap-1.5 rounded-[100px] border border-gray-200 bg-white px-4 py-[7px] text-[13px] text-gray-600 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
              <strong className="font-bold text-primary-600">{listings}</strong>{" "}
              Идэвхтэй зар
            </div>

            <div className="flex items-center gap-1.5 rounded-[100px] border border-gray-200 bg-white px-4 py-[7px] text-[13px] text-gray-600 shadow-[0_1px_3px_rgba(16,24,40,.06)]">
              <strong className="font-bold text-primary-600">{loans}</strong>{" "}
              Зээлээр авах боломжтой
            </div>
          </div>
        </div>

        <SearchCard />
      </div>
    </section>
  );
}