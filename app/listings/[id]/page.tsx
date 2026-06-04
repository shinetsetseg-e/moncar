import { notFound } from "next/navigation";
import ListingDetailPage from "@/components/listings/ListingDetailPage";
import { getListingById } from "@/data/listings";

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) {
    notFound();
  }

  return <ListingDetailPage listing={listing} />;
}
