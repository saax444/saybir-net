import Link from "next/link";
import "./BrandLogo.css";
type BrandLogoProps={href?:string};
export default function BrandLogo({href="/"}:BrandLogoProps){return <Link className="brand-logo" href={href} aria-label="SAYBIR ana sayfa"><span className="brand-logo-mark">S</span><span className="brand-logo-word">SAYBIR</span></Link>}