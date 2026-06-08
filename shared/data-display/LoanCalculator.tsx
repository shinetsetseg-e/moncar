"use client";

import { cn } from "@/lib/utils";
import SummaryRow from "@/shared/data-display/SummaryRow";
import Button from "@/shared/form/Button";
import { Slider } from "antd";
import { Calculator, CreditCard, Wallet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

function parseCurrencyAmount(value?: number | string | null) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.max(0, value);
  }

  if (typeof value !== "string") {
    return 0;
  }

  const digits = value.replace(/[^\d]/g, "");
  const parsed = Number(digits);

  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCurrency(value: number) {
  return `₮${Math.round(Math.max(0, value)).toLocaleString("en-US")}`;
}

function calculateMonthlyPayment(principal: number, months: number, monthlyRatePercent: number) {
  if (principal <= 0 || months <= 0) {
    return 0;
  }

  const monthlyRate = monthlyRatePercent / 100;

  if (monthlyRate <= 0) {
    return principal / months;
  }

  const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

  return Number.isFinite(payment) ? payment : principal / months;
}

function getMoneyStep(amount: number) {
  if (amount >= 100_000_000) {
    return 2_000_000;
  }

  if (amount >= 20_000_000) {
    return 1_000_000;
  }

  return 500_000;
}

export interface LoanCalculatorProps {
  basePrice?: number | string | null;
  className?: string;
  loanRequestHref?: string;
  onBuyNow?: () => void;
}

export default function LoanCalculator({
  basePrice,
  className,
  loanRequestHref,
  onBuyNow,
}: LoanCalculatorProps) {
  const vehiclePrice = useMemo(() => parseCurrencyAmount(basePrice), [basePrice]);
  const [downPayment, setDownPayment] = useState(0);
  const [months, setMonths] = useState(48);
  const [monthlyInterest, setMonthlyInterest] = useState(1.8);

  useEffect(() => {
    const nextDownPayment = vehiclePrice > 0 ? Math.round(vehiclePrice * 0.3) : 0;
    setDownPayment(Math.min(nextDownPayment, vehiclePrice));
  }, [vehiclePrice]);

  const principal = Math.max(vehiclePrice - downPayment, 0);
  const monthlyPayment = calculateMonthlyPayment(principal, months, monthlyInterest);
  const moneyStep = getMoneyStep(vehiclePrice);

  return (
    <div
      className={cn(
        "rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_40px_rgba(16,24,40,.08)] sm:p-6",
        className,
      )}
    >
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
          <Calculator className="h-5 w-5" strokeWidth={2.1} />
        </div>
        <div>
          <div className="text-lg font-bold text-gray-900">Зээлийн тооцоолуур</div>
          <div className="mt-1 text-[13px] leading-5 text-gray-500">
            Урьдчилсан нөхцөл. Банкны шийдвэрээс хамаарч өөрчлөгдөнө.
          </div>
        </div>
      </div>

      <div className="mb-5 rounded-2xl border border-primary-100 bg-primary-50/70 p-4">
        <SummaryRow label="Машины үнэ" value={formatCurrency(vehiclePrice)} />
        <SummaryRow className="mt-2" label="Зээлийн дүн" value={formatCurrency(principal)} />
      </div>

      <div className="space-y-5">
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label className="text-sm font-semibold text-gray-800">Урьдчилгаа төлбөр</label>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              {formatCurrency(downPayment)}
            </span>
          </div>
          <Slider
            disabled={vehiclePrice <= 0}
            min={0}
            max={Math.max(vehiclePrice, moneyStep)}
            step={moneyStep}
            value={downPayment}
            onChange={(value) => setDownPayment(Array.isArray(value) ? value[0] ?? 0 : value)}
            tooltip={{ formatter: (value) => formatCurrency(value ?? 0) }}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label className="text-sm font-semibold text-gray-800">Хугацаа (сар)</label>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              {months} сар
            </span>
          </div>
          <Slider
            min={12}
            max={84}
            step={12}
            marks={{ 12: "12", 36: "36", 60: "60", 84: "84" }}
            value={months}
            onChange={(value) => setMonths(Array.isArray(value) ? value[0] ?? 12 : value)}
            tooltip={{ formatter: (value) => `${value ?? 0} сар` }}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label className="text-sm font-semibold text-gray-800">Сарын хүү</label>
            <span className="rounded-full bg-red-bg px-3 py-1 text-xs font-semibold text-red-danger">
              {monthlyInterest.toFixed(1)}%
            </span>
          </div>
          <Slider
            min={0}
            max={3.5}
            step={0.1}
            value={monthlyInterest}
            onChange={(value) =>
              setMonthlyInterest(Array.isArray(value) ? value[0] ?? 0 : Number(value.toFixed(1)))
            }
            tooltip={{ formatter: (value) => `${Number(value ?? 0).toFixed(1)}%` }}
          />
        </div>
      </div>

      <div className="mt-6 rounded-[20px] border border-primary-200 bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.6)]">
        <div className="mb-2 text-[13px] font-semibold uppercase tracking-[0.3px] text-primary-700">
          Сарын төлөлт (ойролцоогоор)
        </div>
        <div className="text-[30px] font-black leading-none text-primary-600 sm:text-[34px]">
          {formatCurrency(monthlyPayment)}
        </div>
        <div className="mt-2 flex items-center gap-2 text-[12px] text-gray-500">
          <Wallet className="h-3.5 w-3.5 shrink-0 text-red-danger" strokeWidth={2.2} />
          Урьдчилгаа болон хүүгийн тохируулгаас хамаарч төлөлт шууд өөрчлөгдөнө.
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2.5">
        <Button href={loanRequestHref} fullWidth>
          <CreditCard className="h-4 w-4" strokeWidth={2.2} />
          Зээлийн хүсэлт илгээх
        </Button>
      </div>
    </div>
  );
}
