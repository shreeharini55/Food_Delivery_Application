import { CouponCard } from "@/components/home/CouponCard";
import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { offers } from "@/lib/home-data";

export default function OffersPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Offers"
        description="Exclusive deals and promo codes for you."
      />

      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        {offers.map((offer) => (
          <CouponCard key={offer.code} offer={offer} />
        ))}
      </div>
    </DashboardLayout>
  );
}
