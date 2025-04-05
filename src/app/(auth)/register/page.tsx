import { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Tạo tài khoản mới cho E-shop.",
};

export default function RegisterPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Đăng ký</h1>
          <p className="mt-2 text-gray-600">Tạo tài khoản mới để sử dụng E-shop</p>
        </div>

        <RegisterForm />

        <div className="mt-4 text-center text-sm">
          <p>
            Đã có tài khoản?{" "}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
