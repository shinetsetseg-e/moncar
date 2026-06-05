"use client";

import AuthCard from "@/components/auth/AuthCard";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button, FormField, Input } from "@/shared";
import { Button as AntButton, Form } from "antd";
import { ChevronLeft, Lock, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type AuthState = "login" | "register" | "otp" | "forgot" | "success";

export default function AuthPage() {
  const router = useRouter();
  const { login } = useAuth();
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
          <AuthCard title="MONCAR" subtitle="Тавтай морилно уу! Нэвтэрч орно уу.">
            <Form component="div" className="flex flex-col gap-4">
              <FormField label="Утасны дугаар">
                <Input placeholder="9900 0000" type="tel" />
              </FormField>
              <FormField label="Нууц үг">
                <Input placeholder="••••••••" type="password" />
              </FormField>
              <div className="text-right">
                <AntButton className="!h-auto !p-0 !text-[13px] !text-primary-600 !shadow-none hover:!text-primary-700" onClick={() => setState("forgot")} type="link">
                  Нууц үг мартсан?
                </AntButton>
              </div>
              <Button
                fullWidth
                onClick={() => {
                  login();
                  router.push("/profile");
                }}
              >
                Нэвтрэх
              </Button>
              <div className="flex items-center gap-3 text-[13px] text-gray-400 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
                эсвэл
              </div>
              <Button fullWidth variant="ghost" onClick={() => setState("register")}>
                Бүртгүүлэх
              </Button>
            </Form>
          </AuthCard>
        ) : null}

        {state === "register" ? (
          <AuthCard title="MONCAR" subtitle="Шинэ бүртгэл үүсгэх">
            <Form component="div" className="flex flex-col gap-4">
              <FormField label="Утасны дугаар">
                <Input placeholder="9900 0000" />
              </FormField>
              <FormField
                label="Нууц үг"
                hint={
                  <span className="inline-flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-xs text-gray-500">
                    <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />
                    <span>Нууц үг 8-25 тэмдэгттэй, латин үсэг, тоо, тусгай тэмдэгт агуулсан байна.</span>
                  </span>
                }
              >
                <Input placeholder="••••••••" type="password" />
              </FormField>
              <FormField label="Нууц үг давтах">
                <Input placeholder="••••••••" type="password" />
              </FormField>
              <Button fullWidth onClick={() => setState("otp")}>
                OTP илгээх
              </Button>
              <div className="flex items-center gap-3 text-[13px] text-gray-400 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
                эсвэл
              </div>
              <Button fullWidth variant="ghost" onClick={() => setState("login")}>
                Нэвтрэх
              </Button>
            </Form>
          </AuthCard>
        ) : null}

        {state === "otp" ? (
          <AuthCard
            title="MONCAR"
            subtitle={
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4" strokeWidth={2.2} />
                +976 9900 0000 дугаарт OTP илгээлээ
              </span>
            }
          >
            <Form component="div" className="flex flex-col gap-4">
              <div className="flex justify-center gap-[10px]">
                {otp.map((value, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    className="h-14 w-[52px] rounded-lg border-2 text-center text-[22px] font-bold"
                    maxLength={1}
                    value={value}
                    onChange={(event) => {
                      const next = [...otp];
                      next[index] = event.target.value.slice(-1);
                      setOtp(next);
                      if (event.target.value && index < 5) {
                        document.getElementById(`otp-${index + 1}`)?.focus();
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Backspace" && !otp[index] && index > 0) {
                        document.getElementById(`otp-${index - 1}`)?.focus();
                      }
                    }}
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
          <AuthCard title="MONCAR" subtitle="Утасны дугаараа оруулна уу">
            <Form component="div" className="flex flex-col gap-4">
              <FormField label="Утасны дугаар">
                <Input placeholder="9900 0000" />
              </FormField>
              <Button fullWidth onClick={() => setState("otp")}>
                OTP илгээх
              </Button>
              <Button fullWidth variant="ghost" onClick={() => setState("login")}>
                <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
                Буцах
              </Button>
            </Form>
          </AuthCard>
        ) : null}

        {state === "success" ? (
          <AuthCard center subtitle="Та амжилттай нэвтэрлээ." title="Амжилттай!" titleClassName="text-green-active">
            <div className="pb-5 pt-1">
              <Button
                fullWidth
                className="mt-4"
                onClick={() => {
                  login();
                  router.push("/");
                }}
              >
                Нүүр хуудас руу
              </Button>
            </div>
          </AuthCard>
        ) : null}
      </div>
    </div>
  );
}
