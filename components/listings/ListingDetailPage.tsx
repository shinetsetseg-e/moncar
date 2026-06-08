"use client";

import ListingGallery from "@/components/listings/ListingGallery";
import SpecsGrid from "@/components/listings/SpecsGrid";
import LoanCalculator from "@/shared/data-display/LoanCalculator";
import Modal from "@/shared/dialogs/Modal";
import Button from "@/shared/form/Button";
import Select from "@/shared/form/Select";
import Textarea from "@/shared/form/Textarea";
import Badge from "@/shared/status/Badge";
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
  Upload
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  listing: Listing;
}

export default function ListingDetailPage({ listing }: Props) {
  const [open, setOpen] = useState(false);
  const loanRequestHref = `/loan?listing=${listing.id}`;

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

          <div className="lg:sticky lg:top-16 flex flex-col gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5">
                <div
                  id="listing-purchase-actions"
                  className="mt-1 text-[28px] font-extrabold tracking-tight text-primary-600"
                >
                  {listing.price}
                </div>

                <div className="mt-2 text-[13px] leading-5 text-gray-500">
                  {listing.title} · {listing.year} · {listing.mileage}
                </div>
              </div>

              <div className="space-y-2.5">
                <Button size="lg" fullWidth>
                  <Phone className="h-4 w-4" strokeWidth={2.2} />
                  Утас харах / Залгах
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="ghost">
                    <Heart className="h-4 w-4" strokeWidth={2.2} />
                    Хадгалах
                  </Button>

                  <Button variant="ghost">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                    Хуваалцах
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="w-full border-gray-200 text-gray-600 hover:border-red-danger hover:bg-red-bg hover:text-red-danger"
                  onClick={() => setOpen(true)}
                >
                  <TriangleAlert className="h-4 w-4" strokeWidth={2.2} />
                  Зарын талаар гомдол илгээх
                </Button>
              </div>

              <div className="mt-5 border-t border-gray-100 pt-4">
                <div className="grid gap-3 text-[13px] text-gray-600">
                  <div className="flex items-center justify-between gap-3">
                    <span>Зарын төлөв</span>
                    <span className="font-semibold text-green-600">
                      Идэвхтэй
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>Байршил</span>
                    <span className="font-semibold text-gray-900">
                      {listing.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>Төлбөрийн боломж</span>
                    <span className="font-semibold text-gray-900">
                      Бэлэн / Зээл / Escrow
                    </span>
                  </div>

                  <div className="mb-5 rounded-xl border border-primary-100 bg-primary-50/70 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                        <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
                      </div>

                      <div>
                        <div className="text-[14px] font-bold text-gray-900">
                          Аюулгүй худалдан авалт
                        </div>

                        <p className="mt-1 text-[13px] leading-5 text-gray-600">
                          Escrow хамгаалалт ашигласнаар төлбөрийг баталгаатай хадгалж,
                          худалдан авалтаа эрсдэл багатай хийх боломжтой.
                        </p>

                        <Link
                          href="/escrow"
                          className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-primary-700 hover:underline"
                        >
                          Escrow хэрхэн ажилладаг вэ?
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <LoanCalculator
              basePrice={listing.price}
              className="mb-4"
              loanRequestHref={loanRequestHref}
              onBuyNow={() => {
                document.getElementById("listing-purchase-actions")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            />
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
