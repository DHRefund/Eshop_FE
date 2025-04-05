import Link from "next/link";
import { cn } from "@/lib/utils";

export function MainNav() {
  const routes = [
    {
      href: "/",
      label: "Trang chủ",
    },
    {
      href: "/products",
      label: "Sản phẩm",
    },
    {
      href: "/categories",
      label: "Danh mục",
    },
    {
      href: "/about",
      label: "Giới thiệu",
    },
    {
      href: "/contact",
      label: "Liên hệ",
    },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn("transition-colors hover:text-foreground/80 text-foreground/60")}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
