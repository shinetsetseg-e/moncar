"use client";

import ListingGallery from "@/components/listings/ListingGallery";
import SpecsGrid from "@/components/listings/SpecsGrid";
import Badge from "@/shared/status/Badge";
import Modal from "@/shared/dialogs/Modal";
import Button from "@/shared/form/Button";
import Select from "@/shared/form/Select";
import Textarea from "@/shared/form/Textarea";
import type { Listing } from "@/types";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  ChevronRight,
  CircleCheck,
  CreditCard,
  Heart,
  Leaf,
  Phone,
  ShieldCheck,
  Star,
  TriangleAlert,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  listing: Listing;
}

export default function ListingDetailPage({ listing }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-[1280px] px-4 py-7 md:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-gray-500">
          <Link href="/" className="cursor-pointer">
            Нүүр
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-300" strokeWidth={2} />
          <Link href="/marketplace" className="cursor-pointer">
            Marketplace
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-300" strokeWidth={2} />
          <span className="text-gray-700">{listing.title}</span>
        </div>

        <div className="grid gap-7 lg:grid-cols-[1fr_340px]">
          <div>
            <ListingGallery />
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge variant="premium">
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Premium
                </span>
              </Badge>
              <Badge variant="loan">
                <span className="inline-flex items-center gap-1">
                  <CreditCard className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Зээлээр авах боломжтой
                </span>
              </Badge>
              <Badge variant="green">
                <span className="inline-flex items-center gap-1">
                  <Leaf className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Ногоон
                </span>
              </Badge>
              <Badge variant="verified">
                <span className="inline-flex items-center gap-1">
                  <CircleCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
                  VERIFIED
                </span>
              </Badge>
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
              <h4 className="mb-3.5 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.8px] text-primary-700">
                <BarChart3 className="h-4 w-4" strokeWidth={2} />
                Зах зээлийн статистик
              </h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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
            <div className="mt-4 flex flex-col items-start gap-3 rounded-[10px] border border-gray-200 bg-white p-4 sm:flex-row sm:items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">А</div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-gray-900">АвтоМон Дилер</div>
                <div className="inline-flex items-center gap-1.5 text-[13px] text-gray-500">
                  <Building2 className="h-3.5 w-3.5" strokeWidth={2} />
                  Dealer ·
                  <Star className="h-3.5 w-3.5" strokeWidth={2} />
                  4.8 (128 үнэлгээ)
                </div>
                <div className="text-[13px] text-gray-400">УБ, Сүхбаатар дүүрэг</div>
              </div>
              <Badge variant="verified">
                <span className="inline-flex items-center gap-1">
                  <CircleCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Verified
                </span>
              </Badge>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 lg:sticky lg:top-20">
              <div className="mb-1 text-[26px] font-bold text-primary-600">{listing.price}</div>
              <div className="mb-5 text-[13px] text-gray-500">
                {listing.title} · {listing.year} · {listing.mileage}
              </div>
              <div className="flex flex-col gap-2.5">
                <Button size="lg" fullWidth>
                  <Phone className="h-4 w-4" strokeWidth={2.2} />
                  Утас харах / Залгах
                </Button>
                <Button href={`/loan?listing=${listing.id}`} variant="secondary" fullWidth>
                  <CreditCard className="h-4 w-4" strokeWidth={2.2} />
                  Зээлийн хүсэлт илгээх
                </Button>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Button variant="ghost">
                    <Heart className="h-4 w-4" strokeWidth={2.2} />
                    Хадгалах
                  </Button>
                  <Button variant="ghost">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                    Share
                  </Button>
                </div>
                <Button variant="ghost" className="border-red-danger text-red-danger hover:bg-red-bg hover:text-red-danger" onClick={() => setOpen(true)}>
                  <TriangleAlert className="h-4 w-4" strokeWidth={2.2} />
                  Гомдол илгээх
                </Button>
              </div>
              <div className="mt-4 text-[13px] text-primary-700">
                <div className="rounded-lg bg-primary-50 p-3">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
                    <strong>Escrow хамгаалалт</strong>
                  </span>{" "}
                  ашиглаад аюулгүй худалдан авалт хийж болно.{" "}
                  <Link href="/escrow" className="inline-flex items-center gap-1 underline">
                    Дэлгэрэнгүй
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        title={
          <span className="inline-flex items-center gap-2">
            <TriangleAlert className="h-5 w-5 text-red-danger" strokeWidth={2.2} />
            Гомдол илгээх
          </span>
        }
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
          <div className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-4 text-center text-[13px] text-gray-500">
            <Upload className="h-4 w-4" strokeWidth={2.2} />
            Файл оруулах
          </div>
        </div>
      </Modal>
    </>
  );
}
