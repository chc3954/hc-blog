import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full h-16 px-4">
      <span className="text-sm">&copy; {new Date().getFullYear()} Hyunchul Cho</span>{" "}
      <Link href="https://github.com/chc3954" target="_blank">
        <Github className="w-4 h-4 ml-2" />
      </Link>
      <Link href="https://www.linkedin.com/in/hyunchul-cho-497037216/" target="_blank">
        <Linkedin className="w-4 h-4 ml-2" />
      </Link>
    </footer>
  );
}
