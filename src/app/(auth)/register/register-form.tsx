"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Đang đăng ký..." : "Đăng ký"}
    </Button>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const [state, dispatch] = useFormState(async (prevState, formData) => {
    const result = await register(formData);
    if (result.success) {
      router.push("/login?registered=true");
      return prevState;
    }
    return result;
  }, undefined);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action={dispatch} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Họ tên</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Nguyễn Văn A"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Mật khẩu</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {state?.errors?.password && <p className="text-sm text-red-500">{state.errors.password[0]}</p>}
      </div>

      {state?.message && <div className="rounded-md bg-red-50 p-3 text-sm text-red-500">{state.message}</div>}

      <SubmitButton />
    </form>
  );
}
