"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import ListingCard from "@/components/listings/ListingCard";
import { savedListings } from "@/data/listings";

export default function SavedPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(savedListings.slice(0, 2).map((listing) => listing.id));

  const selectedQuery = useMemo(() => selectedIds.join(","), [selectedIds]);
  const singleSelectedId = selectedIds.length === 1 ? selectedIds[0] : null;

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Миний хадгалсан машинууд</h1>
          <div className="text-sm text-gray-500">{savedListings.length} машин хадгалагдсан</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button href={selectedIds.length > 1 ? `/compare?ids=${selectedQuery}` : undefined} variant="secondary" disabled={selectedIds.length < 2}>
            Харьцуулах
          </Button>
          <Button href={singleSelectedId ? `/loan?listing=${singleSelectedId}` : undefined} disabled={!singleSelectedId}>
            Зээлийн хүсэлт илгээх
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {savedListings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            mode="saved"
            selectable
            selected={selectedIds.includes(listing.id)}
            onSelectedChange={(checked) =>
              setSelectedIds((current) =>
                checked ? [...current, listing.id] : current.filter((item) => item !== listing.id),
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
