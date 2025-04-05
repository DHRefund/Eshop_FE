import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center font-bold">
        <span className="text-primary text-xl">E-shop</span>
      </div>
    </Link>
  );
}
