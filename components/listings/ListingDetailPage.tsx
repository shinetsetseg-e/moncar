"use client";

import { useState } from "react";
import Link from "next/link";
import type { Listing } from "@/types";
import ListingGallery from "@/components/listings/ListingGallery";
import SpecsGrid from "@/components/listings/SpecsGrid";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

interface Props {
  listing: Listing;
}

export default function ListingDetailPage({ listing }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-[1280px] px-4 py-7 md:px-8">
        <div className="mb-6 flex items-center gap-2 text-[13px] text-gray-500">
          <Link href="/" className="cursor-pointer">
            Нүүр
          </Link>
          <span className="text-gray-300">›</span>
          <Link href="/marketplace" className="cursor-pointer">
            Marketplace
          </Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-700">{listing.title}</span>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1fr_340px]">
          <div>
            <ListingGallery />
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge variant="premium">⭐ Premium</Badge>
              <Badge variant="loan">✓ Зээлээр авах боломжтой</Badge>
              <Badge variant="green">🌿 Ногоон</Badge>
              <Badge variant="verified">✓ VERIFIED</Badge>
            </div>
            <div className="mb-1.5 text-2xl font-bold text-gray-900">{listing.title}</div>
            <div className="mb-3 text-[32px] font-bold text-primary-600">{listing.price}</div>
            <SpecsGrid
              items={[
                { label: "Он", value: listing.year },
                { label: "Явсан км", value: listing.mileage },
                { label: "Хөдөлгүүр", value: listing.engine ?? "" },
                { label: "Дамжуулга", value: listing.transmission ?? "" },
                { label: "Түлш", value: listing.fuel ?? "" },
                { label: "Нөхцөл", value: listing.condition ?? "" },
                { label: "Байршил", value: listing.location },
                { label: "Өнгө", value: listing.color ?? "" },
              ]}
            />
            <div className="mb-6 rounded-xl border border-primary-200 bg-primary-50 p-5">
              <h4 className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.8px] text-primary-700">📊 Зах зээлийн статистик</h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Хамгийн бага үнэ", value: "₮72,000,000" },
                  { label: "Дундаж үнэ", value: "₮91,500,000" },
                  { label: "Хамгийн их үнэ", value: "₮110,000,000" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="mb-0.5 text-[11px] text-primary-600">{item.label}</div>
                    <div className="text-base font-bold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-[10px] border border-gray-200 bg-white p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">А</div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-gray-900">АвтоМон Дилер</div>
                <div className="text-[13px] text-gray-500">🏢 Dealer · ⭐ 4.8 (128 үнэлгээ)</div>
                <div className="text-[13px] text-gray-400">УБ, Сүхбаатар дүүрэг</div>
              </div>
              <Badge variant="verified">✓ Verified</Badge>
            </div>
          </div>

          <div>
            <div className="sticky top-20 rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-1 text-[26px] font-bold text-primary-600">{listing.price}</div>
              <div className="mb-5 text-[13px] text-gray-500">
                {listing.title} · {listing.year} · {listing.mileage}
              </div>
              <div className="flex flex-col gap-2.5">
                <Button size="lg" fullWidth>
                  📞 Утас харах / Залгах
                </Button>
                <Button href={`/loan?listing=${listing.id}`} variant="secondary" fullWidth>
                  💳 Зээлийн хүсэлт илгээх
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="ghost">❤️ Хадгалах</Button>
                  <Button variant="ghost">↗ Share</Button>
                </div>
                <Button variant="ghost" className="border-red-danger text-red-danger hover:bg-red-bg hover:text-red-danger" onClick={() => setOpen(true)}>
                  ⚠️ Гомдол илгээх
                </Button>
              </div>
              <div className="mt-4 rounded-lg bg-primary-50 p-3 text-[13px] text-primary-700">
                🔒 <strong>Escrow хамгаалалт</strong> ашиглаад аюулгүй худалдан авалт хийж болно.{" "}
                <Link href="/escrow" className="underline">
                  Дэлгэрэнгүй →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        title="⚠️ Гомдол илгээх"
        onClose={() => setOpen(false)}
        actions={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Болих
            </Button>
            <Button href="/complaint" variant="danger">
              Илгээх
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Гомдлын шалтгаан *</label>
          <Select>
            <option>Шалтгаан сонгоно уу</option>
            <option>Хуурамч зар</option>
            <option>Буруу мэдээлэл</option>
            <option>Луйвар</option>
            <option>Бусад</option>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Тайлбар</label>
          <Textarea rows={3} placeholder="Дэлгэрэнгүй тайлбар оруулна уу..." className="resize-y" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Зураг / Screenshot (заавал биш)</label>
          <div className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 text-center text-[13px] text-gray-500">📎 Файл оруулах</div>
        </div>
      </Modal>
    </>
  );
}
