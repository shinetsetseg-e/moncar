import BrandGrid from "@/components/home/BrandGrid";
import Hero from "@/components/home/Hero";
import PromoBanners from "@/components/home/PromoBanners";
import Footer from "@/components/layout/Footer";
import { featuredListings } from "@/data/listings";
import { Button, ListingCard, SectionHeader } from "@/shared";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-4 py-10 md:px-8 md:py-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            action={
              <Button href="/marketplace" variant="ghost">
                Бүгдийг үзэх
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Button>
            }
            label="Premium зарууд"
            title="Онцлох машинууд"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} mode="featured" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 px-4 py-10 md:px-8 md:py-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader label="Брэндүүд" title="Алдартай үйлдвэрлэгчид" />
          <BrandGrid />
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <PromoBanners />
        </div>
      </section>

      <Footer />
    </>
  );
}
