import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Rannco - Built Different"
      width={240}
      height={160}
      className={className}
      priority
    />
  );
}
