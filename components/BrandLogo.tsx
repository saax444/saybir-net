import Image from "next/image";
import Link from "next/link";
import "./BrandLogo.css";

type BrandLogoProps = {
  href?: string;
};

export default function BrandLogo({ href = "/" }: BrandLogoProps) {
  return (
    <Link className="brand-logo" href={href} aria-label="Saybir ana sayfa">
      <Image
        className="brand-logo-image"
        src="/brand/logo-saybir.png"
        alt="Saybir"
        width={128}
        height={128}
        priority
      />
    </Link>
  );
}
