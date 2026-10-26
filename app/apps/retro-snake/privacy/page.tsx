import { appMetadata } from "@/data/seo";
import RetroSnakeLegal from "@/components/RetroSnakeLegal";
export const metadata = appMetadata("retro-snake", "privacy");
export default function Page() { return <RetroSnakeLegal documentID="privacy" />; }
