import { appMetadata } from "@/data/seo";
import RetroSnakeLegal from "@/components/RetroSnakeLegal";
export const metadata = appMetadata("retro-snake", "terms");
export default function Page() { return <RetroSnakeLegal documentID="terms" />; }
