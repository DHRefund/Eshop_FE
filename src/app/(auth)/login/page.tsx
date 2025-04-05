import { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập vào tài khoản E-shop của bạn.",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Đăng nhập</h1>
          <p className="mt-2 text-gray-600">Đăng nhập để truy cập vào tài khoản của bạn</p>
        </div>

        <LoginForm />

        <div className="mt-4 text-center text-sm">
          <p>
            Chưa có tài khoản?{" "}
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
