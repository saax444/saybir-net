import Text from "@/components/Text";
import Link from "next/link";
import "./BrandLogo.css";
type BrandLogoProps={href?:string};
export default function BrandLogo({href="/"}:BrandLogoProps){return <Link className="brand-logo" href={href} aria-label="SAYBIR"><span className="brand-logo-mark"><Text>{"S"}</Text></span><span className="brand-logo-word"><Text>{"SAYBIR"}</Text></span></Link>}