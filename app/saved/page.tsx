"use client";

import { useMemo, useState } from "react";
import { savedListings } from "@/data/listings";
import { Button, ListingCard, PageHeader } from "@/shared/components";

export default function SavedPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(savedListings.slice(0, 2).map((listing) => listing.id));

  const selectedQuery = useMemo(() => selectedIds.join(","), [selectedIds]);
  const singleSelectedId = selectedIds.length === 1 ? selectedIds[0] : null;

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
      <PageHeader
        title="Миний хадгалсан машинууд"
        subtitle={`${savedListings.length} машин хадгалагдсан`}
        action={
          <>
            <Button href={selectedIds.length > 1 ? `/compare?ids=${selectedQuery}` : undefined} disabled={selectedIds.length < 2} variant="secondary">
              Харьцуулах
            </Button>
            <Button href={singleSelectedId ? `/loan?listing=${singleSelectedId}` : undefined} disabled={!singleSelectedId}>
              Зээлийн хүсэлт илгээх
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {savedListings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            mode="saved"
            selectable
            selected={selectedIds.includes(listing.id)}
            onSelectedChange={(checked) =>
              setSelectedIds((current) => (checked ? [...current, listing.id] : current.filter((item) => item !== listing.id)))
            }
          />
        ))}
      </div>
    </div>
  );
}
