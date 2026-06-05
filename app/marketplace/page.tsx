import type { Metadata } from "next";
import MarketplaceContent from "@/components/listings/MarketplaceContent";

export const metadata: Metadata = {
  title: "Marketplace | Монкар",
};

export default function MarketplacePage() {
  return <MarketplaceContent />;
}
