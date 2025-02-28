import Link from "next/link";
import HeaderLink from "./header-link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full h-16 px-4 backdrop-blur">
      <Link href="/" className="text-xl font-semibold">
        HC
      </Link>
      <div className="flex items-center space-x-8">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/blog">Blog</HeaderLink>
        <HeaderLink href="/about">About</HeaderLink>
      </div>
      <ThemeToggle />
    </header>
  );
}
