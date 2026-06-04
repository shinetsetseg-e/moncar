"use client";

import { useEffect, useMemo, useState } from "react";
import { Button as AntButton, Form } from "antd";
import AuthCard from "@/components/auth/AuthCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { CheckIcon } from "@/components/icons";

type AuthState = "login" | "register" | "otp" | "forgot" | "success";

export default function AuthPage() {
  const [state, setState] = useState<AuthState>("login");
  const [timer, setTimer] = useState(300);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    if (state !== "otp") {
      return;
    }

    setTimer(300);
    const interval = window.setInterval(() => {
      setTimer((value) => {
        if (value <= 1) {
          window.clearInterval(interval);
          return 0;
        }

        return value - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [state]);

  const timerText = useMemo(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `0${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, [timer]);

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-[440px]">
        {state === "login" ? (
          <AuthCard title="МОНКАР" subtitle="Тавтай морилно уу! Нэвтэрч орно уу.">
            <Form component="div" className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Утасны дугаар</label>
                <Input type="tel" placeholder="9900 0000" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Нууц үг</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="text-right">
                <AntButton className="!h-auto !p-0 !text-[13px] !text-primary-600 !shadow-none hover:!text-primary-700" onClick={() => setState("forgot")} type="link">
                  Нууц үг мартсан?
                </AntButton>
              </div>
              <Button href="/profile" fullWidth>
                Нэвтрэх
              </Button>
              <div className="flex items-center gap-3 text-[13px] text-gray-400 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
                эсвэл
              </div>
              <Button variant="ghost" fullWidth onClick={() => setState("register")}>
                Бүртгүүлэх
              </Button>
            </Form>
          </AuthCard>
        ) : null}

        {state === "register" ? (
          <AuthCard title="МОНКАР" subtitle="Шинэ бүртгэл үүсгэх">
            <Form component="div" className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Утасны дугаар</label>
                <Input placeholder="9900 0000" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Нууц үг</label>
                <Input type="password" placeholder="••••••••" />
                <div className="mt-[-4px] rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-xs text-gray-500">
                  🔒 Нууц үг 8–25 тэмдэгттэй, Latin үсэг, тоо, тусгай тэмдэгт агуулсан байна.
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Нууц үг давтах</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <Button fullWidth onClick={() => setState("otp")}>
                OTP илгээх
              </Button>
              <div className="flex items-center gap-3 text-[13px] text-gray-400 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
                эсвэл
              </div>
              <Button variant="ghost" fullWidth onClick={() => setState("login")}>
                Нэвтрэх
              </Button>
            </Form>
          </AuthCard>
        ) : null}

        {state === "otp" ? (
          <AuthCard title="МОНКАР" subtitle="📱 +976 9900 0000 дугаарт OTP илгээлээ">
            <Form component="div" className="flex flex-col gap-4">
              <div className="flex justify-center gap-[10px]">
                {otp.map((value, index) => (
                  <Input
                    key={index}
                    maxLength={1}
                    value={value}
                    onChange={(event) => {
                      const next = [...otp];
                      next[index] = event.target.value.slice(-1);
                      setOtp(next);
                      if (event.target.value && index < 5) {
                        const nextInput = document.getElementById(`otp-${index + 1}`);
                        nextInput?.focus();
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Backspace" && !otp[index] && index > 0) {
                        const prevInput = document.getElementById(`otp-${index - 1}`);
                        prevInput?.focus();
                      }
                    }}
                    id={`otp-${index}`}
                    className="h-14 w-[52px] rounded-lg border-2 text-center text-[22px] font-bold"
                  />
                ))}
              </div>
              <div className="text-center text-[13px] text-gray-500">
                OTP хүчинтэй хугацаа: <strong className="text-primary-600">{timerText}</strong>
              </div>
              <Button fullWidth onClick={() => setState("success")}>
                Баталгаажуулах
              </Button>
              <div className="text-center text-[13px] text-gray-500">
                Код ирээгүй юу? <span className="cursor-pointer text-primary-600">Дахин код авах</span>
              </div>
            </Form>
          </AuthCard>
        ) : null}

        {state === "forgot" ? (
          <AuthCard title="МОНКАР" subtitle="Утасны дугаараа оруулна уу">
            <Form component="div" className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold tracking-[0.3px] text-gray-600">Утасны дугаар</label>
                <Input placeholder="9900 0000" />
              </div>
              <Button fullWidth onClick={() => setState("otp")}>
                OTP илгээх
              </Button>
              <Button variant="ghost" fullWidth onClick={() => setState("login")}>
                ← Буцах
              </Button>
            </Form>
          </AuthCard>
        ) : null}

        {state === "success" ? (
          <AuthCard title="Амжилттай!" subtitle="Та амжилттай нэвтэрлээ." center titleClassName="text-green-active">
            <div className="pb-5 pt-1">
              <div className="mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-green-bg">
                <CheckIcon className="h-8 w-8 stroke-green-active" />
              </div>
              <Button href="/" fullWidth className="mt-4">
                Нүүр хуудас руу
              </Button>
            </div>
          </AuthCard>
        ) : null}
      </div>
    </div>
  );
}
