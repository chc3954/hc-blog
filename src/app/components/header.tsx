import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import HeaderLink from "./header-link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full h-16 px-4 bg-light-background dark:bg-dark-background">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-semibold">
          HC
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/blog">Blog</HeaderLink>
        <HeaderLink href="/about">About</HeaderLink>
      </div>
      <ThemeToggle />
    </header>
  );
}
