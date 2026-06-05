import BrandGrid from "@/components/home/BrandGrid";
import Hero from "@/components/home/Hero";
import PromoBanners from "@/components/home/PromoBanners";
import Footer from "@/components/layout/Footer";
import ListingCard from "@/components/listings/ListingCard";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredListings } from "@/data/listings";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-4 py-10 md:px-8 md:py-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            label="Premium зарууд"
            title="Онцлох машинууд"
            action={
              <Button href="/marketplace" variant="ghost">
                Бүгдийг үзэх →
              </Button>
            }
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
