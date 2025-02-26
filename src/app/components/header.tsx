import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-16 px-4">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-semibold">
          HC Blog
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/blog" className="text-md">
          Blog
        </Link>
        <Link href="/about" className="text-md">
          About
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
}
