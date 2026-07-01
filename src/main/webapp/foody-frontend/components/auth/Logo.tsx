import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/logo/logo.svg"
        alt="BringEs"
        width={200}
        height={60}
        className={className}
        priority
      />
    </Link>
  );
}
