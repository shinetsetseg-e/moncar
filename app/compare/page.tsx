import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { compareRows } from "@/data/compare";
import { savedListings } from "@/data/listings";
import { CarPlaceholderIcon } from "@/components/icons";

export default function ComparePage() {
  const compareListings = savedListings.slice(0, 3);

  return (
    <div className="mx-auto max-w-[1280px] overflow-x-auto px-4 py-8 md:px-8">
      <h2 className="mb-6 text-2xl font-bold">Машин харьцуулах</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] overflow-hidden rounded-xl border border-gray-200 bg-white">
          <thead>
            <tr>
              <th className="sticky left-0 w-40 bg-gray-50 px-4 py-3.5 text-left text-xs font-bold uppercase tracking-[0.6px] text-gray-600">Үзүүлэлт</th>
              {compareListings.map((listing) => (
                <th key={listing.id} className="bg-white px-4 py-3.5 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="mb-1 flex h-[100px] w-full items-center justify-center rounded-lg bg-gray-100">
                      <CarPlaceholderIcon className="h-10 w-[60px] opacity-100" />
                    </div>
                    <div className="text-[13px] font-bold text-gray-900">{listing.shortTitle}</div>
                    <div className="text-[15px] font-bold text-primary-600">{listing.price}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr key={row.label}>
                <td className="sticky left-0 border-b border-gray-100 bg-gray-50 px-4 py-3.5 text-sm font-bold text-gray-700">{row.label}</td>
                {row.values.map((value, index) => (
                  <td key={`${row.label}-${index}`} className="border-b border-gray-100 px-4 py-3.5 text-sm">
                    {row.badgeValues ? <Badge variant={row.badgeValues[index]}>{value}</Badge> : value}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="sticky left-0 border-b border-gray-100 bg-gray-50 px-4 py-3.5 text-sm font-bold text-gray-700">Үйлдлүүд</td>
              {compareListings.map((listing) => (
                <td key={`${listing.id}-actions`} className="border-b border-gray-100 px-4 py-3.5">
                  <div className="flex flex-col gap-1.5">
                    <Button href={`/listings/${listing.id}`} size="sm">
                      Дэлгэрэнгүй
                    </Button>
                    {listing.loanEligible ? (
                      <Button href="/loan" variant="secondary" size="sm">
                        Зээл
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" disabled>
                        Зээл
                      </Button>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
