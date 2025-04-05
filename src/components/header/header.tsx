import Link from "next/link";
import { auth } from "@/auth";
import { ModeToggle } from "../mode-toggle";
import { UserAccountNav } from "./user-account-nav";
import { MainNav } from "@/components/header/main-nav";
import { SearchBar } from "@/components/header/search-bar";
import { Logo } from "@/components/header/logo";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function Header() {
  const session = await auth();
  const user = session?.user;
  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    image: string;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Logo />
          <MainNav />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full max-w-sm">
            <SearchBar />
          </div>

          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart" aria-label="Giỏ hàng">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>

            <ModeToggle />

            {user ? (
              <UserAccountNav user={user as User} />
            ) : (
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">Đăng nhập</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/register">Đăng ký</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
