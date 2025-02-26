"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-md font-medium hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300 ${
        isActive ? "text-light-primary dark:text-dark-primary" : ""
      }`}>
      {children}
    </Link>
  );
}
